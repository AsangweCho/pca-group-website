import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

function getSupabase() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !key) {
    throw new Error("Supabase environment variables missing");
  }

  return createClient(url, key);
}

export async function POST(req: Request) {
  try {
    const supabase = getSupabase();

    const body = await req.json();
    const { type, payload } = body;

    if (!type || !payload) {
      return NextResponse.json(
        { error: "Invalid request payload" },
        { status: 400 }
      );
    }

    let result;

    if (type === "contact") {
      result = await supabase.from("contact_submissions").insert([
        {
          full_name: payload.full_name,
          company: payload.company,
          email: payload.email,
          phone: payload.phone,
          country: payload.country,
          inquiry_type: payload.inquiry_type,
          message: payload.message,
        },
      ]);
    } else if (type === "sourcing") {
      result = await supabase.from("sourcing_requests").insert([
        {
          full_name: payload.full_name,
          company: payload.company,
          email: payload.email,
          phone: payload.phone,
          country: payload.country,
          destination: payload.destination,
          request_details: payload.request_details,
          quantity: payload.quantity,
          budget: payload.budget,
          timeline: payload.timeline,
          service_needed: payload.service_needed,
          additional_details: payload.additional_details,
        },
      ]);
    } else {
      return NextResponse.json(
        { error: "Unknown submission type" },
        { status: 400 }
      );
    }

    if (result.error) {
      return NextResponse.json(
        { error: result.error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}