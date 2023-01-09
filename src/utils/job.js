const cron = require('node-cron');
const EmailService = require('../services/email-service')

const setupJobs = () => {
    cron.schedule('*/1 * * * *', async() => {
        const response = await EmailService.fetchPendingEmails();
        response.forEach(email => {
            EmailService.sendEmail("ReminderService@gmail.com",
            email.recepientEmail,
            email.subject,
            email.content);
        });
    })
}

module.exports = {
    setupJobs
}