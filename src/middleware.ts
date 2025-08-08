// src/middleware.ts
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// تحديد الصفحات التي تتطلب تسجيل دخول
const isProtectedRoute = createRouteMatcher([
  "/dashboard(.*)",   // لوحة التحكم
  "/jobs(.*)",        // إدارة الوظائف
  "/profile(.*)",     // الصفحة الشخصية
]);

export default clerkMiddleware(async (auth, req) => {
  // حماية المسارات المحددة
  if (isProtectedRoute(req)) {
    await auth.protect();
  }
});

// إعدادات المطابقة لمسارات الـ Middleware
export const config = {
  matcher: [
    '/((?!.*\\..*|_next).*)', // تجاهل الملفات الثابتة وملفات Next الداخلية
    '/',     //  main page
    '/(api|trpc)(.*)',        // API
  ],
};
