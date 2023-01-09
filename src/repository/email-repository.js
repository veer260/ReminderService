const { Op } = require('sequelize');
const { NotificationTicket } = require('../models/index')

class TicketRepository {
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
            throw error;
        }
    }

    async update(ticketId, data) {
        try {
            const ticket = await NotificationTicket.findByPk(ticketId);
            ticket.status = data.status;
            ticket.save();
            return ticket;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = TicketRepository;