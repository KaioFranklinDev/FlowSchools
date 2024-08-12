

// src/app/api/sendgrid/sendgrid.js
interface SendGridProps{
  to:string,
  subject:string,
  text:string

}
export default async function SendGridJS(props:SendGridProps) {
  const {to , subject, text} = props
  const response = await fetch('/api/sendgrid', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      to ,
      subject,
      text
    }),
  });

  const data = await response.json();
  console.log(data);
}
