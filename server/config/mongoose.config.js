const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/crmdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Established a connection to the database'))
  .catch(err => console.log('something went wrong when connecting to the database', err));
  
mongoose.connection.on('error', (err) => console.err(err));
