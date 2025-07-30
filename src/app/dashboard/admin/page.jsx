// /src/app/dashboard/admin/page.jsx
"use client";
import AnimatedCard from "@/components/AnimatedCard";
import WeatherClock from "@/components/WeatherClock";
import adminAnim from "../../../public/icons/admin-anim.json"; // use admin-style Lottie
import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
//import NewsFeed from "../../../../components/NewsFeed";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function AdminDashboard() {
  const [appointments, setAppointments] = useState([]);
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    async function fetchAdminData() {
      const appt = await supabase.from("appointments").select("*");
      const docs = await supabase.from("doctors").select("*");
      if (appt.data) setAppointments(appt.data);
      if (docs.data) setDoctors(docs.data);
    }
    fetchAdminData();
  }, []);

  return (
    <div className="p-6 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatedCard
          title="Total Appointments"
          count={appointments.length}
          animationPath={adminAnim}
        />
        <AnimatedCard
          title="Registered Doctors"
          count={doctors.length}
          animationPath={adminAnim}
        />
        <AnimatedCard
          title="System Logs"
          count="12"
          animationPath={adminAnim}
        />
      </div>

      <WeatherClock />
      {/* <NewsFeed /> */}

      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-100">Recent Appointments</h2>
        {appointments.length === 0 ? (
          <p className="text-gray-600">No data available.</p>
        ) : (
          <ul className="space-y-3">
            {appointments.slice(0, 5).map((appt, index) => (
              <li key={index} className="bg-gray-100 dark:bg-gray-700 p-4 rounded-xl">
                <p className="text-sm font-medium">{appt.patient_name} with {appt.doctor_name}</p>
                <p className="text-xs">{appt.date} at {appt.time}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
