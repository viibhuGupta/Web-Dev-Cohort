import mongoose from 'mongoose';

const formSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  gender: { type: String, required: true },
  college: { type: String, required: true },
  description: { type: String, required: true },
});

export default mongoose.models.Form || mongoose.model('Form', formSchema);
