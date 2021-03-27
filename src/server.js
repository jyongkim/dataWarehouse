const { application } = require('express');
const express = require('express');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.listen(port, () => {console.log(`El puerto es: ${port}`)})
app.get('/', (req, res) => {res.send({
    title: 'Data Warehouse',
    author: 'Jonathan Kim',
    version: 'Beta 1.0',
    documentation: 'https://localhost:3000/api-docs'
})})