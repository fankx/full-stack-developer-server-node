import mongoose from 'mongoose';

const tuitSchema = mongoose.Schema(
  {
    topic: String,
    postedBy: {
      username: String,
    },
    liked: { type: Boolean, default: false },
    disliked: { type: Boolean, default: false },
    handle: String,
    time: String,
    title: String,
    tuit: String,
    logo_image: String,
    image: String,
    summary: String,
    link: String,
    stats: {
      comments: { type: Number, default: 0 },
      retuits: { type: Number, default: 0 },
      likes: { type: Number, default: 0 },
      dislikes: { type: Number, default: 0 },
    },
  },
  { collection: 'tuits' }
);

export default tuitSchema;
