import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

const SERVICE_LABELS: Record<string, string> = {
  dbr: 'DBR — Reaktywacja Bazy',
  web: 'Strona internetowa zintegrowana z AI',
  voice: 'Agenci głosowi / tekstowi AI',
  n8n: 'Automatyzacje n8n / Make',
  inne: 'Kilka usług',
  pomoc: 'Potrzebuję pomocy — nie wiem co poprawić',
};

const INDUSTRY_LABELS: Record<string, string> = {
  auto: 'Wypożyczalnia aut',
  spa: 'SPA & Wellness',
  salon: 'Salon fryzjerski / Beauty / Kosmetologia',
  serwis: 'Serwis samochodowy',
  stomatologia: 'Stomatologia / Medycyna',
  inna: 'Inna branża',
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, company, industry, service, ...extra } = body;

    const serviceLabel = SERVICE_LABELS[service] ?? service ?? '—';
    const industryLabel = INDUSTRY_LABELS[industry] ?? industry ?? '—';

    const extraFields = Object.entries(extra)
      .map(([k, v]) => `<tr><td style="padding:8px 12px;color:#94a3b8;white-space:nowrap">${k}</td><td style="padding:8px 12px;color:#f1f5f9">${v}</td></tr>`)
      .join('');

    const html = `
<!DOCTYPE html>
<html lang="pl">
<head><meta charset="UTF-8"/></head>
<body style="margin:0;padding:0;background:#0a0f1f;font-family:ui-sans-serif,system-ui,sans-serif">
  <div style="max-width:600px;margin:40px auto;background:#0f172a;border:1px solid rgba(96,165,250,0.2);border-radius:16px;overflow:hidden">
    <div style="background:linear-gradient(135deg,#1e3a8a,#1e40af);padding:32px 40px">
      <p style="margin:0;color:#93c5fd;font-size:12px;letter-spacing:2px;text-transform:uppercase;font-weight:600">AUTOMO AI</p>
      <h1 style="margin:8px 0 0;color:#fff;font-size:24px;font-weight:800">Nowe zgłoszenie z formularza</h1>
    </div>
    <div style="padding:32px 40px">
      <table style="width:100%;border-collapse:collapse;background:#0a0f1f;border-radius:12px;overflow:hidden;border:1px solid rgba(96,165,250,0.1)">
        <tr style="background:rgba(96,165,250,0.05)">
          <td style="padding:8px 12px;color:#94a3b8;white-space:nowrap;width:180px">Imię i nazwisko</td>
          <td style="padding:8px 12px;color:#f1f5f9;font-weight:600">${name ?? '—'}</td>
        </tr>
        <tr>
          <td style="padding:8px 12px;color:#94a3b8;white-space:nowrap">Telefon</td>
          <td style="padding:8px 12px;color:#f1f5f9"><a href="tel:${phone}" style="color:#60a5fa;text-decoration:none">${phone ?? '—'}</a></td>
        </tr>
        <tr style="background:rgba(96,165,250,0.05)">
          <td style="padding:8px 12px;color:#94a3b8;white-space:nowrap">E-mail</td>
          <td style="padding:8px 12px;color:#f1f5f9"><a href="mailto:${email}" style="color:#60a5fa;text-decoration:none">${email ?? '—'}</a></td>
        </tr>
        <tr>
          <td style="padding:8px 12px;color:#94a3b8;white-space:nowrap">Firma / Strona</td>
          <td style="padding:8px 12px;color:#f1f5f9">${company ?? '—'}</td>
        </tr>
        <tr style="background:rgba(96,165,250,0.05)">
          <td style="padding:8px 12px;color:#94a3b8;white-space:nowrap">Branża</td>
          <td style="padding:8px 12px;color:#f1f5f9">${industryLabel}</td>
        </tr>
        <tr>
          <td style="padding:8px 12px;color:#94a3b8;white-space:nowrap">Usługa</td>
          <td style="padding:8px 12px;font-weight:700;color:#60a5fa">${serviceLabel}</td>
        </tr>
        ${extraFields}
      </table>

      <div style="margin-top:24px;padding:16px 20px;background:rgba(34,197,94,0.08);border:1px solid rgba(34,197,94,0.2);border-radius:10px">
        <p style="margin:0;font-size:13px;color:#86efac">Odpowiedz na tego maila, aby napisać bezpośrednio do ${name ?? 'klienta'} (reply-to: ${email ?? '—'}).</p>
      </div>
    </div>
    <div style="padding:20px 40px;border-top:1px solid rgba(96,165,250,0.1);text-align:center">
      <p style="margin:0;font-size:12px;color:#475569">© 2026 AUTOMO AI &mdash; automoai.pl</p>
    </div>
  </div>
</body>
</html>`;

    const fromEmail = process.env.RESEND_FROM_EMAIL ?? 'onboarding@resend.dev';

    await resend.emails.send({
      from: `AUTOMO AI Formularz <${fromEmail}>`,
      to: ['biuro@automoai.pl'],
      replyTo: email,
      subject: `Zgłoszenie: ${name} — ${serviceLabel}`,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[contact] email send failed:', err);
    return NextResponse.json({ error: 'Nie udało się wysłać maila' }, { status: 500 });
  }
}
