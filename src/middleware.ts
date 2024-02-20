export { default } from "next-auth/middleware";

// "/((?!api|/|_next/static|_next/image|favicon.ico).*)",
export const config = {
  matcher: ["/tasks/:path*", "/projects/:path*", "/calender/:path*"]
};
