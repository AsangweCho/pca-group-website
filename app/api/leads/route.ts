import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function POST(req: Request) {
  try {
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
      console.error(result.error);
      return NextResponse.json(
        { error: "Database insert failed" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}