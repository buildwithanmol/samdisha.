import { Blog } from "@/models/blog.model";
import { connectDB } from "@/utils/database";
import { response } from "@/utils/helpers";
import { blogUpdateValidation } from "@/utils/validations";
import { NextRequest, NextResponse } from "next/server";

export const PATCH = async (request: NextRequest, { params }: { params: { blogId: string } }) => {
    try {

        const body = await request.json();
        const _id = params.blogId;

        if (!_id) {
            return NextResponse.json(response(false, 'No Id'), { status: 400 })
        }

        if (!blogUpdateValidation.safeParse(body).success) {
            return NextResponse.json(response(false, 'Invalid Body'), { status: 400 })
        }

        await connectDB();

        const blog = await Blog.find({ _id });

        if (blog.length === 0) {
            return NextResponse.json(response(false, 'No blog found'), { status: 404 })
        }

        const new_object = {
            title: body?.title || blog[0].title,
            og: {
                title: body?.og?.title || blog[0].og?.title,
                description: body?.og?.description || blog[0].og?.description,
                tags: body?.og?.tags || blog[0].og?.tags
            },
            subTitle: body?.subTitle || blog[0].subTitle,
            tableOfContents: body?.tableOfContents || blog[0].tableOfContents,
            content: body?.content || blog[0].content,
            category: body?.category || blog[0].category
        }

        const data = await Blog.updateOne({ _id }, new_object);

        return NextResponse.json(response(true, 'Blogs updated successfully', data), { status: 200 })

    } catch (error: any) {
        return NextResponse.json(response(false, error.message), { status: 500 })
    }
}

export const DELETE = async (request: NextRequest, { params }: { params: { blogId: string } }) => {
    try {

        const _id = params.blogId;

        if (!_id) {
            return NextResponse.json(response(false, 'No Id'), { status: 400 })
        }

        await connectDB();

        const data = await Blog.deleteOne({ _id });

        if (data.deletedCount === 0) {
            return NextResponse.json(response(false, 'Blog not deleted'), { status: 404 })
        }

        return NextResponse.json(response(true, 'Blogs deleted successfully', data), { status: 200 })

    } catch (error: any) {
        return NextResponse.json(response(false, error.message), { status: 500 })
    }
}

export const GET = async (request: NextRequest, { params }: { params: { blogId: string } }) => {
    try {
        const _id = params.blogId;
        if (!_id) {
            return NextResponse.json(response(false, 'No Id'), { status: 400 })
        }
        await connectDB();
        const blog = await Blog.find({ _id });
        if (blog.length === 0) {
            return NextResponse.json(response(false, 'No blog found'), { status: 404 })
        }
        return NextResponse.json(response(true, 'Blog fetched successfully', blog[0]), { status: 200 })
    } catch (error: any) {
        return NextResponse.json(response(false, error.message), { status: 500 })
    }
}