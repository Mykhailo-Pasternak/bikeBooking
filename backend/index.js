const express = require('express');

const PORT = process.env.PORT || 3001;

const app = express();

app.listen(PORT, (error) => {
    error ? console.log(error) : console.log(`listening server: port ${PORT}`);
});

app.get('/api', (req, res) => {

    res.json({ message: `hello from backend` });
});