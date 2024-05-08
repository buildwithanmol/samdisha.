import { response } from "@/utils/helpers";
import { queryEmail } from "@/utils/mail";
import { contactValidation } from "@/utils/validations";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
    try {

        const body = await request.json();

        if (!contactValidation.safeParse(body).success) {
            return NextResponse.json(response(false, 'Invalid Body'), { status: 400 })
        }

        await queryEmail({ email: body.email, name: body.name, query: body.query });

        return NextResponse.json(response(true, 'Email sent successfully'), { status: 200 })
    }
    catch (error: any) {
        return NextResponse.json(response(false, error.message), { status: 500 })
    }
}