const express = require('express');
const User = require('../models/userModel.js');
const Doctor = require('../models/doctor.js');

const router = express.Router();

//fetch user
// Root route for testing
router.get('/', (req, res) => {
    res.send("Hello from the Express backend!");
  });
  

// Add a User
router.post('/users', async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).json({ message: 'User created successfully!', user });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Add a Doctor
router.post('/doctors', async (req, res) => {
    try {
        console.log("1111log")
        const doctor = new Doctor(req.body);
        await doctor.save();
        res.status(201).json({ message: 'Doctor created successfully!', doctor });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});


// Get all Users
router.get('/users', async (req, res) => {
    console.log("22log")
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get all Doctors
router.get('/doctors', async (req, res) => {
    try {
        const doctors = await Doctor.find().populate('patients');
        res.status(200).json(doctors);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
