const express = require('express');

const path = require('path');

const app = express();

const postRoutes = require('./routes/post');
const homeRoutes = require('./routes/home');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(homeRoutes);
app.use('/admin', postRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
