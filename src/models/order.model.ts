import mongoose, { Schema, Document } from 'mongoose';

interface IOrder extends Document {
  userId: mongoose.Schema.Types.ObjectId;
  items: {
    groceryId: mongoose.Schema.Types.ObjectId;
    quantity: number;
  }[];
  totalAmount: number;
}

const OrderSchema: Schema = new Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  items: [
    {
      groceryId: { type: mongoose.Schema.Types.ObjectId, ref: 'Grocery', required: true },
      quantity: { type: Number, required: true },
    },
  ],
  totalAmount: { type: Number, required: true },
});

export default mongoose.model<IOrder>('Order', OrderSchema);
