const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    PORT: process.env.PORT,
    EMAIL_ID: process.env.EMAIL_ID,
    EMAIL_PASS: process.env.EMAIL_PASS,
    MESSAGE_BROKER_URL: process.env.MESSAGE_BROKER_URL,
    REMINDER_BINDING_KEY: process.env.REMINDER_BINDING_KEY,
    EXCHANGE_NAME: process.env.EXCHANGE_NAME
}