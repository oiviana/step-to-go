import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
  email: string;
  message: string
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  email,
  message
}) => (
  <div>
    <h1>Lucas, você acaba de receber um email de: {firstName}!</h1>
    <h1>O email recebido foi: {email}</h1>
    <h1>{message}!</h1>


  </div>
);
