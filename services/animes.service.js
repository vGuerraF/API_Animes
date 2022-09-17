const animes = require("../mocks/animes");
const AnimeEntity = require("../entities/anime.entity");
const CharacterEntity = require("../entities/character.entity");

const getAllAnimes = () => {
  return animes;
};

const getAnimeId = (id) => {
  let animeIdFounded;

  animes.map((anime) => {
    if (anime.id === id) {
      animeIdFounded = anime;
    }

    if (animeIdFounded) {
      return animeIdFounded;
    } else {
      throw new Error("Nenhum anime com esse id foi encontrado");
    }
  });
};

const createAnime = (animeObj) => {
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

  animes.push(newAnimeValidated);

  
};

const updateAnime = (anime) => {
  const updateAnime = new AnimeEntity(anime);
  updateAnime.validate();

  if (!anime.characters) {
    throw new Error("Personagens precisa ser informado");
  }
  const updateCharacters = [];
  anime.characters.map((character) => {
    const updateCharacter = new CharacterEntity(character);
    updateCharacter.validate();
    updateCharacters.push(updateCharacter);
  });

  const updatedAnime = {
    ...updateAnime.getAnime(),
    characters: updateCharacters,
  };

  animes.map((eachAnime, index) => {
    if (eachAnime.id === updateAnime.id) {
      animes.splice(index, 1, updatedAnime);
    }
  });
};

const deleteAnime = (id) => {
  animes.map((eachAnime, index) => {
    if (eachAnime.id === id) {
      animes.splice(index, 1);
    }
  });
};

module.exports = {
  getAllAnimes,
  getAnimeId,
  createAnime,
  updateAnime,
  deleteAnime,
};
