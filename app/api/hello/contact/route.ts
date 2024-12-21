import { NextResponse } from "next/server";

export async function POST(request) {
  const { name, email, phone, preferredContact, services, message } =
    await request.json();

  const payload = {
    access_key: process.env.WEB3FORMS_ACCESS_KEY,
    subject: "New Inquiry from Night Sun Stables",
    from_name: "Night Sun Stables",
    // from_email is required by web3forms
    from_email: "no-reply@nightsunstables.com",
    reply_to: email,
    name,
    email,
    phone,
    preferredContact,
    services,
    message
  };

  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });

  const data = await res.json();

  if (res.ok) {
    return NextResponse.json(
      {
        success: true,
        message:
          data.message || "Your message has been sent successfully!"
      },
      { status: 200 }
    );
  } else {
    return NextResponse.json(
      {
        success: false,
        message: data.message || "Something went wrong!"
      },
      { status: 400 }
    );
  }
}
