import { MailAdapter, SendMailData } from "../mail-adaptors";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "6226983eefba10",
      pass: "5eb96141ce75cd"
    }
  });

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ body, subject }: SendMailData) {
        await transport.sendMail({
            from: "Equipe Feedget <oi@feedget.com>",
            to: "Eduardo Esteves <esteves-dorta@hotmail.com>",
            subject,
            html: body
    
        });
    }
}