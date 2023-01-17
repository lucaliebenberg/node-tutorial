const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://luca:milo060701@cluster0.sn9hl87.mongodb.net/TASK-MANAGER?retryWrites=true&w=majority";

mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to the DB..."))
  .catch((err) => console.log(err));
