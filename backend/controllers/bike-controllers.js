const Bike = require('../models/bike');

const handleError = (res, error) => {
    console.log(error);
    res.status(500).send('Internal Server Error');
}

const getBikes = (req, res) => {
    Bike
        .find()
        .then((bikes) => res.send(bikes))
        .catch((error) => handleError(res, error));
}

const addBike = (req, res) => {
    const { name, type, color, wheelSize, price, id, description, status } = req.body;
    const bike = new Bike({ name, type, color, wheelSize, price, id, description, status });
    bike
        .save()
        .then((result) => res.send(result))
        .catch((error) => handleError(res, error));
}

const updateBikeStatusByID = (req, res) => {
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
        .catch((error) => handleError(res, error));
}

const deleteBike = (req, res) => {
    const { id } = req.params;

    Bike
        .findOneAndDelete({ id: id })
        .then((deletedBike) => {
            if (!deletedBike) {
                return res.status(404).send("Bike not found");
            }
            res.send(deletedBike);
        })
        .catch((error) => handleError(res, error));
}

module.exports = {
    getBikes, addBike, updateBikeStatusByID, deleteBike
}