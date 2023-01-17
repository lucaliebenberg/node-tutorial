const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://luca:milo060701@cluster0.sn9hl87.mongodb.net/TASK-MANAGER?retryWrites=true&w=majority";

const connectDB = (url) => {
  return mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;
