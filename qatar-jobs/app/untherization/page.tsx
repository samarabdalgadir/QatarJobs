export default function UnauthorizedPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-3xl font-bold text-red-600">🚫 وصول مرفوض</h1>
      <p className="mt-4 text-lg">ليس لديك الصلاحية لدخول هذه الصفحة.</p>
      <a
        href="/"
        className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        العودة إلى الصفحة الرئيسية
      </a>
    </div>
  );
}
