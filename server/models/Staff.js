const mongoose = require('mongoose');

const StaffSchema = new mongoose.Schema({
    name: { type: String, required: true },
    secretStage: { type: String, required: true },
    age: { type: Number, required: true },
    nationality: { type: String, required: true },
    gender: { type: String, required: true },
    password: { type: String, required: true },
    staffId: { type: String, required: true, unique: true },
});

// Create an index on 'staffId' to enforce uniqueness
StaffSchema.index({ staffId: 1 }, { unique: true });

const Staff = mongoose.model('Staff', StaffSchema, 'staffDummy');
module.exports = Staff;