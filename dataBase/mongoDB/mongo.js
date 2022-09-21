const { connect } = require("mongoose");

const connectMongoose = () => {
  connect("URL do mongoDB")
    .then(() => {
      console.log("DataBase connected");
    })
    .catch((err) => {
      console.log("Error in DataBase", err);
    });
};

module.exports = connectMongoose;
