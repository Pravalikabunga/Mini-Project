// --- Imports ---
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// --- App Initialization ---
const app = express();
const PORT = 3000;

// --- Middleware ---
app.use(cors());
app.use(express.json());

// --- MongoDB Connection ---
mongoose.connect('mongodb+srv://bpravalika1008:Pravalika@project-02.apjnfps.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB connected'))
.catch(err => console.error('❌ MongoDB connection error:', err));

// --- Mongoose Schema & Model ---
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
});

const User = mongoose.model('User', userSchema);

// --- Routes ---

// POST route to receive and store data in MongoDB
app.post('/submit', async (req, res) => {
  const { name, email } = req.body;

  // Basic validation
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }

  try {
    // Save to MongoDB
    const newUser = new User({ name, email });
    await newUser.save();

    res.status(200).json({ success: true, message: 'User registered successfully' });
  } catch (error) {
    console.error('Error saving user:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// GET route to check server is working
app.get('/', (req, res) => {
    res.send('Backend is up and running!');
});

// --- Start Server ---
app.listen(PORT, () => {
    console.log(`🚀 Server listening on http://localhost:${PORT}`);
});
