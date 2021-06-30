import mongo from './mongo';
import express from 'express';
import cors from 'cors';
import routes from './routes';
import path from 'path';
import wakeUpDyno from './routes/wakeUpDyno'

// gotta load in MONGO_URL before `mongo.connect()`
require('dotenv-defaults').config();

const app = express();
const buildPath = path.join(__dirname, '../../build');
app.use(express.static(buildPath));
app.use(cors());
app.use(express.json());
app.use('/', routes);

mongo.connect();

console.log(buildPath);

const server = app.listen(process.env.PORT || 5000, function () {
  const DYNO_URL = "https://meetup-tw.herokuapp.com/";
  wakeUpDyno(DYNO_URL);
  console.log('Listening on port ' + server.address().port);
});
