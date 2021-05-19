const express = require('express');
const cors = require('cors');
const user = require('./routes/user');
const company = require('./routes/company');
const contact = require('./routes/contact');
const pref = require('./routes/pref');
const auth = require('./routes/auth');
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 3200;

// Endpoints.
//app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var allowedOrigins = ['http://localhost:3000',
                      'http://yourapp.com'];
app.use(cors({
  origin: function(origin, callback){
    // allow requests with no origin 
    // (like mobile apps or curl requests)
    if(!origin) return callback(null, true);
    if(allowedOrigins.indexOf(origin) === -1){
      var msg = 'The CORS policy for this site does not ' +
                'allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));
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
app.use('/auth', auth);