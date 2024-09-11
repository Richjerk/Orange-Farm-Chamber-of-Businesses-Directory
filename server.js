const express = require('express');
const app = express();
const mongoose = require('mongoose');
const businessRouter = require('./routes/businesses');
const userRouter = require('./routes/users');
require('dotenv').config(); // Add this line to load environment variables

console.log(process.env.MONGO_URI); // Log the MONGO_URI variable

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());
app.use('/businesses', businessRouter);
app.use('/users', userRouter);

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});