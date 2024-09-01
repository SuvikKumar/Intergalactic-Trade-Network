const mongoose = require('mongoose');

const TradeSchema = new mongoose.Schema({
    buyer: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    seller: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    item: { type: String, required: true },
    amount: { type: Number, required: true },
    status: { type: String, enum: ['pending', 'completed'], default: 'pending' },
});

module.exports = mongoose.model('Trade', TradeSchema);
