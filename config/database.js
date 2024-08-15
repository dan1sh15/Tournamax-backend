const mongoose = require('mongoose');

exports.connect = () => {
    mongoose.connect(process.env.MONGODB_URL)
                .then(() => {
                    console.log("Connected to the database successfully");
                })
                .catch((err) => {
                    console.log(err);
                    process.exit(1);
                });
};