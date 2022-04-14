import userModel from '../models/userModel.js';

export const findAllUsers = () => userModel.find();
export const createUser = (user) => userModel.create(user);
export const deleteUser = (uid) => userModel.deleteOne({ _id: uid });
export const updateUser = (uid, user) =>
  userModel.updateOne({ _id: uid }, { $set: user });
export const findUserById = (uid) => userModel.findOne({ _id: uid });
