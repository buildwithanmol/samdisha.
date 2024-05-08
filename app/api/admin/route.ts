import { Admin } from "@/models/admin.model";
import { connectDB } from "@/utils/database";
import { adminValidation } from "@/utils/validations";
import { compare, hash } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
    const body = await request.json();

    if (!adminValidation.safeParse(body).success) {
        return NextResponse.json({ success: false, message: 'Invalid Body' }, { status: 400 });
    }

    const { email, password } = body;

    await connectDB();

    const admin = await Admin.findOne({
        email
    }).select('+password')

    const password_compare = await compare(password, admin.password)

    if (!password_compare) {
        return NextResponse.json({ success: true, message: 'Password did not matched!' }, { status: 401 });
    }
    
    const token = sign({ id: admin._id }, process.env.AUTH_TOKEN as string, { expiresIn: '2h' })

    cookies().set('x-admin-token', token, {
        maxAge: 2 * 60 * 60 * 1000
    })

    await Admin.updateOne({ _id: admin._id }, { token })

    return NextResponse.json({ success: true, message: 'User logged in successfully', data: admin })
}
export const GET = async () => {
    const email = 'samdishavishwakarma@gmail.com'
    const password = await hash('Samdisha@2003', 10)
    const data = await Admin.create({ email, password })
    return NextResponse.json(data)
}