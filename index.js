const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const userRouter = require('./routes/userRoutes'); // Import routes

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors()); // Allow requests from any origin

// MongoDB Connection
const mongoUri = process.env.MONGO_URI;

mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("✅ MongoDB Connected Successfully!"))
.catch((err) => console.error("❌ MongoDB Connection Faile", err.message));

// Routes
app.use('/api', userRouter); // Attach user routes to `/api`

// Root Route
app.get('/', (req, res) => {
    res.send("Hello from your backend server!");
});

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
});
