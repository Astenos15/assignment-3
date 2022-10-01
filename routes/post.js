const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: false }));

router.get('/post', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'post.html'));
});

router.post('/post', (req, res, next) => {
  const title = req.body.postTitle;
  const content = req.body.postBody;
  console.log(title, content);
  res.redirect('/');
});

module.exports = router;
