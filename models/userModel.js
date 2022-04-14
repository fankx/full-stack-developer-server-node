import mongoose from 'mongoose';
import userSchema from '../schemas/userSchema.js';

const userModel = mongoose.model('UserModel', userSchema);

export default userModel;
