const fs = require('fs');
const path = require('path');

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const Goal = require('./models/goal');

const app = express();

const accessLogStream = fs.createWriteStream(
  path.join(__dirname, 'logs', 'access.log'),
  { flags: 'a' }
);

app.use(morgan('combined', { stream: accessLogStream }));

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/goals', async (req, res) => {
  console.log('TRYING TO FETCH GOALS!!!!');
  try {
    const goals = await Goal.find();
    res.status(200).json({
      goals: goals.map((goal) => ({
        id: goal.id,
        text: goal.text,
      })),
    });
    console.log('FETCHED GOALS');
  } catch (err) {
    console.error('ERROR FETCHING GOALS');
    console.error(err.message);
    res.status(500).json({ message: 'Failed to load goals.' });
  }
});

app.post('/goals', async (req, res) => {
  console.log('TRYING TO STORE GOAL');
  const goalText = req.body.text;

  if (!goalText || goalText.trim().length === 0) {
    console.log('INVALID INPUT - NO TEXT');
    return res.status(422).json({ message: 'Invalid goal text.' });
  }

  const goal = new Goal({
    text: goalText,
  });

  try {
    await goal.save();
    res
      .status(201)
      .json({ message: 'Goal saved', goal: { id: goal.id, text: goalText } });
    console.log('STORED NEW GOAL');
  } catch (err) {
    console.error('ERROR FETCHING GOALS');
    console.error(err.message);
    res.status(500).json({ message: 'Failed to save goal.' });
  }
});

app.delete('/goals/:id', async (req, res) => {
  console.log('TRYING TO DELETE GOAL');
  try {
    await Goal.deleteOne({ _id: req.params.id });
    res.status(200).json({ message: 'Deleted goal!' });
    console.log('DELETED GOAL');
  } catch (err) {
    console.error('ERROR FETCHING GOALS');
    console.error(err.message);
    res.status(500).json({ message: 'Failed to delete goal.' });
  }
});

const {
  PORT,
  MONGO_USERNAME,
  MONGO_PASSWORD,
  MONGO_URL,
  MONGO_DBNAME,
} = process.env;
console.log(`be port ${PORT}`);
console.log(`be MONGO_USERNAME ${MONGO_USERNAME}`);
console.log(`be MONGO_PASSWORD ${MONGO_PASSWORD.slice(0, 2)}...`);
console.log(`be MONGO_URL ${MONGO_URL}`);
console.log(`be MONGO_DBNAME ${MONGO_DBNAME}`);
// console.log(`be MONGO_INITDB_ROOT_USERNAME ${MONGO_INITDB_ROOT_USERNAME}`);
// console.log(`be MONGO_INITDB_ROOT_PASSWORD ${MONGO_INITDB_ROOT_PASSWORD}`);
const connectionString = `mongodb+srv://${MONGO_USERNAME}:${encodeURIComponent(MONGO_PASSWORD)}@${MONGO_URL}/${MONGO_DBNAME}?retryWrites=true&w=majority`;

const connectDbAndStartServer = () => {
  mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }, (err) => {
    if (err) {
      console.error('FAILED TO CONNECT TO MONGODB!!!');
      console.error(err);
      console.log('RECONNECTING!!!');
      setTimeout(connectDbAndStartServer, 5000);
    } else {
      console.log('CONNECTED TO MONGODB!!!');
      app.listen(PORT);
    }
  });
}

connectDbAndStartServer();
