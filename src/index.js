const express = require('express');
const bodyParser = require('body-parser');
const cron = require('node-cron');

const { PORT } = require('./config/server-config'); 
const { sendEmail } = require('./services/email-service')
const TicketController = require('./controllers/email-controller')
const { setupJobs } = require('./utils/job')

const setupAndStartServer = () => {
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.post('/api/v1/tickets', TicketController.create);

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
        setupJobs();


        
    })

}

setupAndStartServer();