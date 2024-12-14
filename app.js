const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

app.use(cookieParser());

// Set a cookie
app.get('/set-cookie', (req, res) => {
    res.cookie('username', 'JohnDoe', { httpOnly: true, secure: false });
    res.send('Cookie has been set!');
});

// Get a cookie
app.get('/get-cookie', (req, res) => {
    const username = req.cookies.username || 'Not Found';
    res.send(`Username: ${username}`);
});

// Delete a cookie
app.get('/delete-cookie', (req, res) => {
    res.clearCookie('username');
    res.send('Cookie has been deleted!');
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
