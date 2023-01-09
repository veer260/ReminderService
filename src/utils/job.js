const cron = require('node-cron');
const EmailService = require('../services/email-service');
const sender = require('../config/email-config');

const setupJobs = () => {
    cron.schedule('*/1 * * * *', async() => {
        const response = await EmailService.fetchPendingEmails();
        response.forEach(email => {
            sender.sendMail({
                from: 'ReminderService@admin',
                to: email.recepientEmail,
                subject: email.subject,
                text: email.content
            },async(err, data) => {
                if(err) {
                    console.log(err)
                }else {
                    console.log(data);
                    await EmailService.updateTicket(email.id);
                }
            });
        });
    })
}

module.exports = {
    setupJobs
}