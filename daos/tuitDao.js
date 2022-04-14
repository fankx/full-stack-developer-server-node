import tuitModel from '../models/tuitModel.js';

export const findAllTuits = () => {
  return tuitModel.find().sort({ _id: -1 });
};
export const createTuit = (tuit) => tuitModel.create(tuit);
export const deleteTuit = (tid) => tuitModel.deleteOne({ _id: tid });
export const updateTuit = (tid, tuit) =>
  tuitModel.updateOne({ _id: tid }, { $set: tuit });
