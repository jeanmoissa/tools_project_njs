// import { Resend } from '@resend/node';
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendResetEmail(email: string, token: string) {
  const link = `${process.env.RESET_PASSWORD_URL}?token=${token}`;
  const message = `
    <p>Você solicitou a redefinição de senha.</p>
    <p>Clique no link abaixo para redefinir:</p>
    <a href="${link}">${link}</a>
    <p>Este link expira em 15 minutos.</p>
  `;

  await resend.emails.send({
    from: 'noreply@seuprojeto.com',
    to: email,
    subject: 'Recuperação de senha',
    html: message,
  });
}
