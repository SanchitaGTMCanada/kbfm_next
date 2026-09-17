import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    // -----------------------------------
    // Get form data
    // -----------------------------------
    const data = await request.json();

    // -----------------------------------
    // Validate required fields
    // -----------------------------------
    if (
      !data.name ||
      !data.phone ||
      !data.service ||
      !data.date ||
      !data.time ||
      !data.address
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Please fill in all required fields.",
        },
        {
          status: 400,
        }
      );
    }

    // -----------------------------------
    // Check email configuration
    // -----------------------------------
    const {
      EMAIL_HOST,
      EMAIL_PORT,
      EMAIL_USER,
      EMAIL_PASS,
      EMAIL_TO,
    } = process.env;

    if (
      !EMAIL_HOST ||
      !EMAIL_PORT ||
      !EMAIL_USER ||
      !EMAIL_PASS ||
      !EMAIL_TO
    ) {
      console.error("Missing email environment variables:", {
        EMAIL_HOST: !!EMAIL_HOST,
        EMAIL_PORT: !!EMAIL_PORT,
        EMAIL_USER: !!EMAIL_USER,
        EMAIL_PASS: !!EMAIL_PASS,
        EMAIL_TO: !!EMAIL_TO,
      });

      return NextResponse.json(
        {
          success: false,
          message: "Email service is not configured correctly.",
        },
        {
          status: 500,
        }
      );
    }

    // -----------------------------------
    // Create SMTP transporter
    // -----------------------------------
    const transporter = nodemailer.createTransport({
      host: EMAIL_HOST,
      port: Number(EMAIL_PORT),

      // cPanel SSL/TLS SMTP uses port 465
      secure: true,

      // Force IPv4
      family: 4,

      // Connection timeouts
      connectionTimeout: 15000,
      greetingTimeout: 15000,
      socketTimeout: 30000,

      // SMTP authentication
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
      },

      // TLS configuration
      tls: {
        servername: EMAIL_HOST,
      },
    });

    // -----------------------------------
    // Verify SMTP connection
    // -----------------------------------
    await transporter.verify();

    console.log("SMTP connection verified successfully.");

    // -----------------------------------
    // Send booking email
    // -----------------------------------
    await transporter.sendMail({
      from: `"AC Plumbing Website" <${EMAIL_USER}>`,

      to: EMAIL_TO,

      replyTo: data.email || EMAIL_USER,

      subject: `New Service Booking - ${data.name}`,

      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />

            <title>New Service Booking</title>
          </head>

          <body
            style="
              margin: 0;
              padding: 0;
              background-color: #f4f6f8;
              font-family: Arial, Helvetica, sans-serif;
            "
          >

            <div
              style="
                width: 100%;
                padding: 30px 15px;
                box-sizing: border-box;
              "
            >

              <div
                style="
                  max-width: 700px;
                  margin: 0 auto;
                  background: #ffffff;
                  border-radius: 12px;
                  overflow: hidden;
                  border: 1px solid #e5e7eb;
                "
              >

                <!-- Header -->
                <div
                  style="
                    background: #123B67;
                    padding: 25px 30px;
                    color: #ffffff;
                  "
                >

                  <h2
                    style="
                      margin: 0;
                      font-size: 24px;
                      line-height: 1.3;
                    "
                  >
                    New Booking Request
                  </h2>

                  <p
                    style="
                      margin: 8px 0 0;
                      font-size: 14px;
                      color: #e5e7eb;
                    "
                  >
                    AC Plumbing Website
                  </p>

                </div>

                <!-- Content -->
                <div
                  style="
                    padding: 30px;
                  "
                >

                  <table
                    cellpadding="10"
                    cellspacing="0"
                    width="100%"
                    style="
                      border-collapse: collapse;
                      font-size: 15px;
                      color: #333333;
                    "
                  >

                    <tr>
                      <td
                        style="
                          width: 180px;
                          font-weight: bold;
                          border-bottom: 1px solid #eeeeee;
                          vertical-align: top;
                        "
                      >
                        Name
                      </td>

                      <td
                        style="
                          border-bottom: 1px solid #eeeeee;
                        "
                      >
                        ${escapeHtml(data.name)}
                      </td>
                    </tr>

                    <tr>
                      <td
                        style="
                          font-weight: bold;
                          border-bottom: 1px solid #eeeeee;
                          vertical-align: top;
                        "
                      >
                        Phone
                      </td>

                      <td
                        style="
                          border-bottom: 1px solid #eeeeee;
                        "
                      >
                        ${escapeHtml(data.phone)}
                      </td>
                    </tr>

                    <tr>
                      <td
                        style="
                          font-weight: bold;
                          border-bottom: 1px solid #eeeeee;
                          vertical-align: top;
                        "
                      >
                        Email
                      </td>

                      <td
                        style="
                          border-bottom: 1px solid #eeeeee;
                        "
                      >
                        ${escapeHtml(data.email || "-")}
                      </td>
                    </tr>

                    <tr>
                      <td
                        style="
                          font-weight: bold;
                          border-bottom: 1px solid #eeeeee;
                          vertical-align: top;
                        "
                      >
                        Service
                      </td>

                      <td
                        style="
                          border-bottom: 1px solid #eeeeee;
                        "
                      >
                        ${escapeHtml(data.service)}
                      </td>
                    </tr>

                    <tr>
                      <td
                        style="
                          font-weight: bold;
                          border-bottom: 1px solid #eeeeee;
                          vertical-align: top;
                        "
                      >
                        Preferred Date
                      </td>

                      <td
                        style="
                          border-bottom: 1px solid #eeeeee;
                        "
                      >
                        ${escapeHtml(data.date)}
                      </td>
                    </tr>

                    <tr>
                      <td
                        style="
                          font-weight: bold;
                          border-bottom: 1px solid #eeeeee;
                          vertical-align: top;
                        "
                      >
                        Preferred Time
                      </td>

                      <td
                        style="
                          border-bottom: 1px solid #eeeeee;
                        "
                      >
                        ${escapeHtml(data.time)}
                      </td>
                    </tr>

                    <tr>
                      <td
                        style="
                          font-weight: bold;
                          border-bottom: 1px solid #eeeeee;
                          vertical-align: top;
                        "
                      >
                        Service Address
                      </td>

                      <td
                        style="
                          border-bottom: 1px solid #eeeeee;
                        "
                      >
                        ${escapeHtml(data.address)}
                      </td>
                    </tr>

                    <tr>
                      <td
                        style="
                          font-weight: bold;
                          vertical-align: top;
                        "
                      >
                        Additional Details
                      </td>

                      <td>
                        ${escapeHtml(data.message || "-")}
                      </td>
                    </tr>

                  </table>

                </div>

                <!-- Footer -->
                <div
                  style="
                    padding: 18px 30px;
                    background: #f8fafc;
                    border-top: 1px solid #eeeeee;
                    color: #6b7280;
                    font-size: 12px;
                  "
                >
                  This booking request was submitted through the AC Plumbing website.
                </div>

              </div>

            </div>

          </body>
        </html>
      `,
    });

    // -----------------------------------
    // Success
    // -----------------------------------
    console.log("Booking email sent successfully.");

    return NextResponse.json({
      success: true,
      message: "Booking request sent successfully.",
    });
  } catch (error) {
    // -----------------------------------
    // Detailed error logging
    // -----------------------------------
    console.error("=================================");
    console.error("EMAIL ERROR");
    console.error("=================================");

    console.error("Name:", error?.name);
    console.error("Message:", error?.message);
    console.error("Code:", error?.code);
    console.error("Command:", error?.command);
    console.error("Response:", error?.response);
    console.error("Response Code:", error?.responseCode);

    console.error("=================================");

    return NextResponse.json(
      {
        success: false,
        message:
          error?.message || "Failed to send booking request.",
      },
      {
        status: 500,
      }
    );
  }
}

// -----------------------------------
// Escape HTML characters
// -----------------------------------
function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}