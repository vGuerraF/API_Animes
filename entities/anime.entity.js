const crypto = require("crypto");

class AnimeEntity {
  constructor(anime) {
    this.id = anime.id ?? crypto.randomUUID();
    this.title = anime.title;
    this.protagonist = anime.protagonist;
    this.gender = anime.gender;
    this.year = anime.year;
  }

  validate() {
    if (!this.title) {
      throw new Error("Titulo precisa ser preenchido");
    }
    if (!this.protagonist) {
      throw new Error("Protagonista precisa ser preenchido");
    }
    if (!this.gender) {
      throw new Error("Gender precisa ser preenchido");
    }
    if (!this.year || this.year < 1960) {
      throw new Error("Ano informado nao é valido");
    }
  }

  getAnime() {
    return {
      id: this.id,
      title: this.title,
      protagonist: this.protagonist,
      gender: this.gender,
      year: this.year,
    };
  }
}

module.exports = AnimeEntity