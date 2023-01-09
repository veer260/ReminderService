const TicketService = require('../services/email-service');

const create = async(req, res) => {
    
    try {
        console.log('req.body:' + req.body);
        const response = await TicketService.creareNotification(req.body);
        
        res.status(200).json({
            data: response,
            message: 'Succesfully registered an email reminder',
            success: true,
            err: {}
        })  
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data: {},
            message: "Unable to register an email reminder",
            success: false,
            err: error
        })
        
    }
}

module.exports = {
    create
}