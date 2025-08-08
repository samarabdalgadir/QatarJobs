"use client";

import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProfilePage() {
  const { isSignedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isSignedIn) {
      router.push("/login"); //login
    }
  }, [isSignedIn, router]);

  if (!isSignedIn) {
    return null; // 
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">👤  Personal Profile </h1>
      <p>welcom to this page.</p>
    </div>
  );
}
import ProtectedRoute from "@/components/ProtectedRoute";

export default function ProfilePage() {
  return (
    <ProtectedRoute>
      <div className="p-8">
        <h1 className="text-2xl font-bold">👤 Personal Porfile </h1>
        <p>welcom to this page</p>
      </div>
    </ProtectedRoute>
  );
}
