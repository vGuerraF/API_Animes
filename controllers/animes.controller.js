const animesService = require("../services/animes.service");

const getAllAnimes = (req, res) => {
  const getAllToService = animesService.getAllAnimes();
  res.send(getAllToService);
};

const getAnimeId = (req, res) => {
  const animeId = req.params.id;
  const getIdToService = animesService.getAnimeId(animeId);
  res.send(getIdToService);
};

const createAnime = (req, res) => {
  const animeBody = req.body;
  const createToService = animesService.createAnime(animeBody);
  req.send(createToService);
};

const updateAnime = (req, res) => {
  const animeBody = req.body;
  const updateToService = animesService.updateAnime(animeBody);
  req.send(updateToService);
};

const deleteAnime = (req, res) => {
  const animeId = req.params.id;
  const deleteToService = animesService.deleteAnime(animeId);
  req.send(deleteToService);
};
