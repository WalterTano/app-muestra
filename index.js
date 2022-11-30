const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 3000;
const HOST = '192.168.1.11';

// enabling CORS for all requests
// app.use(cors());

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(PORT, HOST, (error) => {
	console.log(`App listening on: ${HOST}:${PORT}`);
});