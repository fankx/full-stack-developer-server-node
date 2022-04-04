import express from 'express';
import cors from 'cors';
import helloController from './controllers/helloController.js';
import userController from './controllers/userController.js';
import tuitsController from './controllers/tuitsController.js';

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
