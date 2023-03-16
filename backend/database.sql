-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: localhost    Database: emmaus
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `antutu`
--

DROP TABLE IF EXISTS `antutu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `antutu` (
  `id` int NOT NULL AUTO_INCREMENT,
  `ant_min` float NOT NULL,
  `ant_max` float NOT NULL,
  `ant_valeur` float NOT NULL,
  `intervalle` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `antutu`
--

LOCK TABLES `antutu` WRITE;
/*!40000 ALTER TABLE `antutu` DISABLE KEYS */;
INSERT INTO `antutu` VALUES (1,0,49999,40,'entre 0 et 49999'),(2,50000,99999,44,'entre 50000 et 99999'),(3,100000,149999,49,'entre 100000 et 149999'),(4,150000,199999,53,'entre 150000 et 199999'),(5,200000,249999,57,'entre 200000 et 249999'),(6,250000,299999,61,'entre 250000 et 299999'),(7,300000,349999,65,'entre 300000 et 349999'),(8,350000,399999,69,'entre 350000 et 399999'),(9,400000,449999,73,'entre 400000 et 449999'),(10,450000,499999,77,'entre 450000 et 499999'),(11,500000,549999,81,'entre 500000 et 549999'),(12,550000,599999,85,'entre 550000 et 599999'),(13,600000,599999,89,'entre 600000 et 599999'),(14,650000,649999,93,'entre 650000 et 649999'),(15,700000,699999,97,'entre 700000 et 699999'),(16,750000,749999,101,'entre 750000 et 749999'),(17,800000,799999,105,'entre 800000 et 799999'),(18,850000,849999,109,'entre 850000 et 849999'),(19,900000,899999,113,'entre 900000 et 899999'),(20,950000,949999,117,'entre 950000 et 949999');
/*!40000 ALTER TABLE `antutu` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categorie`
--

DROP TABLE IF EXISTS `categorie`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categorie` (
  `id` int NOT NULL AUTO_INCREMENT,
  `val_total_min` float NOT NULL,
  `val_total_max` float NOT NULL,
  `categorie_name` varchar(250) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categorie`
--

