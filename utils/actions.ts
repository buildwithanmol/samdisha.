'use server'

import { Blog } from "@/models/blog.model";
import { connectDB } from "./database"

export async function get_categories() {
    await connectDB();
    const data = await Blog.find({}).distinct('category');
    if (data.length === 0) {
        return null
    }
    return data;
}

export async function get_popular() {
    await connectDB(); 
    const data = await Blog.find({}).sort({ likes: -1 }).select('title _id category').limit(10);
    if (data.length === 0) {
        return null
    }
    return data;
}