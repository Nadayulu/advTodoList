const express = require('express');
const parser = require('body-parser');
const router = require('./routes/routes.js');

const app = express();

app.use(parser.json());
app.use(parser.urlencoded({ extended : true}));

app.use('/api', router)

app.listen(3000, () => {
    console.log('Server is up and listening on port: 3000!')
})