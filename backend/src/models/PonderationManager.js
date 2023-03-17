const AbstractManager = require("./AbstractManager");

class AntutuManager extends AbstractManager {
  constructor() {
    super({ table: "ponderation" });
  }

  findAllPonderation() {
    return this.connection
      .query(`SELECT CONCAT(ROUND(ponderation_taux * 100), '%') AS taux, id
    FROM ${this.table}`);
  }
}
module.exports = AntutuManager;
