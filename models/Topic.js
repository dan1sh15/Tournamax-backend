const mongoose = require('mongoose');

const topicScheme = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    }
});

module.exports = mongoose.model('Topic', topicScheme);