import { Image } from "@/models/image.model";
import { connectDB } from "@/utils/database";
import { response } from "@/utils/helpers"
import { imageValidation } from "@/utils/validations";
import { NextRequest, NextResponse } from "next/server"

export const GET = async (request: NextRequest) => {
    try {
        const page = request.nextUrl.searchParams.get('page') || 0;
        const limit = request.nextUrl.searchParams.get('limit') || 10;

        await connectDB();

        const images = await Image.find({}).skip(Number(page) * Number(limit)).limit(Number(limit));

        if (images.length === 0) {
            return NextResponse.json(response(false, 'No images found'), { status: 404 })
        }

        return NextResponse.json(response(true, 'Images fetched successfully', images), { status: 200 })

    } catch (error: any) {
        return NextResponse.json(response(false, error.message), { status: 500 })
    }
}

export const POST = async (request: NextRequest) => {
    try {
        const body = await request.json();

        if (!imageValidation.safeParse(body).success) {
            return NextResponse.json(response(false, 'Invalid Body'), { status: 400 })
        }

        const image = await Image.create(body);

        return NextResponse.json(response(true, 'Images created successfully', image), { status: 200 })

    } catch (error: any) {
        return NextResponse.json(response(false, error.message), { status: 500 })
    }
}

export const DELETE = async (request: NextRequest) => {
    try {
        const _id = request.nextUrl.searchParams.get('id');

        if (!_id) {
            return NextResponse.json(response(false, 'No Id'), { status: 400 })
        }

        await connectDB();

        const data = await Image.deleteOne({ _id });

        if (data.deletedCount === 0) {
            return NextResponse.json(response(false, 'Image not deleted'), { status: 404 })
        }

        return NextResponse.json(response(true, 'Image deleted successfully'), { status: 200 })

    } catch (error: any) {
        return NextResponse.json(response(false, error.message), { status: 500 })
    }
}