// import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function POST(req) {
//   try {
//     const data = await req.json();

//     const emailResponse = await resend.emails.send({
//       from: "Therafy <onboarding@resend.dev>",
//       to: [
//         "rajhadvani5@gmail.com",
//         "clinic@therafy.ca",
//         "admin@therafy.ca",
//         "support@therafy.ca",
//         "backup@therafy.ca",
//       ],
//       subject: `🩺 New Appointment Request: ${data.name}`,
//       html: `
//         <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 8px; padding: 20px;">
//           <div style="text-align: center; padding-bottom: 15px; border-bottom: 1px solid #e5e7eb;">
//             <h2 style="color: #2563eb; margin: 0;">Therafy - New Appointment</h2>
//             <p style="color: #6b7280; font-size: 14px; margin: 4px 0 0;">A new appointment request has been submitted</p>
//           </div>

//           <div style="padding: 15px 0;">
//             <p><strong>Name:</strong> ${data.name}</p>
//             <p><strong>Email:</strong> ${data.email}</p>
//             <p><strong>Phone:</strong> ${data.phone}</p>
//             <p><strong>Date of Birth:</strong> ${data.dob}</p>
//             <p><strong>Appointment Date:</strong> ${data.date}</p>
//             <p><strong>Time:</strong> ${data.time}</p>
//             <p><strong>Address:</strong> ${data.address}</p>
//             <p><strong>Message:</strong> ${data.message}</p>
//           </div>

//           <div style="text-align: center; border-top: 1px solid #e5e7eb; padding-top: 10px; margin-top: 15px;">
//             <p style="color: #6b7280; font-size: 12px;">© 2025 Therafy. All Rights Reserved.</p>
//           </div>
//         </div>
//       `,
//     });

//     return new Response(JSON.stringify({ success: true, emailResponse }), {
//       status: 200,
//     });
//   } catch (error) {
//     console.error(error);
//     return new Response(JSON.stringify({ error: error.message }), {
//       status: 500,
//     });
//   }
// }
//-----------------------------------------------------
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const data = await req.json();

    const recipients = ["rajhadvani5@gmail.com"];

    const emailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 8px; padding: 20px;">
        <div style="text-align: center; padding-bottom: 15px; border-bottom: 1px solid #e5e7eb;">
          <h2 style="color: #2563eb; margin: 0;">Therafy - New Appointment</h2>
          <p style="color: #6b7280; font-size: 14px; margin: 4px 0 0;">A new appointment request has been submitted</p>
        </div>

        <div style="padding: 15px 0;">
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Phone:</strong> ${data.phone}</p>
          <p><strong>Date of Birth:</strong> ${data.dob}</p>
          <p><strong>Appointment Date:</strong> ${data.date}</p>
          <p><strong>Time:</strong> ${data.time}</p>
          <p><strong>Address:</strong> ${data.address}</p>
          <p><strong>Message:</strong> ${data.message}</p>
        </div>

        <div style="text-align: center; border-top: 1px solid #e5e7eb; padding-top: 10px; margin-top: 15px;">
          <p style="color: #6b7280; font-size: 12px;">© 2025 Therafy. All Rights Reserved.</p>
        </div>
      </div>
    `;

    const emailResults = [];

    for (const recipient of recipients) {
      try {
        const response = await resend.emails.send({
          from: "Therafy <onboarding@resend.dev>", // Use Resend test email
          to: recipient,
          subject: `🩺 New Appointment Request: ${data.name}`,
          html: emailContent,
        });

        emailResults.push({ recipient, status: "sent", response });
      } catch (err) {
        console.error(`Failed to send email to ${recipient}:`, err.message);
        emailResults.push({ recipient, status: "failed", error: err.message });
      }
    }

    return new Response(JSON.stringify({ success: true, emailResults }), {
      status: 200,
    });
  } catch (error) {
    console.error("API Error:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
