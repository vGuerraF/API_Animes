const router = require("express").Router();
const controller = require("../controllers/animes.controller");

router.get("/", controller.getAllAnimes);
router.get("/:id", controller.getAnimeId);
router.post("/", controller.createAnime);
router.put("/", controller.updateAnime);
router.delete("/:id", controller.deleteAnime);

module.exports = router;
