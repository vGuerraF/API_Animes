const { connect } = require("mongoose");

const connectMongoose = () => {
  connect("mongodb+srv://admin:admin@cluster0.6tmo4tg.mongodb.net/?retryWrites=true&w=majority")
    .then(() => {
      console.log("DataBase connected");
    })
    .catch((err) => {
      console.log("Error in DataBase", err);
    });
};

module.exports = connectMongoose;
