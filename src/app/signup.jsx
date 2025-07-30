// /pages/signup.jsx
import { useState } from "react";
import { useRouter } from "next/router";
import { supabase } from "@/lib/supabaseClient";
import { Player } from "@lottiefiles/react-lottie-player";
//import doctorAnimation from "component/Animation/doctor-anim.json";

export default function Signup() {
  const router = useRouter();
  const [form, setForm] = useState({ full_name: "", email: "", password: "" });
  const [error, setError] = useState(null);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSignup = async (e) => {
    e.preventDefault();
    setError(null);

    const { email, password, full_name } = form;

    const { data, error: signUpError } = await supabase.auth.signUp({
      email,
      password,
    });

    if (signUpError) return setError(signUpError.message);

    const user = data?.user;
    if (!user) return setError("Signup failed. Try again.");

    const { error: insertError } = await supabase
      .from("user_profiles")
      .insert([{ id: user.id, full_name, role: "patient" }]);

    if (insertError) return setError(insertError.message);

    router.push("/dashboard/patient");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-slate-100 dark:from-zinc-800 dark:to-black flex items-center justify-center p-6">
      <div className="grid md:grid-cols-2 w-full max-w-4xl shadow-2xl rounded-2xl bg-white dark:bg-zinc-900 overflow-hidden">
        <div className="p-8 space-y-4">
          <h2 className="text-3xl font-bold text-sky-600 dark:text-sky-400">Create a Patient Account</h2>

          <form onSubmit={handleSignup} className="space-y-4">
            <input
              type="text"
              name="full_name"
              placeholder="Full Name"
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg border dark:bg-zinc-800 dark:text-white"
            />
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
              Sign Up
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
