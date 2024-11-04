import * as nodemailer from "nodemailer";

const email = process.env.EMAIL;
const password = process.env.EMAIL_PASSWORD;

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass: password,
  },
});

export const sendMail = async (
  to: string,
  subject: string,
  htmlContent: string
) => {
  const mailOptions = {
    from: email,
    to: to,
    subject: subject,
    html: htmlContent,
  };

  return transporter
    .sendMail(mailOptions)
    .then((info: nodemailer.SentMessageInfo) => {
      console.log("Email sent: " + info.response);
      return info;
    })
    .catch((error: Error) => {
      console.error("Error sending email:", error);
      throw error;
    });
};
