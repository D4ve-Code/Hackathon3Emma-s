const AbstractManager = require("./AbstractManager");

class AntutuManager extends AbstractManager {
  constructor() {
    super({ table: "etat" });
  }

  findAllEtat() {
    return this.connection.query(`SELECT * FROM ${this.table}`);
  }
}
module.exports = AntutuManager;
