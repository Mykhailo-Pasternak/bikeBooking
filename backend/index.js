const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Bike = require('./models/bike')

const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());
app.use(express.json());
const db = 'mongodb+srv://sscorpio2006:V6v9FA6JFm3Fuich@cluster0.grecbj8.mongodb.net/node-blog?retryWrites=true&w=majority'

mongoose
    .connect(db)
    .then(() => console.log('Connected to DB'))
    .catch((error) => console.error('Error connecting to DB:', error));

app.listen(PORT, (error) => {
    error ? console.log(error) : console.log(`listening server: port ${PORT}`);
});

app.get('/bikes', (req, res) => {
    Bike
        .find()
        .then((bikes) => res.send(bikes))
        .catch((error) => {
            console.error('Error fetching bikes:', error);
            res.status(500).send('Internal Server Error');
        });
});

app.post('/add-bike', (req, res) => {
    const { name, type, color, wheelSize, price, id, description, status } = req.body;
    const bike = new Bike({ name, type, color, wheelSize, price, id, description, status });
    bike
        .save()
        .then((result) => res.send(result))
        .catch((error) => {
            console.error(error);
            res.status(500).send("Internal Server Error");
        }
        )
});

app.patch('/update-bike-status/:id', (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    Bike
        .findOneAndUpdate({ id: id }, { status }, { new: true })
        .then((updatedBike) => {
            if (!updatedBike) {
                return res.status(404).send('Bike not found');
            }

            res.send(updatedBike);
        })
        .catch((error) => {
            console.error('Error updating bike status:', error);
            res.status(500).send('Internal Server Error');
        });
});

app.delete('/delete-bike/:id', (req, res) => {
    const { id } = req.params;

    Bike
        .findOneAndDelete({ id: id })
        .then((deletedBike) => {
            if (!deletedBike) {
                return res.status(404).send("Bike not found");
            }
            res.send(deletedBike);
        })
        .catch((error) => {
            console.error(error);
            res.status(500).send("Internal Server Error");
        });
});
