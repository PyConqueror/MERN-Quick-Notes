const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
require('dotenv').config();
require('./config/database.cjs');

const app = express();

// Middleware
app.use(logger('dev'));
app.use(express.json());
app.use(require('./config/checkToken.js'));

// create-react-app has a "build" directory
// vite uses the "dist" directory instead
app.use('/api/users', require('./routes/api/users.cjs'));
app.use('/api/notes', require('./routes/api/notes.cjs'));
// app.use(favicon(path.join(__dirname, 'dist', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'dist')));


const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log('Express running on http://localhost/:' + port);
});


app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});