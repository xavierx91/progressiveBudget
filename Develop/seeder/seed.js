var mongoose = require("mongoose");
var db = require("../models/transaction");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/budget", {
  useNewUrlParser: true
});

var imageSeed = [
  {
    name: 'tom',
    value: 123,
    date: new Date(Date.now())
  },
  {
    name: 'tom1',
    value: 123,
    date: new Date(Date.now())
  },
  {
    name: 'tom2',
    value: 123,
    date: new Date(Date.now())
  },
  {
    name: 'tom3',
    value: 123,
    date: new Date(Date.now())
  },
 
];

db.deleteMany({})
  .then(() => db.collection.insertMany(imageSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
