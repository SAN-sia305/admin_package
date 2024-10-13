const Staff = require('../models/Staff');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Signup
exports.signup = async (req, res) => {
    const { name, secretStage, age, nationality, gender, userId, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        const newStaff = new Staff({ name, secretStage, age, nationality, gender, userId, password: hashedPassword });
        await newStaff.save();
        res.status(201).json({ message: 'Staff registered successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Login
exports.login = async (req, res) => {
    const { userId, password } = req.body;

    try {
        const staff = await Staff.findOne({ userId });
        if (!staff) return res.status(400).json({ message: 'Invalid credentials' });

        const isMatch = await bcrypt.compare(password, staff.password);
        if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

        const token = jwt.sign({ id: staff._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token, staffId: staff._id });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
