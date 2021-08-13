import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  password: { type: String, required: true },
  image_profil: { type: String, required: true },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  date_birth: { type: Date, required: true },
  gender: { type: String, required: true },
  phone_number: { type: String, required: true },
  address: {
    type: {
      avenue: { type: String },
      rue: { type: Number },
      commune: { type: String },
      ville: { type: String },
    },
  },
  user_type: {
    type: { id: { type: Number }, name: { type: String } },
  },
  status_user: { type: String },
  account_session: { type: String },
  c_date: { type: Date },
});

export default mongoose.model('User', userSchema);
