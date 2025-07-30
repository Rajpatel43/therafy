// /src/app/dashboard/patient/page.jsx
"use client";
import AnimatedCard from "@/components/AnimatedCard";
import WeatherClock from "@/components/WeatherClock";
import patientAnim from "../../../public/icons/patient-anim.json"; // use different animation if you have
import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
//import NewsFeed from "../../../../components/NewsFeed";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function PatientDashboard() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    async function loadMyAppointments() {
      const { data, error } = await supabase
        .from("appointments")
        .select("*")
        .order("date", { ascending: true })
        .limit(3);
      if (data) setAppointments(data);
    }
    loadMyAppointments();
  }, []);

  return (
    <div className="p-6 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatedCard
          title="My Appointments"
          count={appointments.length}
          animationPath={patientAnim}
        />
        <AnimatedCard
          title="Upcoming Visits"
          count="2"
          animationPath={patientAnim}
        />
        <AnimatedCard
          title="Feedback Given"
          count="5"
          animationPath={patientAnim}
        />
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
                <p className="text-sm font-medium">{appt.doctor_name}</p>
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
