const AbstractManager = require("./AbstractManager");

class QrCodeManager extends AbstractManager {
  constructor() {
    super({ table: "phone" });
  }

  findQrCode(id) {
    return this.connection.query(
      `SELECT * FROM ${this.table} where id_emmaus_connect = ?`,
      [id]
    );
  }
}
module.exports = QrCodeManager;
