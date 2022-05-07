import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";

var transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "52aea2ad4c9665",
        pass: "e83852357c8725"
    }
});

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body }: SendMailData) {
        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: 'Aline Avelino <alineavelinorocha@gmail.com>',
            subject,
            html: body,
        })
    };
}