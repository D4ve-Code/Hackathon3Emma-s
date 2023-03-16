const AbstractManager = require("./AbstractManager");

class AntutuManager extends AbstractManager {
  constructor() {
    super({ table: "localisation" });
  }

  findAllLocalisation() {
    return this.connection.query(`SELECT * FROM ${this.table}`);
  }
}
module.exports = AntutuManager;
