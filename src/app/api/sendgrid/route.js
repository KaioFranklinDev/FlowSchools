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
export async function GET() {
  const msg = {
    to:'kaio.franklin.dev@gmail.com',
    from: 'kaio.franklin.dev@gmail.com',
    subject:'via api',
    text:'craizy, slacede',
  };
  try {
    await sgMail.send(msg);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: error.message });
  }
}