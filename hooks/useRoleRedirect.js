// /hooks/useRoleRedirect.js
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { supabase } from "@/lib/supabaseClient";

export const useRoleRedirect = (allowedRole) => {
  const [loading, setLoading] = useState(true);
  const [sessionUser, setSessionUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const checkUser = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session?.user) {
        router.push("/login");
        return;
      }

      const user = session.user;
      const { data: profile, error } = await supabase
        .from("user_profiles")
        .select("role")
        .eq("id", user.id)
        .single();

      if (error || !profile?.role) {
        router.push("/login");
        return;
      }

      if (profile.role !== allowedRole) {
        router.push(`/dashboard/${profile.role}`);
        return;
      }

      setSessionUser(user);
      setLoading(false);
    };

    checkUser();
  }, [allowedRole, router]);

  return { loading, sessionUser };
};
