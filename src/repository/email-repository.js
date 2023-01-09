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
}

module.exports = TicketRepository;