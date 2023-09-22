const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('E vamos de Back-End!!')
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log("Server rodando na porta " + PORT));