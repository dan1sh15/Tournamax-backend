const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const topicRoutes = require('./routes/TopicRoutes');
const dbConnect = require('./config/database');

const PORT = process.env.PORT || 4000;


app.use(express.json());
app.use(cors({
    origin: '*'
}));

app.use('/api/v1', topicRoutes);

dbConnect.connect();

app.listen(PORT, () => { console.log(`App is running at PORT: ${PORT}`) });