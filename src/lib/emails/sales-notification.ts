interface LeadData {
  name: string;
  email: string;
  phone: string;
  zipCode: string;
  address?: string;
  comments?: string;
}

export function buildSalesNotificationEmail(lead: LeadData): string {
  const timestamp = new Date().toLocaleString("en-US", {
    timeZone: "America/Los_Angeles",
    dateStyle: "full",
    timeStyle: "short",
  });

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Lead - ${lead.name}</title>
</head>
<body style="margin:0;padding:0;background-color:#f1f5f9;font-family:'Helvetica Neue',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f1f5f9;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.06);">

          <!-- Header -->
          <tr>
            <td style="background:#154c68;padding:24px 40px;">
              <h1 style="color:#ffffff;font-size:20px;margin:0;font-weight:700;">New Lead Received</h1>
              <p style="color:rgba(255,255,255,0.8);font-size:13px;margin:6px 0 0;">${timestamp} (Pacific)</p>
            </td>
          </tr>

          <!-- Lead Data Table (copy/paste friendly for spreadsheets) -->
          <tr>
            <td style="padding:32px 40px;">
              <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
                <tr>
                  <td style="padding:10px 12px;border:1px solid #e5e7eb;background:#f8fafc;font-size:13px;font-weight:700;color:#154c68;width:140px;">Name</td>
                  <td style="padding:10px 12px;border:1px solid #e5e7eb;font-size:14px;color:#1f2937;">${lead.name}</td>
                </tr>
                <tr>
                  <td style="padding:10px 12px;border:1px solid #e5e7eb;background:#f8fafc;font-size:13px;font-weight:700;color:#154c68;">Email</td>
                  <td style="padding:10px 12px;border:1px solid #e5e7eb;font-size:14px;color:#1f2937;"><a href="mailto:${lead.email}" style="color:#005bb5;">${lead.email}</a></td>
                </tr>
                <tr>
                  <td style="padding:10px 12px;border:1px solid #e5e7eb;background:#f8fafc;font-size:13px;font-weight:700;color:#154c68;">Phone</td>
                  <td style="padding:10px 12px;border:1px solid #e5e7eb;font-size:14px;color:#1f2937;"><a href="tel:${lead.phone.replace(/\D/g, "")}" style="color:#005bb5;">${lead.phone}</a></td>
                </tr>
                <tr>
                  <td style="padding:10px 12px;border:1px solid #e5e7eb;background:#f8fafc;font-size:13px;font-weight:700;color:#154c68;">Zip Code</td>
                  <td style="padding:10px 12px;border:1px solid #e5e7eb;font-size:14px;color:#1f2937;">${lead.zipCode}</td>
                </tr>
                <tr>
                  <td style="padding:10px 12px;border:1px solid #e5e7eb;background:#f8fafc;font-size:13px;font-weight:700;color:#154c68;">Address</td>
                  <td style="padding:10px 12px;border:1px solid #e5e7eb;font-size:14px;color:#1f2937;">${lead.address || "—"}</td>
                </tr>
                <tr>
                  <td style="padding:10px 12px;border:1px solid #e5e7eb;background:#f8fafc;font-size:13px;font-weight:700;color:#154c68;">Comments</td>
                  <td style="padding:10px 12px;border:1px solid #e5e7eb;font-size:14px;color:#1f2937;">${lead.comments || "—"}</td>
                </tr>
              </table>

              <!-- Tab-separated for easy spreadsheet paste -->
              <p style="color:#9ca3af;font-size:11px;margin:16px 0 0;font-style:italic;">
                Spreadsheet-ready (select and paste into Excel/Sheets):<br>
                <span style="font-family:monospace;font-size:11px;color:#4b5563;background:#f8fafc;padding:4px 8px;display:inline-block;margin-top:4px;border-radius:4px;">
                  ${lead.name}\t${lead.email}\t${lead.phone}\t${lead.zipCode}\t${lead.address || ""}\t${lead.comments || ""}
                </span>
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#f8fafc;padding:16px 40px;text-align:center;border-top:1px solid #e5e7eb;">
              <p style="color:#9ca3af;font-size:11px;margin:0;">
                This notification was sent from the AIPR website contact form.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
