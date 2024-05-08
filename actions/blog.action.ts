'use server'

import { Blog } from "@/models/blog.model";
import { connectDB } from "@/utils/database";

export const get_blogs = async (page?: number, limit?: number, category?: string) => {
    try {

        await connectDB();

        let query = {};

        if (category) {
            query = { category }
        } else {
            query = {};
        }

        const blogs = await Blog.find(query).skip(Number(page) * Number(limit)).limit(Number(limit));

        if (blogs.length === 0) {
            return null
        }

        return blogs;

    } catch (error: any) {
        console.log(error)
        return null
    }
}

export const get_blog = async (_id: string) => {
    try {
        await connectDB();
        const data = await Blog.find({ _id });
        if (data.length === 0) {
            return null;
        }
        return data[0];
    } catch (error) {
        console.log(error)
        return null;
    }
}