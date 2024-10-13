const Order = require('../models/Order');

// Get Order Status
exports.getOrderStatus = async (req, res) => {
    const { orderId } = req.params;

    try {
        const order = await Order.findOne({ orderId });
        if (!order) return res.status(404).json({ message: 'Order not found' });

        res.json(order.status);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Update Order Status
exports.updateOrderStatus = async (req, res) => {
    const { orderId, stageIndex, completed } = req.body;

    try {
        const order = await Order.findOne({ orderId });
        if (!order) return res.status(404).json({ message: 'Order not found' });

        order.status[stageIndex].completed = completed;
        await order.save();

        res.json({ message: 'Order status updated successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
