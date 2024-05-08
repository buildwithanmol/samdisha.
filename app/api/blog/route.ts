import { Blog } from "@/models/blog.model";
import { connectDB } from "@/utils/database";
import { response } from "@/utils/helpers"
import { blogValidation } from "@/utils/validations";
import { NextRequest, NextResponse } from "next/server"

export const GET = async (request: NextRequest) => {
    try {
        const page = request.nextUrl.searchParams.get('page') || 0
        const limit = request.nextUrl.searchParams.get('limit') || 10;
        const category = request.nextUrl.searchParams.get('category') || null;

        await connectDB();

        let query = {};

        if (category) {
            query = { category }
        } else {
            query = {};
        }

        const blogs = await Blog.find(query).skip(Number(page) * Number(limit)).limit(Number(limit));

        if (blogs.length === 0) {
            return NextResponse.json(response(false, 'No blogs found'), { status: 404 })
        }

        return NextResponse.json(response(true, 'Blogs fetched successfully', blogs), { status: 200 })

    } catch (error: any) {
        return NextResponse.json(response(false, error.message), { status: 500 })
    }
}

export const POST = async (request: NextRequest) => {
    try {

        const body = await request.json();

        if (!blogValidation.safeParse(body).success) {
            return NextResponse.json(response(false, 'Invalid Body'), { status: 400 })
        }

        await connectDB();

        const data = await Blog.create(body);

        return NextResponse.json(response(true, 'Blogs created successfully', data), { status: 200 })

    } catch (error: any) {
        return NextResponse.json(response(false, error.message), { status: 500 })
    }
}