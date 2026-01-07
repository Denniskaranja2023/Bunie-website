import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { Resend } from 'resend';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: ['http://localhost:5173', 'https://bunie-react-website.vercel.app/']
}));
app.use(express.json());

const resend = new Resend(process.env.RESEND_API_KEY);

app.post('/api/contact', async (req, res) => {
  const { email, message, firstName, lastName, subject } = req.body;

  try {
    const result = await resend.emails.send({
      from:'Bunie Creatives Website <onboarding@resend.dev>',
      to: 'buniecompany@gmail.com',
      subject: `New Website Contact Form Submission from ${firstName} ${lastName}`,
      html: `
        <h3><strong>${subject}</strong></h3>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    });
    console.log('Email sent successfully:', result);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email', details: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});