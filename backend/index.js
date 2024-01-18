const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bikeRoutes = require('./routes/bike-routes')

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

app.use(bikeRoutes);