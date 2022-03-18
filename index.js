/* Bibliotecas */
const express = require("express");
const app = express();
const path = require("path");

/* Configurações do servidor */
const port = 3000;

/* app */
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

/* Código js => constantes de armazenamento de dados */
const pokedex = [
  {
    id: 1,
    nome: "Bulbasau",
    tipo: "Grass",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
    descricao:
      "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger. ",
    altura: "0.7 m",
    peso: "6.9 kg",
    categoria: "Seed",
    habilidade: "Overgrow",
  },
  {
    id: 4,
    nome: "Charmander ",
    tipo: "Fire",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
    descricao:
      "It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail. ",
    altura: "0.6 m",
    peso: "8.5 kg",
    categoria: "Lizard",
    habilidade: "Blaze",
  },
  {
    id: 7,
    nome: "Squirtle ",
    tipo: "Water",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
    descricao:
      "When it retracts its long neck into its shell, it squirts out water with vigorous force.",
    altura: "0.5 m",
    peso: "9.0 kg",
    categoria: "Tiny Turtle",
    habilidade: "Torrent",
  },
];

/* Rotas */
app.get("/", function (req, res) {
  res.render("index", { pokedex });
});

/* Execução do servidor */
app.listen(port, () => {
  console.log("server is running on port http://localhost:3000/");
});
