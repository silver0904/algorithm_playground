const express = require('express');
const cors = require('cors')
const app = express();

const sortingNum = require('./routes/sortingNum');
const findSubArraySum = require('./routes/findSubArraySum');
const findTwoArraysSum = require('./routes/findTwoArraysSum');

app.use(express.json());
app.use(cors());
app.use('/api/sorting', sortingNum);
app.use('/api/findSubArraySum', findSubArraySum);
app.use('/api/findTwoArraysSum', findTwoArraysSum);

const port = process.env.PORT||3000;
const server = app.listen(port, () => console.log(`Listening on port ${port}...`));

module.exports = server;