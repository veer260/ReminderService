const express = require('express');
const bodyParser = require('body-parser');
const cron = require('node-cron');

const { PORT } = require('./config/server-config'); 
const { sendEmail } = require('./services/email-service')
const TicketController = require('./controllers/email-controller')
const { setupJobs } = require('./utils/job');
const { REMINDER_BINDING_KEY} = require('./config/server-config')
const { createChannel, subscribeMessage} = require('./utils/messageQueue')

const setupAndStartServer = async() => {
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.post('/api/v1/tickets', TicketController.create);

    const channel = await createChannel();
    subscribeMessage(channel, undefined, REMINDER_BINDING_KEY );

    app.listen(PORT, () => {
        // sendEmail(
        //     'support@admin.com',
        //     'zarvisalpha258@gmail.com',
        //     'This is a testing email',
        //     'hello world!'
        // );
        // cron.schedule('*/1 * * * *', () => {
        //     console.log(`Server started at port: ${PORT}`);
        // })
        console.log(`Server started at port: ${PORT}`);
        // setupJobs();


        
    })

}

setupAndStartServer();