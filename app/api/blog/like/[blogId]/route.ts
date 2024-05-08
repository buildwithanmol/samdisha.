import { Blog } from "@/models/blog.model";
import { connectDB } from "@/utils/database";
import { response } from "@/utils/helpers";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest, { params }: { params: { blogId: string } }) => {
    try {
        const _id = params.blogId;
        await connectDB();
        const blog = await Blog.findOneAndUpdate({ _id }, {
            $inc: {
                likes: 1
            }
        })
        return NextResponse.json(response(true, 'Blog liked successfully', blog), { status: 200 })
    } catch (error: any) {
        return NextResponse.json(response(false, error.message), { status: 500 })
    }
}