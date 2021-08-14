import { model, Schema, Document } from 'mongoose';
import { Xpense } from '@interfaces/xpenses.interface';

const xpenseSchema: Schema = new Schema({
  title: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
  },
  date: {
    type: Date,
    required: true,
    default: Date.now,
  },
  cost: {
    type: Number,
    required: true,
    min: 0,
  },
  category: {
    type: String,
  },
});

const xpenseModel = model<Xpense & Document>('Xpense', xpenseSchema);

export default xpenseModel;
