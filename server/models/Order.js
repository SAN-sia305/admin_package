const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    orderId: { type: String, required: true },
    status: [
        {
            stage: String,
            timestamp: Date,
            description: String,
            completed: { type: Boolean, default: false },
        },
    ],
    refundProcessed: { type: Boolean, default: false },
    productType: { type: String, required: true },
});

module.exports = mongoose.model('Order', OrderSchema);
