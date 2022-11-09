const express = require('express');
const cors = require('cors');
const port = 8000;
const app = express();

//1. import mongoose - require mongoose
//2. connect to mongodb by requiring the file here
require('./server/config/mongoose.config');
//3. create mongoose schema
//4. 

//middleware
app.use(cors());
app.use(express.json());
//app.use(express.json(), express.urlencoded({extended: true}));

//Routes after middleware
require('./server/routes/product.routes')(app);

app.listen(port, () => console.log(`You are listening at port ${port}`));