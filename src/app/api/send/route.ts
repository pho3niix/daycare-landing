import { Resend } from 'resend';

const TO_EMAIL = 'hugo.costillag@gmail.com';
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL ?? 'Escuela del Ángel <onboarding@resend.dev>';

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return Response.json({ error: 'Servicio de correo no configurado.' }, { status: 500 });
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: 'Solicitud inválida.' }, { status: 400 });
  }

  const name = String(body.name ?? '').trim().slice(0, 120);
  const phone = String(body.phone ?? '').trim().slice(0, 40);
  const stage = String(body.stage ?? '').trim().slice(0, 120);

  if (!name || !phone || !stage) {
    return Response.json({ error: 'Todos los campos son obligatorios.' }, { status: 400 });
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: FROM_EMAIL,
    to: [TO_EMAIL],
    subject: `Nueva solicitud de visita: ${name.replace(/[\r\n]+/g, ' ')}`,
    html: `
      <div style="font-family:Arial,sans-serif;color:#3D405B;max-width:520px">
        <h2 style="color:#1D3354">Nueva solicitud de visita</h2>
        <table style="border-collapse:collapse;width:100%">
          <tr><td style="padding:8px;font-weight:bold">Nombre</td><td style="padding:8px">${escapeHtml(name)}</td></tr>
          <tr><td style="padding:8px;font-weight:bold">Teléfono</td><td style="padding:8px">${escapeHtml(phone)}</td></tr>
          <tr><td style="padding:8px;font-weight:bold">Etapa de interés</td><td style="padding:8px">${escapeHtml(stage)}</td></tr>
        </table>
      </div>`,
  });

  if (error) {
    return Response.json({ error: 'No se pudo enviar el correo.' }, { status: 502 });
  }
  return Response.json({ ok: true });
}
