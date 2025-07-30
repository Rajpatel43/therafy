// /src/hooks/useUserRole.js
"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export const useUserRole = () => {
  const [role, setRole] = useState(null);

  useEffect(() => {
    const fetchRole = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (user) {
        const { data, error } = await supabase
          .from("user_profiles")
          .select("role")
          .eq("id", user.id)
          .single();

        if (!error && data) setRole(data.role);
      }
    };

    fetchRole();
  }, []);

  return role;
};
