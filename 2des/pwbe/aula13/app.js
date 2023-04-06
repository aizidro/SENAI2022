const express = require('express');
const cors = require('cors');
const app = express();
const router = require('./back/src/routes/routes')

app.use(express.json());
app.use(cors());
app.use(router);
const PORT = 4000;

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}...`);
})
