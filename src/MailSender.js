const nodemailer = require('nodemailer');

class MailSender {
  constructor() {
    this._transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD,
      },
    });
  }

  sendEmail(targetEmail, content) {
    const message = {
      from: 'Open Music Apps',
      to: targetEmail,
      subject: 'Ekspor Lagu di Playlist',
      text: 'Terlampir hasil dari ekspor lagu di playlist',
      attachments: [
        {
          filename: 'songsinplaylist.json',
          content,
        },
      ],
    };

    return this._transporter.sendMail(message);
  }
}

module.exports = MailSender;
