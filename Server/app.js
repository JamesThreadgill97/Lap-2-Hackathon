// MIDDLEWARE:

const express = require('express');
const cors = require('cors');
const countryRouter = require('./routers/diary');

const app = express();
app.use(cors());
app.use(express.json()); 
app.use("/diary", diaryRouter);


app.get('/', (req, res) => {
    res.send('This is a countries API');
})

module.exports = app;