LOCK TABLES `categorie` WRITE;
/*!40000 ALTER TABLE `categorie` DISABLE KEYS */;
INSERT INTO `categorie` VALUES (5,0,89,'1 - HC'),(6,90,164,'2 - C'),(7,165,254,'3 - B'),(8,255,374,'4 - A'),(9,375,1000,'5 - Premium');
/*!40000 ALTER TABLE `categorie` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `configmini`
--

DROP TABLE IF EXISTS `configmini`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `configmini` (
  `id` int NOT NULL AUTO_INCREMENT,
  `os` varchar(250) DEFAULT NULL,
  `ram` varchar(250) DEFAULT NULL,
  `memoire` varchar(250) DEFAULT NULL,
  `ecran` varchar(250) DEFAULT NULL,
  `reseau` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `configmini`
--

LOCK TABLES `configmini` WRITE;
/*!40000 ALTER TABLE `configmini` DISABLE KEYS */;
INSERT INTO `configmini` VALUES (1,'8','2','16','4\'\'','4G');
/*!40000 ALTER TABLE `configmini` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `etat`
--

DROP TABLE IF EXISTS `etat`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `etat` (
  `id` int NOT NULL AUTO_INCREMENT,
  `statut` varchar(250) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `etat`
--

LOCK TABLES `etat` WRITE;
/*!40000 ALTER TABLE `etat` DISABLE KEYS */;
INSERT INTO `etat` VALUES (1,'DEEE'),(2,'Réparable'),(3,'Bloqué'),(4,'Reconditionnable'),(5,'Reconditionné');
/*!40000 ALTER TABLE `etat` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `localisation`
--

DROP TABLE IF EXISTS `localisation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `localisation` (
  `id` int NOT NULL AUTO_INCREMENT,
  `ville` varchar(250) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `localisation`
--

LOCK TABLES `localisation` WRITE;
/*!40000 ALTER TABLE `localisation` DISABLE KEYS */;
INSERT INTO `localisation` VALUES (1,'Paris centre'),(2,'Saint Denis'),(3,'Paris nord'),(4,'Paris sud'),(5,'Roubaix'),(6,'Lille'),(7,'Strasbourg'),(8,'Lyon'),(9,'Grenoble'),(10,'Bordeaux'),(11,'Marseille');
/*!40000 ALTER TABLE `localisation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `phone`
--

DROP TABLE IF EXISTS `phone`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `phone` (
  `id` int NOT NULL AUTO_INCREMENT,
  `constructeur` varchar(250) NOT NULL,
  `modele` varchar(250) NOT NULL,
  `ponderation_commentaire` varchar(250) DEFAULT NULL,
  `indice` float DEFAULT NULL,
  `donateur` varchar(250) DEFAULT NULL,
  `id_emmaus_connect` varchar(250) NOT NULL,
  `info_batterie` varchar(250) DEFAULT NULL,
  `numero_imei` varchar(250) NOT NULL,
  `processeur` varchar(250) DEFAULT NULL,
  `sys_exploitation` varchar(250) DEFAULT NULL,
  `taille_ecran` varchar(250) DEFAULT NULL,
  `resolution` varchar(250) DEFAULT NULL,
  `chargeur` tinyint DEFAULT NULL,
  `operateur` varchar(250) DEFAULT NULL,
  `couleur` varchar(250) DEFAULT NULL,
  `localisation_id` int NOT NULL,
  `RAM_id` int NOT NULL,
  `Stockage_id` int NOT NULL,
  `Antutu_id` int NOT NULL,
  `ponderation_id` int NOT NULL,
  `categorie_id` int NOT NULL,
  `etat_id` int NOT NULL,
  PRIMARY KEY (`id`,`localisation_id`,`RAM_id`,`Stockage_id`,`Antutu_id`,`ponderation_id`,`categorie_id`,`etat_id`),
  KEY `fk_phone_localisation_idx` (`localisation_id`),
  KEY `fk_phone_RAM1_idx` (`RAM_id`),
  KEY `fk_phone_Stockage1_idx` (`Stockage_id`),
  KEY `fk_phone_Antutu1_idx` (`Antutu_id`),
  KEY `fk_phone_ponderation1_idx` (`ponderation_id`),
  KEY `fk_phone_categorie1_idx` (`categorie_id`),
  KEY `fk_phone_etat1_idx` (`etat_id`),
  CONSTRAINT `fk_phone_Antutu1` FOREIGN KEY (`Antutu_id`) REFERENCES `antutu` (`id`),
  CONSTRAINT `fk_phone_etat1` FOREIGN KEY (`etat_id`) REFERENCES `etat` (`id`),
  CONSTRAINT `fk_phone_localisation` FOREIGN KEY (`localisation_id`) REFERENCES `localisation` (`id`),
  CONSTRAINT `fk_phone_ponderation1` FOREIGN KEY (`ponderation_id`) REFERENCES `ponderation` (`id`),
  CONSTRAINT `fk_phone_RAM1` FOREIGN KEY (`RAM_id`) REFERENCES `ram` (`id`),
  CONSTRAINT `fk_phone_Stockage1` FOREIGN KEY (`Stockage_id`) REFERENCES `stockage` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `phone`
--

LOCK TABLES `phone` WRITE;
/*!40000 ALTER TABLE `phone` DISABLE KEYS */;
INSERT INTO `phone` VALUES (1,'SAMSUNG','Galaxy A70','text',64.5,'moi','111','text','111','1','android','4','17',1,'unlock','blanc',1,2,13,2,2,5,5),(4,'APPLE','Iphone 8','11',246.05,'moi','112','text','555','text','IOS','4','18mp',0,'unlocked','silver',4,3,11,4,4,9,4),(5,'APPLE','Iphone 8','11',255,'moi','114','text','555','text','IOS','4','18mp',0,'unlocked','silver',4,3,11,3,5,8,4),(6,'APPLE','Iphone 8','11',236.7,'moi','115','text','555','text','IOS','4','18mp',0,'unlocked','silver',4,3,11,5,3,7,4),(7,'APPLE','Iphone 8','11',127.5,'moi','116','text','555','text','IOS','4','18mp',0,'unlocked','silver',4,3,11,3,2,6,4),(8,'APPLE','Iphone 8','11',249.85,'moi','116','text','555','text','IOS','4','18mp',0,'unlocked','silver',4,3,11,5,4,7,4),(9,'APPLE','Iphone 8','11',249.85,'moi','116','text','555','text','IOS','4','18mp',0,'unlocked','silver',4,3,11,5,4,7,4);
/*!40000 ALTER TABLE `phone` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ponderation`
--

DROP TABLE IF EXISTS `ponderation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ponderation` (
  `id` int NOT NULL AUTO_INCREMENT,
  `ponderation_taux` float NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ponderation`
--

LOCK TABLES `ponderation` WRITE;
/*!40000 ALTER TABLE `ponderation` DISABLE KEYS */;
INSERT INTO `ponderation` VALUES (1,-1),(2,-0.5),(3,-0.1),(4,-0.05),(5,0),(6,0.05),(7,0.1);
/*!40000 ALTER TABLE `ponderation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ram`
--

DROP TABLE IF EXISTS `ram`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ram` (
  `id` int NOT NULL AUTO_INCREMENT,
  `ram_nb` int NOT NULL,
  `ram_valeur` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ram`
--

LOCK TABLES `ram` WRITE;
/*!40000 ALTER TABLE `ram` DISABLE KEYS */;
INSERT INTO `ram` VALUES (1,1,30),(2,2,40),(3,3,54),(4,4,0),(5,6,0),(6,8,0),(7,12,0),(8,16,0);
/*!40000 ALTER TABLE `ram` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stockage`
--

DROP TABLE IF EXISTS `stockage`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `stockage` (
  `id` int NOT NULL AUTO_INCREMENT,
  `stockage_nb` int DEFAULT NULL,
  `stockage_valeur` float DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stockage`
--

LOCK TABLES `stockage` WRITE;
/*!40000 ALTER TABLE `stockage` DISABLE KEYS */;
INSERT INTO `stockage` VALUES (7,16,31),(8,64,66),(9,128,75),(10,256,95),(11,512,152),(12,1000,210),(13,32,45);
/*!40000 ALTER TABLE `stockage` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-03-16 15:34:19
