// Dotenv simplifies the process of loading enviroment variables from a '.env' file into Node.js applications, reducing the need for manual configuration
require('dotenv').config(); // Keep sensitive information like API Keys, database passwords, in a separate '.env' file, helps improve security
const express = require('express');

const app = express();

// Built-in Middleware - parse incoming JSON request bodies (req.body)
app.use(express.json());

// Health check route - confirms the server is running
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'ok' });
});

// Global error handler - 4 parameters, Express identifies this as error middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = app;