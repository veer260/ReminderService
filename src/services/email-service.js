const sender = require('../config/email-config');

const sendEmail = (mailFrom, mailTo, mailsubject, mailBody) => {
    console.log('Email sent');
    sender.sendMail( {
        from: mailFrom,
        to: mailTo,
        subject: mailsubject,
        text: mailBody
    });


}

module.exports = {
    sendEmail
}