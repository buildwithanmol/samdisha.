import { Blog } from "@/models/blog.model";
import { connectDB } from "@/utils/database";
import { response } from "@/utils/helpers";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest, { params }: { params: { blogId: string } }) => {
    try {
        const _id = params.blogId;
        const dislike = request.nextUrl.searchParams.get('dislike') || false;
        await connectDB();
        const like = dislike ? -1 : 1;
        const blog = await Blog.findOneAndUpdate({ _id }, {
            $inc: {
                likes: like
            }
        })
        return NextResponse.json(response(true, 'Blog liked successfully', blog), { status: 200 })
    } catch (error: any) {
        return NextResponse.json(response(false, error.message), { status: 500 })
    }
}