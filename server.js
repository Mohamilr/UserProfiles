const express = require('express');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 4000;

const thePath = path.join(__dirname, 'build');

app.use(express.static(thePath));

app.listen(PORT, () => {
    console.log(`app is running on port ${PORT}`)
})