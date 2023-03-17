const AbstractManager = require("./AbstractManager");

class AntutuManager extends AbstractManager {
  constructor() {
    super({ table: "antutu" });
  }

  findAllAntutu() {
    return this.connection.query(`SELECT intervalle, id FROM ${this.table}`);
  }
}
module.exports = AntutuManager;
