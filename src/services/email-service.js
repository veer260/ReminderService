const sender = require('../config/email-config');
const TicketRepository = require('../repository/email-repository');

const repo = new TicketRepository();

const sendEmail = (mailFrom, mailTo, mailsubject, mailBody) => {
    console.log('Email sent');
    sender.sendMail( {
        from: mailFrom,
        to: mailTo,
        subject: mailsubject,
        text: mailBody
    });
}

const fetchPendingEmails = async(timestamp) => {
    try {
        const response = await repo.getAll();
        return response;
    } catch (error) {
        console.log(error);
    }
}

const creareNotification = async(data) => {
    try {
        const response = await repo.create(data);
        return response;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    sendEmail,
    creareNotification,
    fetchPendingEmails
}