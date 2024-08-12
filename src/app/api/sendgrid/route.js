// src/app/api/sendgrid/route.js
import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';


sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(request) {
  const { to, subject, text } = await request.json();

  const msg = {
    to,
    from: 'kaio.franklin.dev@gmail.com',
    subject,
    text,
  };

  try {
    await sgMail.send(msg);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: error.message });
  }
}
