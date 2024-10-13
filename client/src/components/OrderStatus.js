import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

const OrderStatus = () => {
    const [orderId, setOrderId] = useState('');
    const [status, setStatus] = useState([]);
    const { token } = useContext(AuthContext);

    const fetchOrderStatus = async () => {
        try {
            const res = await axios.get(`http://localhost:5000/api/orders/${orderId}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            setStatus(res.data);
        } catch (error) {
            console.error('Failed to fetch order status', error.response.data);
        }
    };

    const handleUpdateStatus = async (index) => {
        try {
            await axios.post(
                'http://localhost:5000/api/orders/update',
                { orderId, stageIndex: index, completed: true },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            fetchOrderStatus(); // Refresh the status
        } catch (error) {
            console.error('Failed to update order status', error.response.data);
        }
    };

    return (
        <div>
            <input type="text" value={orderId} onChange={(e) => setOrderId(e.target.value)} placeholder="Order ID" />
            <button onClick={fetchOrderStatus}>Fetch Status</button>
            <ul>
                {status.map((stage, index) => (
                    <li key={index}>
                        {stage.stage} - {stage.completed ? 'Completed' : 'Pending'}
                        <button onClick={() => handleUpdateStatus(index)}>Complete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default OrderStatus;
