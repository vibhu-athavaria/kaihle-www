import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const formData = await request.json()

    const { name, email, school, role, students, curriculum, message } = formData

    // Validate required fields
    if (!name || !email || !school || !role || !students || !curriculum) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const toEmail = process.env.DEMO_REQUEST_TO_EMAIL || 'vibhu.athavaria@gmail.com'

    // Format the email content
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); color: white; padding: 30px; border-radius: 8px 8px 0 0; }
            .header h1 { margin: 0; font-size: 24px; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
            .field { margin-bottom: 15px; }
            .field-label { font-weight: bold; color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; }
            .field-value { font-size: 16px; color: #333; }
            .footer { text-align: center; margin-top: 20px; font-size: 12px; color: #999; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🎉 New Demo Request</h1>
            </div>
            <div class="content">
              <div class="field">
                <div class="field-label">Full Name</div>
                <div class="field-value">${name}</div>
              </div>
              <div class="field">
                <div class="field-label">Work Email</div>
                <div class="field-value">${email}</div>
              </div>
              <div class="field">
                <div class="field-label">School Name</div>
                <div class="field-value">${school}</div>
              </div>
              <div class="field">
                <div class="field-label">Role</div>
                <div class="field-value">${role}</div>
              </div>
              <div class="field">
                <div class="field-label">Number of Students</div>
                <div class="field-value">${students}</div>
              </div>
              <div class="field">
                <div class="field-label">Curriculum</div>
                <div class="field-value">${curriculum}</div>
              </div>
              ${message ? `
              <div class="field">
                <div class="field-label">Message</div>
                <div class="field-value">${message}</div>
              </div>
              ` : ''}
            </div>
            <div class="footer">
              Sent from Kaihle Website Demo Request Form
            </div>
          </div>
        </body>
      </html>
    `

    const data = await resend.emails.send({
      from: 'Kaihle Demo Request <onboarding@resend.dev>',
      to: [toEmail],
      subject: `New Demo Request from ${name} - ${school}`,
      html: emailHtml,
    })

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
}
