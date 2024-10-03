// import { store } from '@/redux/store.js'
// import { NextResponse } from 'next/server';
// // Các route mà người dùng chưa đăng nhập có thể truy cập
// const publicRoutes = ['/home', '/sign-in', '/sign-up'];

// export default function middleware(request) {

//     // const state = store.getState();
//     // const token = state?.auth?.authState?.accessToken;
//     // console.log('🚀 ~ middleware ~ token:', token)

//     // Lấy đường dẫn hiện tại
//     const currentPath = request.nextUrl.pathname;
//     console.log('🚀 ~ middleware ~ currentPath:', currentPath)

//     // Nếu người dùng đã đăng nhập và cố vào trang login hoặc register
//     // if (token && (currentPath === '/sign-in' || currentPath === '/sign-up')) {
//     //     return NextResponse.redirect(new URL('/', request.url)); // Điều hướng về trang home
//     // }

//     // Nếu người dùng chưa đăng nhập và cố vào các trang không phải home, login, register
//     // if (!token && !publicRoutes.includes(currentPath)) {
//     //     return NextResponse.redirect(new URL('/login', request.url)); // Điều hướng về trang đăng nhập
//     // }

//     // Nếu tất cả các điều kiện đều thỏa mãn, tiếp tục truy cập
//     return NextResponse.next();
// }

// // Áp dụng middleware cho tất cả các route
// export const config = {
//     matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
// };

import createMiddleware from 'next-intl/middleware';
import { routing } from '@/i18n/routing';

export default createMiddleware(routing);

export const config = {
    // Match only internationalized pathnames
    matcher: ['/', '/(vi|en)/:path*']
};
