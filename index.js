const express = require('express');
const app = express();
const PORT = 8888;

app.use(express.static("public"));


const servantRouter = require('./routes/servant');
app.use('/servant', servantRouter);

app.listen(PORT, () => console.log(`API listening at http://localhost:${PORT}`));