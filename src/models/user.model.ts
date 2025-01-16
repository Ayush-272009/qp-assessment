import mongoose, { Schema, Document } from 'mongoose';

interface IUser extends Document {
  name: string;
  role: 'admin' | 'user';
}

const UserSchema: Schema = new Schema({
  name: { type: String, required: true },
  role: { type: String, enum: ['admin', 'user'], required: true },
});

export default mongoose.model<IUser>('User', UserSchema);
