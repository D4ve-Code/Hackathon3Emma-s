const AbstractManager = require("./AbstractManager");

class CategoryManager extends AbstractManager {
  constructor() {
    super({ table: "categorie" });
  }

  findAllCategories() {
    return this.connection.query(`SELECT * FROM ${this.table}`);
  }
}
module.exports = CategoryManager;
