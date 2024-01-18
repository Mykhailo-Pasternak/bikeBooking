const express = require('express');
const router = express.Router();
const Bike = require('../models/bike');
const { getBikes, addBike, updateBikeStatusByID, deleteBike } = require('../controllers/bike-controllers');

router.get('/bikes', getBikes);
router.post('/add-bike', addBike);
router.patch('/update-bike-status/:id', updateBikeStatusByID);
router.delete('/delete-bike/:id', deleteBike);

module.exports = router;