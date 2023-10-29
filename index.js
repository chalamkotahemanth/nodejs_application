const express = require('express');
const app = express();

// Serve static files (images, CSS, etc.) from the same directory as index.js
app.use(express.static(__dirname));

app.get('/', (req, res) => {
    // Send the main HTML page as a response
    res.sendFile(__dirname + '/index.html');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Server is running on port ${port}');
});