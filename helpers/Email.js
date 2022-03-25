var nodemailer = require('nodemailer');

class Email {
    constructor() {
        this.transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'programmingbyte@gmail.com',
                pass: 'Manoj@1999'
            }
        });
    }

    send_mail(mailOptions) {
        return new Promise((resolve, reject) => {
            this.transporter.sendMail(mailOptions, (error, info) => {
                if(error) {
                    console.log(error);
                    resolve(false);
                } else {
                    console.log('Email Sent: ' + info.response);
                    resolve(true);
                }
            });
        });
    }
}

module.exports = Email;