const express = require('express');
const user = require('./routes/user');
const company = require('./routes/company');
const contact = require('./routes/contact');
const pref = require('./routes/pref');
const app = express();
const port = process.env.PORT || 3200;

// Endpoints.
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.listen(port, () => {console.log(`El puerto es: ${port}`)})
app.get('/', (req, res) => {res.send({
    title: 'Data Warehouse',
    author: 'Jonathan Kim',
    version: 'Beta 1.0',
    documentation: 'https://localhost:3200/api-docs'
})});

app.use('/user', user);
app.use('/company', company);
app.use('/contact', contact);
app.use('/preference', pref);