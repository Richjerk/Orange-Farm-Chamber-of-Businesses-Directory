const express = require('express');
const router = express.Router();
const Business = require('../models/Business');

router.get('/', async (req, res) => {
  const businesses = await Business.find();
  res.json(businesses);
});

router.post('/', async (req, res) => {
  const business = new Business(req.body);
  await business.save();
  res.json(business);
});

module.exports = router;