const express = require('express');
const mongoose = require('mongoose');
const Bike = require('./models/bike')

const PORT = process.env.PORT || 3001;

const app = express();
const db = 'mongodb+srv://sscorpio2006:V6v9FA6JFm3Fuich@cluster0.grecbj8.mongodb.net/node-blog?retryWrites=true&w=majority'

mongoose
    .connect(db)
    .then((res) => console.log('Connect to DB'))
    .catch((error) => console.log(error))

app.listen(PORT, (error) => {
    error ? console.log(error) : console.log(`listening server: port ${PORT}`);
});

app.get('/api', (req, res) => {
    res.json({ message: `hello from backend` });
});

app.post('/add-bike', (req, res) => {
    const { name, type, color, wheelSize, price, id, description } = req.body;
    const bike = new Bike({ name, type, color, wheelSize, price, id, description });
    bike
        .save()
        .then((result) => res.send(result))
        .catch(() => {
            console.log(error)
        }
        )
});