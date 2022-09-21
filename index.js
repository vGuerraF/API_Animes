const express = require("express");
const app = express();
const cors = require("cors");
const AnimeRoutes = require("./routes/animes.routes");
const connectMongoose = require("./dataBase/mongoDB/mongo");

app.use(cors());
app.use(express.json());

//A posiçao que o 'connectMongoose' fica muda tudo.
connectMongoose();

app.use("/animes", AnimeRoutes);

app.listen(3000, () => {
  console.log("A aplicação esta rodando na porta 3000");
  console.log("Acesse em: http://localhost:3000");
});
