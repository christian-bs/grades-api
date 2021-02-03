import mongoose from 'mongoose';

const db = {};
db.mongoose = mongoose;
db.url = process.env.MONGODB;

const gradeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    subject: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    value: {
        type: Number,
        required: true,
        default: 0,
    },
    lastModified: {
        type: Date,
        default: Date.now,
    },
});

const gradeModel = mongoose.model('grades', gradeSchema, 'grades');

export { db, gradeModel };
