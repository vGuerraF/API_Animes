const animes = require("../mocks/animes");
const Anime = require("../dataBase/models/animeSchema");
const AnimeEntity = require("../entities/anime.entity");
const CharacterEntity = require("../entities/character.entity");

const getAllAnimes = async () => {
  return await Anime.find();
};

const getAnimeId = async (id) => {
  const animeIdFounded = await Anime.findOne({ id: id });

  return animeIdFounded;
};

const createAnime = async (animeObj) => {
  const newAnime = new AnimeEntity(animeObj);
  newAnime.validate();

  if (!animeObj.characters) {
    throw new Error("Personagem precisa ser preenchido");
  }

  const newCharacters = [];

  animeObj.characters.map((character) => {
    const newCharacter = new CharacterEntity(character);
    newCharacter.validate();
    newCharacters.push(newCharacter.getCharacter());
  });

  const newAnimeValidated = {
    ...newAnime.getAnime(),
    characters: newCharacters,
  };

  const animeCreated = await Anime.create(newAnimeValidated);
  return animeCreated;
};

const updateAnime = async (anime) => {
  const updateAnime = new AnimeEntity(anime);
  updateAnime.validate();

  if (!anime.characters) {
    throw new Error("Personagens precisa ser informado");
  }
  const updateCharacters = [];
  anime.characters.map((character) => {
    const updateCharacter = new CharacterEntity(character);
    updateCharacter.validate();
    updateCharacters.push(updateCharacter.getCharacter());
  });

  const updatedAnime = {
    ...updateAnime.getAnime(),
    characters: updateCharacters,
  };

  const spliceAnime = await Anime.findOneAndUpdate(
    { id: anime.id },
    updatedAnime,
    { new: true }
  );
  return spliceAnime;
};

const deleteAnime = async (id) => {
  const animeFinded = await Anime.findOneAndDelete({ id: id });

  return animeFinded;
};

module.exports = {
  getAllAnimes,
  getAnimeId,
  createAnime,
  updateAnime,
  deleteAnime,
};
