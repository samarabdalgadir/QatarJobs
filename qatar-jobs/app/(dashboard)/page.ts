<ProtectedRoute> DashboardPage </ProtectedRoute
import { auth } from "@clerk/nextjs/server";

export default function DashboardPage() {
  const { userId } = auth();

  if (!userId) return <div>Unauthorized</div>;

  return <div>Welcome to the Dashboard</div>;
}

