const express = require('express');
const Doctor = require('../models/doctorModel'); // Import Doctor model
const router = express.Router();

// Route to Add a New Doctor
router.post('/doctors', async (req, res) => {
    try {
        const { name, specialization, contact, patients } = req.body;

        // Validation
        if (!name || !specialization || !contact) {
            return res.status(400).json({ message: 'Name, specialization, and contact are required!' });
        }

        // Create a new doctor
        const newDoctor = new Doctor({
            name,
            specialization,
            contact,
            patients: patients || [] // Ensure patients is an array
        });

        await newDoctor.save();

        res.status(201).json({ message: 'Doctor added successfully!', doctor: newDoctor });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Route to Get All Doctors
router.get('/doctors', async (req, res) => {
    try {
        // Retrieve all doctors and populate patients if needed
        const doctors = await Doctor.find().populate('patients', 'name email'); // Adjust fields to display patient info

        res.status(200).json({ doctors });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Export the router
module.exports = router;
