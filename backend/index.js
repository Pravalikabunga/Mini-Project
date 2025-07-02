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
app.post('/submit', (req, res) => {
  const { name, email } = req.body;
  
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }
  
  // Save data or do something with it here

  res.status(200).json({ message: 'Submission received successfully' });
});


// GET route to test server
app.get('/', (req, res) => {
    res.send('Backend is up and running!');
});

// --- Start Server ---
app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});
