const express = require('express');
const parser = require('body-parser');
const router = require('./routes/routes.js');
const path = require('path');

const app = express();

app.use(parser.json());
app.use(parser.urlencoded({ extended : true}));

app.use(express.static(path.resolve(__dirname, '../client')))
app.use('/assets', express.static(path.resolve(__dirname, '../node_modules/angular')))
app.use('/api', router)

app.listen(3000, () => {
    console.log('Server is up and listening on port: 3000!')
})