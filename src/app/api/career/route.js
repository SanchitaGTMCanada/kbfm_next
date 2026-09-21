import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

function escapeHtml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request) {
  try {
    const formData = await request.formData();

    const fullName = formData.get("fullName")?.toString().trim();
    const phone = formData.get("phone")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const job = formData.get("job")?.toString().trim();
    const message = formData.get("message")?.toString().trim();
    const resume = formData.get("resume");

    // -----------------------------
    // Validate required fields
    // -----------------------------
    if (!fullName || !phone || !email || !job) {
      return NextResponse.json(
        {
          success: false,
          message: "Please fill in all required fields.",
        },
        { status: 400 }
      );
    }

    // -----------------------------
    // Validate email
    // -----------------------------
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          success: false,
          message: "Please enter a valid email address.",
        },
        { status: 400 }
      );
    }

    // -----------------------------
    // Create SMTP transporter
    // -----------------------------
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: true, // Port 465 uses SSL/TLS
      family: 4,

      connectionTimeout: 15000,
      greetingTimeout: 15000,
      socketTimeout: 30000,

      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },

      tls: {
        servername: process.env.EMAIL_HOST,
      },
    });

    // -----------------------------
    // Prepare resume attachment
    // -----------------------------
    const attachments = [];

    if (
      resume &&
      typeof resume.arrayBuffer === "function" &&
      resume.name
    ) {
      const buffer = Buffer.from(await resume.arrayBuffer());

      attachments.push({
        filename: resume.name,
        content: buffer,
        contentType: resume.type || "application/octet-stream",
      });
    }

    // -----------------------------
    // Send career application email
    // -----------------------------
    await transporter.sendMail({
      from: `"K. B. F. M. Group of Companies" <${process.env.EMAIL_USER}>`,

      // All career applications go here
      to: process.env.EMAIL_TO,

      // Clicking Reply will reply to the applicant
      replyTo: email,

      subject: `New Career Application - ${fullName}`,

      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="UTF-8" />
            <title>New Career Application</title>
          </head>

          <body style="
            margin: 0;
            padding: 30px;
            background-color: #f5f5f5;
            font-family: Arial, Helvetica, sans-serif;
          ">

            <div style="
              max-width: 700px;
              margin: 0 auto;
              background: #ffffff;
              border-radius: 10px;
              overflow: hidden;
              border: 1px solid #e5e5e5;
            ">

              <div style="
                background: #111111;
                color: #ffffff;
                padding: 25px 30px;
              ">
                <h2 style="
                  margin: 0;
                  font-size: 24px;
                ">
                  New Career Application
                </h2>

                <p style="
                  margin: 8px 0 0;
                  color: #dddddd;
                  font-size: 14px;
                ">
                  A new candidate has submitted a career application.
                </p>
              </div>

              <div style="padding: 30px;">

                <table style="
                  width: 100%;
                  border-collapse: collapse;
                  font-size: 15px;
                ">

                  <tr>
                    <td style="
                      padding: 12px;
                      border-bottom: 1px solid #eeeeee;
                      font-weight: bold;
                      width: 180px;
                    ">
                      Full Name
                    </td>

                    <td style="
                      padding: 12px;
                      border-bottom: 1px solid #eeeeee;
                    ">
                      ${escapeHtml(fullName)}
                    </td>
                  </tr>

                  <tr>
                    <td style="
                      padding: 12px;
                      border-bottom: 1px solid #eeeeee;
                      font-weight: bold;
                    ">
                      Phone
                    </td>

                    <td style="
                      padding: 12px;
                      border-bottom: 1px solid #eeeeee;
                    ">
                      ${escapeHtml(phone)}
                    </td>
                  </tr>

                  <tr>
                    <td style="
                      padding: 12px;
                      border-bottom: 1px solid #eeeeee;
                      font-weight: bold;
                    ">
                      Email
                    </td>

                    <td style="
                      padding: 12px;
                      border-bottom: 1px solid #eeeeee;
                    ">
                      ${escapeHtml(email)}
                    </td>
                  </tr>

                  <tr>
                    <td style="
                      padding: 12px;
                      border-bottom: 1px solid #eeeeee;
                      font-weight: bold;
                    ">
                      Job Applying For
                    </td>

                    <td style="
                      padding: 12px;
                      border-bottom: 1px solid #eeeeee;
                    ">
                      ${escapeHtml(job)}
                    </td>
                  </tr>

                  <tr>
                    <td style="
                      padding: 12px;
                      font-weight: bold;
                      vertical-align: top;
                    ">
                      Message
                    </td>

                    <td style="
                      padding: 12px;
                      white-space: pre-wrap;
                    ">
                      ${escapeHtml(message || "-")}
                    </td>
                  </tr>

                </table>

                ${
                  attachments.length
                    ? `
                      <div style="
                        margin-top: 25px;
                        padding: 15px;
                        background: #f7f7f7;
                        border-radius: 6px;
                      ">
                        <strong>Resume:</strong>
                        ${escapeHtml(resume.name)}
                        <br />
                        <span style="font-size: 13px; color: #666;">
                          Attached to this email.
                        </span>
                      </div>
                    `
                    : `
                      <div style="
                        margin-top: 25px;
                        padding: 15px;
                        background: #fff4f4;
                        border-radius: 6px;
                        color: #a00000;
                      ">
                        No resume was attached.
                      </div>
                    `
                }

              </div>

              <div style="
                padding: 18px 30px;
                background: #f7f7f7;
                color: #777777;
                font-size: 12px;
              ">
                This email was automatically generated from the AC Plumbing
                website career application form.
              </div>

            </div>

          </body>
        </html>
      `,

      attachments,
    });

    // -----------------------------
    // Success response
    // -----------------------------
    return NextResponse.json({
      success: true,
      message: "Career application submitted successfully.",
    });

  } catch (error) {
    console.error("Career Application Email Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to submit career application.",
      },
      {
        status: 500,
      }
    );
  }
}