const { Op } = require('sequelize');
const { NotificationTicket } = require('../models/index')

class TicketRepository {

    // constructor {

    // }

    async getAll() {
        try {
            const tickets = await NotificationTicket.getAll();
            return tickets;
        } catch (error) {
            throw error;
        }
    }

    async create(data) {
        try {
            const ticket = await NotificationTicket.create(data);
            return ticket;
        } catch (error) {
            throw error;
        }
    }

    async get(fliter) {
        try {
            const tickets = await NotificationTicket.findAll({
                where: {
                    status: fliter.status,
                    notificationTime: {
                        [Op.lte]: new Date()
                    }
                }
            });
            return tickets;
        } catch (error) {
            
        }
    }
}

module.exports = TicketRepository;