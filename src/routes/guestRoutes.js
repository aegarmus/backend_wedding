
import { Router } from 'express';
import { createGuest } from '../controllers/guestController.js';

const router = Router();

router.post('/guests', createGuest);

// ...otras rutas para actualizar, eliminar y obtener invitados...

export default router;
