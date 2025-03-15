const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 9000;

// Enable CORS
app.use(cors());

// Middleware to handle JSON requests
app.use(express.json());

// Simple API route
app.get('/', (req, res) => {
    res.send('Hello from the backend!');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
