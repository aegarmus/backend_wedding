import { createGuestService } from '../services/guestService.js'


export const createGuest = async (req, res) => {
    try {
        const guest = await createGuestService(req.body);
        res.status(201).json(guest);
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: error.message });
    }
};

// ...otros métodos para actualizar, eliminar y obtener invitados...
