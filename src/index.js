const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/server-config'); 
const { sendEmail } = require('./services/email-service')

const setupAndStartServer = () => {
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.listen(PORT, () => {
        sendEmail(
            'support@admin.com',
            'zarvisalpha258@gmail.com',
            'This is a testing email',
            'hello world!'
        );
        console.log(`Server started at port: ${PORT}`);
    })

}

setupAndStartServer();