// implement your posts router here
const express = require('express');

const Posts = require('./posts-model');

const router = express.Router();

router.get('/', (req, res) => {
    Posts.find()
        .then(posts => {
            res.status(200).json(posts)
        })
        .catch(error => {
            res.status(500).json({ message: 'Error retrieving posts'})
        })
});

module.exports = router;