const cron = require('node-cron');
const EmailService = require('../services/email-service')

const setupJobs = () => {
    cron.schedule('*/5 * * * *', async() => {
        const response = await EmailService.fetchPendingEmails();
        console.log(response);
    })
}

module.exports = {
    setupJobs
}