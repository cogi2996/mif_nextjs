import createMiddleware from 'next-intl/middleware';
import { NextResponse } from 'next/server';
import { routing } from './i18n/routing';

// Hàm để kiểm tra xem người dùng có đăng nhập hay không dựa trên header Authorization
function isAuthenticated(req) {
    // console.log('🚀 ~ isAuthenticated ~ req:', req.headers)
    // Lấy header Authorization
    const authHeader = req.headers.get('Authorization');
    // console.log('🚀 ~ isAuthenticated ~ authHeader:', authHeader)

    // Kiểm tra nếu header Authorization có định dạng 'Bearer <token>'
    if (authHeader && authHeader.startsWith('Bearer ')) {
        const token = authHeader.split(' ')[1]; // Tách lấy phần token
        return !!token; // Trả về true nếu có token, ngược lại là false
    }

    return false; // Trả về false nếu không có Authorization header hoặc token không hợp lệ
}

export default function middleware(req) {
    const { pathname } = req.nextUrl;
    const isAuth = isAuthenticated(req);

    // Nếu người dùng đã đăng nhập, không cho vào trang login
    // if (pathname.startsWith('/login') && isAuth) {
    //     return NextResponse.redirect(new URL('/', req.url)); // Redirect đến trang home hoặc trang phù hợp
    // }

    // Nếu người dùng chưa đăng nhập, điều hướng đến trang login
    // if (!isAuth && !pathname.startsWith('/login')) {
    //     return NextResponse.redirect(new URL('/login', req.url));
    // }

    // Trường hợp không cần điều hướng, tiếp tục với middleware quốc tế hoá
    return createMiddleware(routing)(req);
}

export const config = {
    matcher: [
        '/((?!api|_next|_vercel|.*\\..*).*)',
        '/([\\w-]+)?/users/(.+)'
    ]
};