const AbstractManager = require("./AbstractManager");

class PhoneManager extends AbstractManager {
  constructor() {
    super({ table: "phone" });
  }

  findAllPhones() {
    return this.connection
      .query(`SELECT photo_tel, id_emmaus_connect, constructeur, modele, et.statut, ram.ram_nb, st.stockage_nb, CONCAT('entre ', ant_min, ' et ', ant_max) AS antutu, pond.ponderation_taux, loc.ville, cat.categorie_name
    FROM ${this.table} 
    INNER JOIN etat AS et ON et.id=phone.etat_id
    INNER JOIN ram ON ram.id=phone.ram_id
    INNER JOIN stockage AS st ON st.id=phone.stockage_id
    INNER JOIN antutu AS ant ON ant.id=phone.Antutu_id
    INNER JOIN ponderation AS pond ON pond.id=phone.ponderation_id
    INNER JOIN localisation AS loc ON loc.id=phone.localisation_id
    INNER JOIN categorie AS cat ON cat.id=phone.categorie_id;`);
  }

  insert(phone) {
    return this.connection.query(
      `insert into ${this.table} (title) values (?)`,
      [phone.title]
    );
  }

  update(phone) {
    return this.connection.query(
      `update ${this.table} set title = ? where id = ?`,
      [phone.title, phone.id]
    );
  }
}

module.exports = PhoneManager;
