const express = require('express');
const cors = require('cors');
require('./db/mongoose');

const path = require('path');
const app = express();
app.use(cors());
app.use(express.json());

const PORT = 8080;

app.use(express.static('public'));

app.use('/user', require('./routes/user'));
app.use('/cars', require('./routes/cars'));

// app.use(express.static(path.join(__dirname, 'client/build')));

// //Handle React routing, return all requests  React app
// app.get('*', function (_, res) {
//   res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
// });

app.listen(PORT, () => console.log(`server is running on ${PORT}`));
