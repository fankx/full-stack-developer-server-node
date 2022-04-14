import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import helloController from './controllers/helloController.js';
import userController from './controllers/userController.js';
import tuitsController from './controllers/tuitController.js';

const CONNECTION_STRING =
  process.env.DB_CONNECTION_STRING || 'mongodb://localhost:27017/webdev';

mongoose.connect(CONNECTION_STRING);

const app = express();

app.use(express.json());

app.use(cors());

helloController(app);

userController(app);

tuitsController(app);

app.get('/', (req, res) => {
  res.send('Welcome to Full Stack Development!');
});

app.listen(process.env.PORT || 4000);
