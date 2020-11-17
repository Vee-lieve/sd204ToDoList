const mongoose = require("mongoose");


const connectToDatabase = () => {
    mongoose
      .connect("mongodb://localhost:27017/todolist", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: true
      })
      .then(() => {
        console.log("Connected to database");
      })
      .catch((error) => console.log(error));
  };

module.exports = {
    connect: connectToDatabase,
};