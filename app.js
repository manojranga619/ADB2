const express = require("express");
const cors = require('cors');

var app = express();
app.use(cors({
    origin: '*'
}));

// Default Route
app.get('/', (req, res) => {
    res.send('Hello World!!!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});