import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, message, selectedPackage } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email content for the business owner
    const emailContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
      ${selectedPackage ? `<p><strong>Selected Package:</strong> ${selectedPackage}</p>` : ''}
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `;

    // Send email to business owner
    const { error } = await resend.emails.send({
      from: 'LinuxAdmin.cz <noreply@mhshuvo.com>',
      to: ['mhshuvoalways@gmail.com'],
      subject: selectedPackage 
        ? `New Package Inquiry: ${selectedPackage}` 
        : 'New Contact Form Submission',
      html: emailContent,
      replyTo: email,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    // Send confirmation email to customer
    const confirmationContent = `
      <h2>Thank you for contacting LinuxAdmin.cz</h2>
      <p>Dear ${name},</p>
      <p>Thank you for your inquiry about our Linux administration services. We have received your message and will get back to you within 24 hours.</p>
      ${selectedPackage ? `<p>You inquired about our <strong>${selectedPackage}</strong> package.</p>` : ''}
      <p>If you have any urgent questions, please call us at +420 733 127 235.</p>
      <p>Best regards,<br>LinuxAdmin.cz Team</p>
    `;

    await resend.emails.send({
      from: 'LinuxAdmin.cz <noreply@linuxadmin.cz>',
      to: [email],
      subject: 'Thank you for contacting LinuxAdmin.cz',
      html: confirmationContent,
    });

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}