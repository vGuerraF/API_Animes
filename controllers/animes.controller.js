const animesService = require("../services/animes.service");

const getAllAnimes = async (req, res) => {
  try {
    const getAllByService = await animesService.getAllAnimes();
    res.status(200).send(getAllByService);
  } catch (err) {
    console.log(err);
    res.status(500);
  }
};

const getAnimeId = async (req, res) => {
  const animeId = req.params.id;
  const getIdByService = await animesService.getAnimeId(animeId);
  if (getIdByService) {
    res.status(200).send(getIdByService);
  } else {
    res.status(400).send({ message: "Nao existe nenhum anime com esse id" });
  }
};

const createAnime = async (req, res) => {
  try {
    const animeBody = req.body;
    const createByService = await animesService.createAnime(animeBody);
    res.status(201).send(createByService);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
};

const updateAnime = async (req, res) => {
  try {
    const animeBody = req.body;
    const updateByService = await animesService.updateAnime(animeBody);
    res.status(200).send(updateByService);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
};

const deleteAnime = async (req, res) => {
  const animeId = req.params.id;
  const deleteByService = await animesService.deleteAnime(animeId);
  if (deleteByService) {
    res.status(200).send(deleteByService);
  } else {
    res
      .status(400)
      .send({ message: "Nenhum anime com esse id foi encontrado" });
  }
  res.send(deleteByService);
};

module.exports = {
  getAllAnimes,
  getAnimeId,
  createAnime,
  updateAnime,
  deleteAnime,
};
