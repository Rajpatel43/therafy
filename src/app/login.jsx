// /pages/login.jsx
import { useState } from "react";
import { useRouter } from "next/router";
import { supabase } from "@/lib/supabaseClient";
import { Player } from "@lottiefiles/react-lottie-player";
import doctorAnimation from "@/public/doctor-anim.json";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);

    const { email, password } = form;
    const { data, error: loginError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (loginError) return setError(loginError.message);

    const user = data.user;
    if (!user) return setError("Login failed.");

    // Get role from user_profiles
    const { data: profile, error: profileError } = await supabase
      .from("user_profiles")
      .select("role")
      .eq("id", user.id)
      .single();

    if (profileError || !profile?.role) {
      return setError("Could not fetch user role.");
    }

    const role = profile.role;

    // Redirect based on role
    if (role === "doctor") router.push("/dashboard/doctor");
    else if (role === "admin") router.push("/dashboard/admin");
    else router.push("/dashboard/patient");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-slate-100 dark:from-zinc-800 dark:to-black flex items-center justify-center p-6">
      <div className="grid md:grid-cols-2 w-full max-w-4xl shadow-2xl rounded-2xl bg-white dark:bg-zinc-900 overflow-hidden">
        <div className="p-8 space-y-4">
          <h2 className="text-3xl font-bold text-sky-600 dark:text-sky-400">Login to Therafy</h2>

          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg border dark:bg-zinc-800 dark:text-white"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg border dark:bg-zinc-800 dark:text-white"
            />

            <button
              type="submit"
              className="w-full p-3 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition"
            >
              Login
            </button>

            {error && <p className="text-red-500 text-sm">{error}</p>}
          </form>
        </div>

        <div className="hidden md:flex items-center justify-center bg-sky-50 dark:bg-zinc-800 p-6">
          <Player autoplay loop src={doctorAnimation} className="w-72 h-72" />
        </div>
      </div>
    </div>
  );
}
