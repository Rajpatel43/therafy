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
// import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function POST(req) {
//   try {
//     const data = await req.json();

//     const recipients = ["rajhadvani5@gmail.com"];

//     const emailContent = `
//       <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 8px; padding: 20px;">
//         <div style="text-align: center; padding-bottom: 15px; border-bottom: 1px solid #e5e7eb;">
//           <h2 style="color: #2563eb; margin: 0;">Therafy - New Appointment</h2>
//           <p style="color: #6b7280; font-size: 14px; margin: 4px 0 0;">A new appointment request has been submitted</p>
//         </div>

//         <div style="padding: 15px 0;">
//           <p><strong>Name:</strong> ${data.name}</p>
//           <p><strong>Email:</strong> ${data.email}</p>
//           <p><strong>Phone:</strong> ${data.phone}</p>
//           <p><strong>Date of Birth:</strong> ${data.dob}</p>
//           <p><strong>Appointment Date:</strong> ${data.date}</p>
//           <p><strong>Time:</strong> ${data.time}</p>
//           <p><strong>Address:</strong> ${data.address}</p>
//           <p><strong>Message:</strong> ${data.message}</p>
//         </div>

//         <div style="text-align: center; border-top: 1px solid #e5e7eb; padding-top: 10px; margin-top: 15px;">
//           <p style="color: #6b7280; font-size: 12px;">© 2025 Therafy. All Rights Reserved.</p>
//         </div>
//       </div>
//     `;

//     const emailResults = [];

//     for (const recipient of recipients) {
//       try {
//         const response = await resend.emails.send({
//           from: "Therafy <onboarding@resend.dev>", // Use Resend test email
//           to: recipient,
//           subject: `🩺 New Appointment Request: ${data.name}`,
//           html: emailContent,
//         });

//         emailResults.push({ recipient, status: "sent", response });
//       } catch (err) {
//         console.error(`Failed to send email to ${recipient}:`, err.message);
//         emailResults.push({ recipient, status: "failed", error: err.message });
//       }
//     }

//     return new Response(JSON.stringify({ success: true, emailResults }), {
//       status: 200,
//     });
//   } catch (error) {
//     console.error("API Error:", error);
//     return new Response(JSON.stringify({ error: error.message }), {
//       status: 500,
//     });
//   }
// }
//-----------------------------------------------------resend Api--------------------------
// import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function POST(req) {
//   try {
//     const data = await req.json();

//     // ✅ Your actual email
//     const recipients = [
//       "rajhadvani5@gmail.com",
//       "rajhadvani@icloud.com",
//       "dharamhadvani5@icloud.com",
//     ];

//     const emailContent = `
//       <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 8px; padding: 20px;">
//         <h2 style="color: #2563eb;">Therafy - New Appointment</h2>
//         <p><strong>Name:</strong> ${data.name}</p>
//         <p><strong>Email:</strong> ${data.email}</p>
//         <p><strong>Phone:</strong> ${data.phone}</p>
//         <p><strong>Date of Birth:</strong> ${data.dob}</p>
//         <p><strong>Appointment Date:</strong> ${data.date}</p>
//         <p><strong>Time:</strong> ${data.time}</p>
//         <p><strong>Address:</strong> ${data.address}</p>
//         <p><strong>Message:</strong> ${data.message}</p>
//       </div>
//     `;

//     for (const recipient of recipients) {
//       await resend.emails.send({
//         from: "Therafy <onboarding@resend.dev>", // OR use a custom verified domain later
//         to: recipient,
//         subject: `🩺 New Appointment Request: ${data.name}`,
//         html: emailContent,
//       });
//     }

