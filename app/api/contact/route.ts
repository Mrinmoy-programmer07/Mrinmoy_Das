import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { message: 'All fields are required.' },
        { status: 400 }
      )
    }

    // Create transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    })

    // Email to yourself (notification)
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `[Portfolio] ${subject} — from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0d0d0d; color: #ffffff; border-radius: 12px; overflow: hidden;">
          <div style="background: linear-gradient(135deg, #6c0ba9, #8e44ad); padding: 24px 32px;">
            <h1 style="margin: 0; font-size: 22px; font-weight: 700;">New Message from Portfolio</h1>
          </div>
          <div style="padding: 32px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; color: #a0a0a0; width: 90px; vertical-align: top;">Name</td>
                <td style="padding: 10px 0; color: #ffffff; font-weight: 600;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #a0a0a0; vertical-align: top;">Email</td>
                <td style="padding: 10px 0;"><a href="mailto:${email}" style="color: #8e44ad;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #a0a0a0; vertical-align: top;">Subject</td>
                <td style="padding: 10px 0; color: #ffffff;">${subject}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #a0a0a0; vertical-align: top;">Message</td>
                <td style="padding: 10px 0; color: #e0e0e0; line-height: 1.7;">${message.replace(/\n/g, '<br/>')}</td>
              </tr>
            </table>
          </div>
          <div style="padding: 16px 32px; border-top: 1px solid #222; color: #555; font-size: 12px;">
            Sent from mrinmoy-das.vercel.app
          </div>
        </div>
      `,
    })

    // Auto-reply to the sender
    await transporter.sendMail({
      from: `"Mrinmoy Das" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: `Thanks for reaching out, ${name}! 👋`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0d0d0d; color: #ffffff; border-radius: 12px; overflow: hidden;">
          <div style="background: linear-gradient(135deg, #6c0ba9, #8e44ad); padding: 24px 32px;">
            <h1 style="margin: 0; font-size: 22px; font-weight: 700;">Thanks for getting in touch!</h1>
          </div>
          <div style="padding: 32px; line-height: 1.8; color: #e0e0e0;">
            <p>Hi <strong>${name}</strong>,</p>
            <p>I've received your message and will get back to you as soon as possible — usually within 24 hours.</p>
            <p style="color: #a0a0a0; font-size: 14px;">Here's a copy of your message:</p>
            <blockquote style="border-left: 3px solid #8e44ad; margin: 16px 0; padding: 12px 20px; color: #a0a0a0; background: #111;">
              ${message.replace(/\n/g, '<br/>')}
            </blockquote>
            <p>Cheers,<br/><strong>Mrinmoy Das</strong></p>
          </div>
        </div>
      `,
    })

    return NextResponse.json(
      { message: 'Message sent successfully!' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { message: 'Failed to send message. Please try again.' },
      { status: 500 }
    )
  }
}