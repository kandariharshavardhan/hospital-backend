const mongoose = require('mongoose');

// Define Doctor Schema
const doctorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    specialization: { type: String, required: true },
    contact: { type: String, required: true },
    patients: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }], // References the User collection
    createdAt: { type: Date, default: Date.now }
});

// Create Doctor Model
const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;
