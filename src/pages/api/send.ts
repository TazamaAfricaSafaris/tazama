/* eslint-disable import/no-anonymous-default-export */
import type { NextApiRequest, NextApiResponse } from 'next';
import { TazamaContactUs } from '~/components/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_KEY);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { data, error } = await resend.emails.send({
    from: 'james@tazamaafricasafari.com',
    to: ['stanexseven@gmail.com'],
    cc: "jaff@tazamaafricasafari.com",
    subject: 'Tazama Africa Form Submission',
    react: TazamaContactUs({ fullName: 'John', email: "", message: "" }),
  });

  if (error) {
    return res.status(400).json(error);
  }

  res.status(200).json(data);
};
