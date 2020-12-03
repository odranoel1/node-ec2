const mongoose = require('mongoose');

mongoose.connect(`${process.env.MONGODB_LOCAL}/${process.env.MONGODB_NAME}`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
})
  .then(db => console.log('Db is connected'))
  .catch(err => console.log(err));