const express = require('express');
const router = express.Router();
const Staff = require('../models/Staff'); // Ensure you have a Staff model defined

// Hardcoded login route
router.post('/login', async (req, res) => {
    const { staffId, password } = req.body;

    // Hardcoded values for testing
    const hardcodedStaffId = '94ck3400170';
    const hardcodedPassword = 'pswd1';

    if (staffId === hardcodedStaffId && password === hardcodedPassword) {
        return res.json({ success: true, message: 'Login successful' });
    } else {
        return res.status(400).json({ success: false, message: 'Invalid Staff ID or password' });
    }
});

module.exports = router;
