const express = require('express');
const app = express();

const db = require('C:/Users/Filip/Documents/Softex/myproject/models/db.js');

app.get('/', async(request, response) => {
    response.send("Pagina inicial - Filipe");
});


app.listen(3333, () => {
    console.log('Server started on port 3333: http://localhost:3333')
})