import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    password: { type: String, required: true },
    imageProfil: { type: String, required: true },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    dateBirth: { type: Date, required: true },
    gender: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    address: {
      type: {
        avenue: { type: String },
        rue: { type: Number },
        commune: { type: String },
        ville: { type: String },
      },
    },
    userType: {
      type: { id: { type: Number }, name: { type: String } },
    },
    statusUser: { type: Boolean },
    accountSession: { type: Boolean },
    cDate: { type: Date },
  },
  { timestamps: true }
);

export default mongoose.model('User', userSchema);
