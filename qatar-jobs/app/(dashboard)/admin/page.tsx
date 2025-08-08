import ProtectedRoute from "@/components/ProtectedRoute";

export default function AdminPage() {
  return (
    <ProtectedRoute allowedRoles={["admin"]}>
      <div className="p-8">
        <h1 className="text-2xl font-bold">dashbord</h1>
        <p>welcom to this AdminPage</p>
      </div>
    </ProtectedRoute>
  );
}
