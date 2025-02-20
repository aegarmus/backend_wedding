import mongoose from 'mongoose';

const guestSchema = new mongoose.Schema({
    name: { type: String, required: true },
    invitedBy: { type: String, enum: ['Novio', 'Novia'], required: true },
    foodType: { type: String, enum: ['Standard', 'Vegana'], default: 'standard' },
    allergies: { type: [String], default: [] },
    chronicDiseases: { type: [String], default: [] },
    confirmed: { type: Boolean, required: true },
});

const Guest = mongoose.model('Guest', guestSchema);

export default Guest;
