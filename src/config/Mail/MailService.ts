import nodemailer from 'nodemailer'
import 'dotenv'

interface IMessage {
  to: string,
  from: string,
  subject: string
  body: string
}

class MailProvider {
  constructor(private transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "onlineaspo@gmail.com",
      pass: "cytuyqyreyqkfpwy",
    }
  })) {}

  async send({ to, from, subject, body }: IMessage): Promise<void> {
    const mailOptions = {
      to,
      from,
      subject,
      html: body,
    }

    this.transporter.sendMail(mailOptions, (error: any, info: { messageId: string; response: any; envelope: any }) => {
      if(error) console.log(error);
      else console.log('Email sent: ' + info.messageId, info.response, info.envelope);
    })
  }

  async sendConfirmationEnrollmentMessage(data: IMessage) {
    await this.send(data)
  }

  async sendPasswordResetToken(data: IMessage) {
    await this.send(data)
  }
}

const MailService = new MailProvider()

export { MailService }