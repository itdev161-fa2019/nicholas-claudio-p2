import mongoose from 'mongoose';

const foodSchema = new mongoose.Schema({
  brandName: {
    type: String,
    required: false
  },
  description: {
    type: String,
    required: true
  },
  servingSize: {
    type: Number,
    required: true
  },
  unit: {
    type: String,
    required: true
  },
  servingsPerContainer: {
    type: Number,
    required: true
  }
});

const Food = mongoose.model('food', foodSchema);

export default Food;