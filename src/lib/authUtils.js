// /src/lib/authUtils.js
import { supabase } from "./supabaseClient";

export const logout = async () => {
  await supabase.auth.signOut();
  window.location.href = "/"; // or "/login" if you use custom login route
};