//     return new Response(JSON.stringify({ success: true }), { status: 200 });
//   } catch (error) {
//     console.error("Email API Error:", error);
//     return new Response(JSON.stringify({ error: error.message }), {
//       status: 500,
//     });
//   }
// }
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const data = await req.json();

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const recipients = [
      "rajhadvani5@gmail.com",
      "rajhadvani@icloud.com",
      "dharamhadvani5@gmail.com",
    ];

    const mailOptions = {
      from: `"Therafy Clinic" <${process.env.SMTP_USER}>`,
      to: recipients,
      subject: `🩺 New Appointment Request: ${data.name}`,
      html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 650px; margin: 20px auto; background: rgba(255, 255, 255, 0.2); backdrop-filter: blur(12px); border: 1px solid rgba(255, 255, 255, 0.3); border-radius: 16px; padding: 20px; box-shadow: 0 8px 20px rgba(0,0,0,0.1);">
          
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #2563eb, #1e3a8a); padding: 16px; text-align: center; border-radius: 12px;">
            <h2 style="color: #fff; margin: 0;">Therafy - New Appointment</h2>
            <p style="color: #dbeafe; margin: 4px 0 0; font-size: 14px;">A new appointment has been booked successfully</p>
          </div>

          <!-- Appointment Details Table -->
          <div style="margin-top: 20px; padding: 10px 0;">
            <table width="100%" cellpadding="8" cellspacing="0" style="border-collapse: collapse; width: 100%;">
              <tr>
                <td style="background: rgba(255, 255, 255, 0.15); color: #374151; border-bottom: 1px solid rgba(255,255,255,0.2);"><strong>Name</strong></td>
                <td style="background: rgba(255, 255, 255, 0.05); color: #111827; border-bottom: 1px solid rgba(255,255,255,0.1);">${data.name}</td>
              </tr>
              <tr>
                <td style="background: rgba(255, 255, 255, 0.15); color: #374151; border-bottom: 1px solid rgba(255,255,255,0.2);"><strong>Email</strong></td>
                <td style="background: rgba(255, 255, 255, 0.05); color: #111827;">${data.email}</td>
              </tr>
              <tr>
                <td style="background: rgba(255, 255, 255, 0.15); color: #374151; border-bottom: 1px solid rgba(255,255,255,0.2);"><strong>Phone</strong></td>
                <td style="background: rgba(255, 255, 255, 0.05); color: #111827;">${data.phone}</td>
              </tr>
              <tr>
                <td style="background: rgba(255, 255, 255, 0.15); color: #374151; border-bottom: 1px solid rgba(255,255,255,0.2);"><strong>Date of Birth</strong></td>
                <td style="background: rgba(255, 255, 255, 0.05); color: #111827;">${data.dob}</td>
              </tr>
              <tr>
                <td style="background: rgba(255, 255, 255, 0.15); color: #374151; border-bottom: 1px solid rgba(255,255,255,0.2);"><strong>Appointment Date</strong></td>
                <td style="background: rgba(255, 255, 255, 0.05); color: #111827;">${data.date}</td>
              </tr>
              <tr>
                <td style="background: rgba(255, 255, 255, 0.15); color: #374151; border-bottom: 1px solid rgba(255,255,255,0.2);"><strong>Time</strong></td>
                <td style="background: rgba(255, 255, 255, 0.05); color: #111827;">${data.time}</td>
              </tr>
              <tr>
                <td style="background: rgba(255, 255, 255, 0.15); color: #374151; border-bottom: 1px solid rgba(255,255,255,0.2);"><strong>Address</strong></td>
                <td style="background: rgba(255, 255, 255, 0.05); color: #111827;">${data.address}</td>
              </tr>
            </table>
          </div>

          <!-- Message Section -->
          <div style="margin-top: 20px;">
            <h3 style="color: #2563eb; font-size: 16px; margin-bottom: 8px;">Patient's Message / Concern:</h3>
            <div style="background: rgba(255, 255, 255, 0.2); border: 1px solid rgba(255,255,255,0.3); border-radius: 8px; padding: 12px; font-size: 14px; color: #111827; line-height: 1.6;">
              ${data.message?.replace(/\n/g, "<br>") || "No additional message provided."}
            </div>
          </div>

          <!-- Footer -->
          <div style="text-align: center; margin-top: 20px; font-size: 12px; color: #6b7280;">
            <p>© 2025 Therafy. All Rights Reserved.</p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Email Error:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
