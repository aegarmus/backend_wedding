import Guest from '../models/guest.js';

export const createGuestService = async (guestData) => {
    const guest = new Guest(guestData);
    return await guest.save();
};

// ...otros métodos para actualizar, eliminar y obtener invitados...
