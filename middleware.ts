import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    if (request.nextUrl.pathname === '/admin/signin') {
        const token = cookies().get('x-admin-token')?.value;
        if (!token) {
            return NextResponse.next();
        }
        return NextResponse.redirect(new URL('/admin/panel', request.url))
    }

    if (request.nextUrl.pathname === '/admin/panel') {
        const token = cookies().get('x-admin-token')?.value;
        if (!token) {
            return NextResponse.redirect(new URL('/admin/signin', request.url))
        }
        return NextResponse.next();
    }

}

export const config = {
    matcher: ['/admin/signin', '/admin/panel/:path*'],
}