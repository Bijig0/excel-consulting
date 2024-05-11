"use server";
import { Resend } from "resend";
import { FormValues } from "./ContactForm";
import EmailTemplate from "./EmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmail = async (inputs: FormValues) => {
  const asString = JSON.stringify(inputs);

  const { data, error } = await resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to: ["bradysuryasie@gmail.com"],
    subject: "Hello world",
    react: EmailTemplate({
      content: asString,
    }),
  });

  if (error) throw error;

  return data;
};

export default sendEmail;
