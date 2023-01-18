const crypto = require("crypto");

class CharacterEntity {
  constructor(character) {
    this.id = character.id ?? crypto.randomUUID();
    this.name = character.name;
    this.skill = character.skill;
    this.age = character.age;
    this.gender = character.gender;
  }

  validate() {
    if (!this.name) {
      throw new Error("Nome precisa ser preenchido");
    }
    if (!this.skill) {
      throw new Error("Skill precisa ser preenchido");
    }
    if (!this.age) {
      throw new Error("Idade precisa ser preenchido");
    }
    if (!this.gender) {
      throw new Error("Genero precisa ser preenchido");
    }
  }

  getCharacter() {
    return {
      id: this.id,
      name: this.name,
      skill: this.skill,
      age: this.age,
      gender: this.gender,
    };
  }
}

module.exports = CharacterEntity;
