const AbstractManager = require("./AbstractManager");

class PhoneManager extends AbstractManager {
  constructor() {
    super({ table: "phone" });
  }
  findOnePoulet(id) {
    const sql = `SELECT id_emmaus_connect, constructeur, modele, et.statut, ram.ram_nb, st.stockage_nb, ant.intervalle AS antutu, pond.ponderation_taux, loc.ville, cat.categorie_name
    FROM ${this.table} 
    INNER JOIN etat AS et ON et.id=phone.etat_id
    INNER JOIN ram ON ram.id=phone.ram_id
    INNER JOIN stockage AS st ON st.id=phone.stockage_id
    INNER JOIN antutu AS ant ON ant.id=phone.Antutu_id
    INNER JOIN ponderation AS pond ON pond.id=phone.ponderation_id
    INNER JOIN localisation AS loc ON loc.id=phone.localisation_id
    INNER JOIN categorie AS cat ON cat.id=phone.categorie_id 
    where id_emmaus_connect = ?`;
    return this.connection.query(sql, [id]);
  }
  findAllPhones() {
    return this.connection
      .query(`SELECT id_emmaus_connect, constructeur, modele, et.statut, ram.ram_nb, st.stockage_nb, ant.intervalle AS antutu, pond.ponderation_taux, loc.ville, cat.categorie_name
    FROM ${this.table} 
    INNER JOIN etat AS et ON et.id=phone.etat_id
    INNER JOIN ram ON ram.id=phone.ram_id
    INNER JOIN stockage AS st ON st.id=phone.stockage_id
    INNER JOIN antutu AS ant ON ant.id=phone.Antutu_id
    INNER JOIN ponderation AS pond ON pond.id=phone.ponderation_id
    INNER JOIN localisation AS loc ON loc.id=phone.localisation_id
    INNER JOIN categorie AS cat ON cat.id=phone.categorie_id;`);
  }

  findAllExport() {
    return this.connection
      .query(`SELECT loc.ville, donateur, id_emmaus_connect, cat.categorie_name, info_batterie, constructeur, modele, numero_imei, et.statut, ram.ram_nb, st.stockage_nb, ant.intervalle AS antutu, pond.ponderation_taux, cat.categorie_name
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
      `INSERT INTO ${this.table} (constructeur, modele,ponderation_commentaire, donateur, id_emmaus_connect, info_batterie, numero_imei, processeur, sys_exploitation, taille_ecran, resolution, chargeur, operateur, couleur, localisation_id, RAM_id, Stockage_id, Antutu_id, ponderation_id, etat_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        phone.constructeur,
        phone.modele,
        phone.ponderation_commentaire,
        phone.donateur,
        phone.id_emmaus_connect,
        phone.info_batterie,
        phone.numero_imei,
        phone.processeur,
        phone.sys_exploitation,
        phone.taille_ecran,
        phone.resolution,
        phone.chargeur,
        phone.operateur,
        phone.couleur,
        phone.localisation_id,
        phone.RAM_id,
        phone.Stockage_id,
        phone.Antutu_id,
        phone.ponderation_id,
        phone.etat_id,
      ]
    );
  }

  update(phone) {
    console.log("j'aime le poulet");
    return this.connection.query(
      `UPDATE ${this.table} SET constructeur = ?, modele = ?, ponderation_commentaire = ?, donateur = ?, id_emmaus_connect = ?, info_batterie = ?, numero_imei = ?, processeur = ?, sys_exploitation = ?, taille_ecran = ?, resolution = ?, chargeur = ?, operateur = ?, couleur = ?, localisation_id = ?, RAM_id = ?, Stockage_id = ?, Antutu_id = ?, ponderation_id = ?, etat_id = ?  WHERE id = ?`,
      [
        phone.constructeur,
        phone.modele,
        phone.ponderation_commentaire,
        phone.donateur,
        phone.id_emmaus_connect,
        phone.info_batterie,
        phone.numero_imei,
        phone.processeur,
        phone.sys_exploitation,
        phone.taille_ecran,
        phone.resolution,
        phone.chargeur,
        phone.operateur,
        phone.couleur,
        phone.localisation_id,
        phone.RAM_id,
        phone.Stockage_id,
        phone.Antutu_id,
        phone.ponderation_id,
        phone.etat_id,
        phone.id,
      ]
    );
  }

  modifyPoulet(phone) {
    console.log("j'aime le poulet");
    return this.connection.query(
      `UPDATE ${this.table} SET constructeur = ?, modele = ? WHERE id_emmaus_connect = ?`,
      [phone.constructeur, phone.modele, phone.id_emmaus_connect]
    );
  }
}
module.exports = PhoneManager;
