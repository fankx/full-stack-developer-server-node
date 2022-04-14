import mongoose from 'mongoose';
import tuitSchema from '../schemas/tuitSchema.js';

const tuitModel = mongoose.model('TuitModel', tuitSchema);

export default tuitModel;
