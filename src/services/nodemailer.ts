import nodemailer from "nodemailer";
import { MailOptions } from "nodemailer/lib/json-transport";

const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASSWORD

export const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  auth: {
    user: email,
    pass: pass,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

export const mailOptions:MailOptions = {
  from: email,
  to: email,
};
