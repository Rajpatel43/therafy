"use client";

import dynamic from "next/dynamic";
import WeatherClock from "@/components/WeatherClock";
//import NewsFeed from "@/components/NewsFeed";
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

// ✅ Dynamic import to avoid `document is not defined` error
const AnimatedCard = dynamic(() => import("@/components/AnimatedCard"), {
  ssr: false,
});

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function DoctorDashboard() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    async function loadAppointments() {
      const { data, error } = await supabase
        .from("appointments")
        .select("*")
        .order("date", { ascending: true })
        .limit(3);
      if (data) setAppointments(data);
    }
    loadAppointments();
  }, []);

  return (
    <div className="p-6 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatedCard title="Total Appointments" count={appointments.length} />
        <AnimatedCard title="Patients Seen" count={24} />
        <AnimatedCard title="Today’s Visits" count={6} />
      </div>

      <WeatherClock />
      {/* <NewsFeed /> */}

      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-100">
          Upcoming Appointments
        </h2>
        {appointments.length === 0 ? (
          <p className="text-gray-600">No upcoming appointments.</p>
        ) : (
          <ul className="space-y-3">
            {appointments.map((appt, index) => (
              <li
                key={index}
                className="bg-gray-100 dark:bg-gray-700 p-4 rounded-xl"
              >
                <p className="text-sm font-medium">{appt.patient_name}</p>
                <p className="text-xs">
                  {appt.date} at {appt.time}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
