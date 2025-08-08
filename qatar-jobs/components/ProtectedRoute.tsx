"use client";

import { useAuth, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect, ReactNode, useState } from "react";

interface ProtectedRouteProps {
  children: ReactNode;
  allowedRoles?: string[]; // الأدوار المسموح بها
}

export default function ProtectedRoute({
  children,
  allowedRoles,
}: ProtectedRouteProps) {
  const { isSignedIn } = useAuth();
  const { user } = useUser();
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    if (!isSignedIn) {
      router.push("/login");
      return;
    }

    // إذا لم يتم تحديد أدوار، يسمح للجميع
    if (!allowedRoles || allowedRoles.length === 0) {
      setIsAuthorized(true);
      return;
    }

    // نحصل على الدور من Custom Attribute في Clerk
    const userRole = user?.publicMetadata?.role as string;

    if (userRole && allowedRoles.includes(userRole)) {
      setIsAuthorized(true);
    } else {
      router.push("/unauthorized"); // صفحة رفض الوصول
    }
  }, [isSignedIn, allowedRoles, user, router]);

  if (!isSignedIn || !isAuthorized) {
    return null;
  }

  return <>{children}</>;
}
