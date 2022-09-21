const { Schema, model } = require("mongoose");

const characterSchema = new Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  lastname: { type: String, required: true },
  skill: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, required: true },
});

const animeSchema = new Schema({
  id: { type: String, required: true },
  title: { type: String, required: true },
  protagonist: { type: String, required: true },
  gender: { type: String, required: true },
  year: { type: Number, required: true },
  characters: { type: [characterSchema], required: true },
});

const Anime = model("Anime", animeSchema);

module.exports = Anime;
