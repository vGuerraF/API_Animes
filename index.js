const express = require("express");
const app = express();
const cors = require("cors");
let animes = require("./mocks/animes");
const Char = require("./entities/character.entity");
const controller = require("./controllers/animes.controller");

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(express.json());

app.get("/", controller.getAllAnimes);
app.get("/anime/:id", controller.getAnimeId);
app.post("/", controller.createAnime);
app.put("/", controller.updateAnime);
app.delete("/anime/:id", controller.deleteAnime);

// app.get("/", (req, res) => {
//   const char1 = new Char({
//     name: "vinic",
//     lastName: "guerra",
//     skill: "chad",
//     age: "1111",
//     gender: "male",
//   });
//   char1.validate();
//   console.log(char1.getCharacter());

//   res.send(char1);
// });

// app.get("/anime/:id", (req, res) => {
//   let animeId = req.params.id;
//   let animeIdFounded;

//   animes.map((anime) => {
//     if (anime.id === animeId) {
//       animeIdFounded = anime;
//     }

//     if (animeIdFounded) {
//       res.send(animeIdFounded);
//     } else {
//       res.send("Nenhum anime com esse id foi encontrado");
//     }
//   });
// });

app.listen(3000, () => {
  console.log("A aplicação esta rodando na porta 3000");
  console.log("Acesse em: http://localhost:3000");
});
