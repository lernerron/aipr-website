export function buildThankYouEmail(name: string): string {
  const firstName = name.split(" ")[0];

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank You - Aging-In-Place Remodeling</title>
</head>
<body style="margin:0;padding:0;background-color:#f1f5f9;font-family:'Helvetica Neue',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f1f5f9;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.06);">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#154c68 0%,#0c2e40 100%);padding:32px 40px;text-align:center;">
              <h1 style="color:#ffffff;font-size:24px;margin:0;font-weight:700;">Aging-In-Place Remodeling</h1>
              <p style="color:rgba(255,255,255,0.8);font-size:14px;margin:8px 0 0;">Safety &amp; Accessibility Specialists</p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:40px;">
              <h2 style="color:#154c68;font-size:22px;margin:0 0 16px;font-weight:600;">Hi ${firstName},</h2>
              <p style="color:#1f2937;font-size:16px;line-height:1.7;margin:0 0 20px;">
                Thank you for reaching out to Aging-In-Place Remodeling! We received your request and a specialist will be in touch within <strong>24 hours</strong>.
              </p>
              <p style="color:#1f2937;font-size:16px;line-height:1.7;margin:0 0 24px;">
                In the meantime, here&rsquo;s what you can expect:
              </p>

              <!-- Steps -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
                <tr>
                  <td style="padding:12px 16px;background:#f8fafc;border-left:4px solid #154c68;border-radius:0 8px 8px 0;margin-bottom:8px;">
                    <strong style="color:#154c68;">1.</strong>
                    <span style="color:#1f2937;font-size:15px;"> A specialist will review your request</span>
                  </td>
                </tr>
                <tr><td style="height:8px;"></td></tr>
                <tr>
                  <td style="padding:12px 16px;background:#f8fafc;border-left:4px solid #154c68;border-radius:0 8px 8px 0;">
                    <strong style="color:#154c68;">2.</strong>
                    <span style="color:#1f2937;font-size:15px;"> We&rsquo;ll call to discuss your project and schedule a visit</span>
                  </td>
                </tr>
                <tr><td style="height:8px;"></td></tr>
                <tr>
                  <td style="padding:12px 16px;background:#f8fafc;border-left:4px solid #154c68;border-radius:0 8px 8px 0;">
                    <strong style="color:#154c68;">3.</strong>
                    <span style="color:#1f2937;font-size:15px;"> Free in-home evaluation &amp; estimate at your convenience</span>
                  </td>
                </tr>
              </table>

              <p style="color:#4b5563;font-size:15px;line-height:1.7;margin:0 0 28px;">
                Can&rsquo;t wait? Give us a call anytime:
              </p>

              <!-- Phone CTA -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
                <tr>
                  <td align="center">
                    <a href="tel:8587768700" style="display:inline-block;background:#154c68;color:#ffffff;padding:14px 32px;border-radius:8px;text-decoration:none;font-size:18px;font-weight:700;">
                      Call (858) 776-8700
                    </a>
                  </td>
                </tr>
              </table>

              <!-- Locations -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background:#f8fafc;border-radius:8px;padding:20px;margin-bottom:20px;">
                <tr>
                  <td style="padding:20px;">
                    <p style="color:#154c68;font-size:14px;font-weight:700;margin:0 0 12px;text-transform:uppercase;letter-spacing:1px;">Our Locations</p>
                    <p style="color:#1f2937;font-size:14px;line-height:2;margin:0;">
                      San Diego: (858) 776-8700<br>
                      Orange County: (949) 236-6684<br>
                      SW Riverside: (951) 760-6728<br>
                      St. George, UT: (435) 429-1182
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Trust Bar -->
          <tr>
            <td style="background:#f1f5f9;padding:20px 40px;text-align:center;border-top:1px solid #e5e7eb;">
              <p style="color:#4b5563;font-size:12px;margin:0;line-height:1.6;">
                Licensed General Contractor (CSLB #807715) &bull; Fully Insured<br>
                NAHB Best of American Living Award Winner &bull; #1 US Stiltz Dealer
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:20px 40px;text-align:center;">
              <p style="color:#9ca3af;font-size:12px;margin:0;">
                &copy; 2026 Aging-In-Place Remodeling. All rights reserved.<br>
                620 Venture St, Ste. D, Escondido, CA 92029
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
