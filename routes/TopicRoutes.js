const express = require('express');
const { getAllTopics, addTopic, updateTopic, deleteTopic, getTopic } = require('../controllers/topic');
const router = express.Router();

router.get('/getAllTopics', getAllTopics);
router.get('/getTopic/:id', getTopic);
router.post('/addTopic', addTopic);
router.put('/editTopic/:id', updateTopic);
router.delete('/deleteTopic/:id', deleteTopic);

module.exports = router;