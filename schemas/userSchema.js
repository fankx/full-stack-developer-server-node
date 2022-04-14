import mongoose from 'mongoose';

const userSchema = mongoose.Schema(
  {
    username: String,
    type: String,
  },
  { collection: 'User' }
);

export default userSchema;
