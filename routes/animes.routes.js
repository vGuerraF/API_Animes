const router = require("express").Router();
const controller = require("../controllers/animes.controller");

router.get("/", controller.getAllAnimes);
router.get("/:id", controller.getAnimeId);
router.post("/create", controller.createAnime);
router.put("/update", controller.updateAnime);
router.delete("/delete/:id", controller.deleteAnime);

module.exports = router;
