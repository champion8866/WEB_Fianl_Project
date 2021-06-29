import mongo from './mongo';
import express from 'express';
import cors from 'cors';
import routes from './routes';
import path from 'path';

// gotta load in MONGO_URL before `mongo.connect()`
require('dotenv-defaults').config();

const app = express();
const buildPath = path.join(__dirname, '..', 'build');
app.use(express.static(buildPath));
app.use(cors());
app.use(express.json());
app.use('/', routes);

mongo.connect();

const server = app.listen(process.env.PORT || 5000, function () {
  console.log('Listening on port ' + server.address().port);
});
