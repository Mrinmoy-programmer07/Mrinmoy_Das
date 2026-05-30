import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Here you would typically send the email, save to a database, etc.
    // For now, we'll just log the data and send a success response.
    console.log('Contact form submission:', { name, email, message });

    return NextResponse.json({ message: 'Message sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Error processing contact form submission:', error);
    return NextResponse.json({ message: 'Failed to send message.' }, { status: 500 });
  }
} 