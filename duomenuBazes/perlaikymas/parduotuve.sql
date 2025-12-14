DROP DATABASE IF EXISTS parduotuve;
CREATE DATABASE parduotuve;
USE parduotuve;

CREATE TABLE `darbuotojai` (
  `Asmens_kodas` bigint(20) NOT NULL,
  `Vardas` varchar(20) NOT NULL,
  `Pavarde` varchar(20) NOT NULL,
  `Dirba_nuo` date NOT NULL,
  `Atlyginimas` decimal(7,2) NOT NULL,
  `Parduotuves_id` int(11) DEFAULT NULL
);

INSERT INTO `darbuotojai` (`Asmens_kodas`, `Vardas`, `Pavarde`, `Dirba_nuo`, `Atlyginimas`, `Parduotuves_id`) VALUES
(38705203214, 'ALGIS', 'GRIGAS', '2012-10-10', '600.00', 1),
(39705203214, 'ANTANAS', 'PALIONIS', '2013-12-10', '500.00', 2),
(38905212217, 'KAROLIS', 'KARALIUS', '2015-10-10', '1100.00', 3),
(37805203245, 'GRIGAS', 'GRIGAITIS', '2012-10-10', '600.00', 4),
(47005203214, 'MARINA', 'GARINA', '2013-10-10', '300.00', 2),
(46605203214, 'VIKTORIJA', 'PETKEVIC', '1999-10-10', '800.00', 1),
(49005203214, 'KOTRYNA', 'ZINKE', '2001-10-10', '650.00', NULL),
(48905203214, 'KAROLINA', 'BUNKE', '1999-10-10', '800.00', NULL);


CREATE TABLE `parduotuves` (
  `ID` int(11) NOT NULL,
  `Pavadinimas` varchar(20) NOT NULL,
  `Miestas` varchar(20) NOT NULL,
  `Adresas` varchar(30) NOT NULL,
  `Telefonas` bigint(20) NOT NULL
);

INSERT INTO `parduotuves` (`ID`, `Pavadinimas`, `Miestas`, `Adresas`, `Telefonas`) VALUES
(1, 'MINIMA', 'VILNIUS', 'ULONU 2', 865412369),
(2, 'MEDIA', 'VILNIUS', 'BALIUKO 3', 865412369),
(3, 'MAXIMA', 'VILNIUS', 'SENAMIESCIO 6', 865412369),
(4, 'MINIMA', 'KAUNAS', 'ALGIRDO 5', 865412369),
(5, 'MEDIA', 'KAUNAS', 'MYKOLO 6', 865412369),
(6, 'MAXIMA', 'KAUNAS', 'KAUNO 7', 865412369);

CREATE TABLE `parduotuves_prekes` (
  `Parduotuves_id` int(11) NOT NULL,
  `Prekes_id` int(11) NOT NULL
);

INSERT INTO `parduotuves_prekes` (`Parduotuves_id`, `Prekes_id`) VALUES
(1, 1),
(1, 4),
(1, 7),
(2, 2),
(3, 3),
(4, 5),
(5, 6),
(5, 8),
(5, 9);


CREATE TABLE `prekes` (
  `ID` int(11) NOT NULL,
  `Pavadinimas` varchar(30) NOT NULL,
  `Tiekejas` varchar(30) NOT NULL,
  `Kaina` decimal(8,2) NOT NULL
) ;

INSERT INTO `prekes` (`ID`, `Pavadinimas`, `Tiekejas`, `Kaina`) VALUES
(1, 'VIRYKLE', 'SAMSUNG', '500.00'),
(3, 'VIRYKLE', 'VIRPUL', '400.00'),
(2, 'VIRYKLE', 'MELE', '600.00'),
(4, 'SKALBIMO MASINA', 'SAMSUNG', '800.00'),
(5, 'SKALBIMO MASINA', 'MELE', '900.00'),
(6, 'SKALBIMO MASINA', 'VIRPUL', '600.00'),
(7, 'TELEVIZORIUS', 'SAMSUNG', '300.00'),
(8, 'TELEVIZORIUS', 'MELE', '250.00'),
(9, 'TELEVIZORIUS', 'VIRPUL', '150.00');
