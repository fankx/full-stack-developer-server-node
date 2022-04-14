import * as tuitDao from '../daos/tuitDao.js';

const createTuit = async (req, res) => {
  const newTuit = req.body;
  const insertedTuit = await tuitDao.createTuit(newTuit);
  res.json(insertedTuit);
};
const findAllTuits = async (req, res) => {
  const tuits = await tuitDao.findAllTuits();
  res.json(tuits);
};
const updateTuit = async (req, res) => {
  const { tid } = req.params;
  const updatedTuit = req.body;
  await tuitDao.updateTuit(tid, updatedTuit);
  res.sendStatus(200);
};
const deleteTuit = async (req, res) => {
  const { tid } = req.params;
  await tuitDao.deleteTuit(tid);
  res.sendStatus(200);
};

export default (app) => {
  app.post('/api/tuits', createTuit);
  app.get('/api/tuits', findAllTuits);
  app.put('/api/tuits/:tid', updateTuit);
  app.delete('/api/tuits/:tid', deleteTuit);
};
