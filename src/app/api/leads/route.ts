import { NextResponse } from "next/server";
import { Resend } from "resend";
import { buildThankYouEmail } from "@/lib/emails/thank-you";
import { buildSalesNotificationEmail } from "@/lib/emails/sales-notification";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

interface LeadPayload {
  name: string;
  email: string;
  phone: string;
  zipCode: string;
  address?: string;
  comments?: string;
}

function validateLead(data: unknown): { valid: true; lead: LeadPayload } | { valid: false; error: string } {
  const d = data as Record<string, unknown>;

  if (!d.name || typeof d.name !== "string" || d.name.trim().length < 2) {
    return { valid: false, error: "Name is required (min 2 characters)" };
  }
  if (!d.email || typeof d.email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email)) {
    return { valid: false, error: "Valid email address is required" };
  }
  if (!d.phone || typeof d.phone !== "string" || d.phone.replace(/\D/g, "").length < 10) {
    return { valid: false, error: "Valid phone number is required" };
  }
  if (!d.zipCode || typeof d.zipCode !== "string" || !/^\d{5}$/.test(d.zipCode.trim())) {
    return { valid: false, error: "Valid 5-digit zip code is required" };
  }

  return {
    valid: true,
    lead: {
      name: d.name.trim(),
      email: d.email.trim().toLowerCase(),
      phone: d.phone.trim(),
      zipCode: d.zipCode.trim(),
      address: typeof d.address === "string" ? d.address.trim() : undefined,
      comments: typeof d.comments === "string" ? d.comments.trim() : undefined,
    },
  };
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = validateLead(body);

    if (!result.valid) {
      return NextResponse.json({ success: false, error: result.error }, { status: 400 });
    }

    const { lead } = result;

    // Log for CRM integration
    console.log("[NEW LEAD]", JSON.stringify(lead, null, 2));

    // Send emails if Resend is configured
    if (resend) {
      const fromEmail = process.env.FROM_EMAIL || "noreply@aipremodeling.com";
      const salesEmail = process.env.SALES_TEAM_EMAIL || "info@aipremodeling.com";

      await Promise.allSettled([
        resend.emails.send({
          from: `Aging-In-Place Remodeling <${fromEmail}>`,
          to: lead.email,
          subject: "Thank you for contacting Aging-In-Place Remodeling",
          html: buildThankYouEmail(lead.name),
        }),
        resend.emails.send({
          from: `AIPR Lead System <${fromEmail}>`,
          to: salesEmail,
          subject: `New Lead: ${lead.name} - ${lead.zipCode}`,
          html: buildSalesNotificationEmail(lead),
        }),
      ]);
    }

    return NextResponse.json({ success: true });
  } catch {
    console.error("[LEAD API ERROR]");
    return NextResponse.json(
      { success: false, error: "An error occurred. Please try again." },
      { status: 500 }
    );
  }
}
