-- 1. Išrinkite visus duomenis iš lentelės PREKĖS kurių tiekėjas yra 'MELE'. 
SELECT * FROM parduotuve.prekes WHERE tiekejas='MELE';

-- 2. Išrinkite visus prekių pavadinimus kurių pavadinime būtų ketvirta raidė 'S'. 
SELECT Pavadinimas FROM parduotuve.prekes WHERE Pavadinimas LIKE '%S___';

-- 3. Išrinkite iš lentelės PREKES mažiausią kainą, bei ją padauginkite iš 10. 
SELECT MIN(Kaina * 10) AS maziausia_kaina FROM parduotuve.prekes;

-- 4. Išrinkite darbuotojų dirbančių Kauno Minimoje ir Vilniaus Maximoje asmens kodus ir jų atlyginimus (panaudokite operatorių IN) 
-- Sitas nelabai aiskus buvo, bet padariau taip:
SELECT d.Parduotuves_id, d.Asmens_kodas, d.Atlyginimas
FROM darbuotojai d
JOIN parduotuves p
ON d.Parduotuves_id = p.ID
WHERE (p.Miestas = 'KAUNAS' AND p.Pavadinimas = 'MINIMA') OR (p.Miestas = 'VILNIUS' AND p.Pavadinimas = 'MAXIMA');

-- 5. Išrinkite parduotuvių pavadinimus taip, kad jie nesikartotų. 
SELECT DISTINCT Pavadinimas FROM parduotuve.parduotuves;

-- 6. Išrinkite visus duomenis apie prekes, kurios kainuoja 400 arba 500. 
SELECT * FROM parduotuve.prekes WHERE Kaina=400 OR Kaina=500;

-- 7. Išrinkite visus duomenis iš lentelės DARBUOTOJAI ir išrikiuokite juos taip, kad jų atlyginimas būtų nuo mažiausio iki didžiausio. 
SELECT * FROM parduotuve.darbuotojai ORDER BY Atlyginimas ASC;

-- 8. Išveskite parduotuvės pavadinimą, miestą kuriame yra parduotuvė ir parduotuvės darbuotojų skaičių. 
SELECT p.Pavadinimas, p.Miestas, COUNT(d.Asmens_kodas) AS darbuotoju_skaicius
FROM parduotuves p
JOIN darbuotojai d
ON p.ID = d.Parduotuves_id
GROUP BY p.Pavadinimas, p.Miestas;

-- 9. #8 užklausą pataisykite taip, kad rodytų tik tų parduotuvių pavadinimus kurios įsikūrusios Vilniuje ir jose dirba mažiau nei 2 darbuotojai. 
SELECT p.Pavadinimas, p.Miestas, COUNT(d.Asmens_kodas) AS darbuotoju_skaicius
FROM parduotuves p
JOIN darbuotojai d
ON p.ID = d.Parduotuves_id
GROUP BY p.Pavadinimas, p.Miestas;
HAVING COUNT(d.Asmens_kodas) < 2;

-- 10. Išrinkite duomenis: parduotuvės pavadinimą, miestą kuriame įsikūrusi parduotuvė ir apskaičiuokite kiek kiekviena parduotuvė turi prekių. 
SELECT p.Pavadinimas, p.Miestas, COUNT(m.Parduotuves_id) AS prekiu_skaicius
FROM parduotuves p
JOIN parduotuves_prekes m
ON p.ID = m.Parduotuves_id
GROUP BY p.Pavadinimas, p.Miestas;

-- 11. Išrinkite darbuotojų vardus, pavardes ir parduotuvių pavadinimus, bei miestus kuriuose jie dirba. 
SELECT d.Vardas, d.Pavarde, p.Pavadinimas, p.Miestas
FROM darbuotojai d
JOIN parduotuves p
ON d.Parduotuves_id = p.ID
GROUP BY d.Vardas, d.Pavarde, p.Pavadinimas, p.Miestas;

-- 12. #11 Užklausą pataisykite taip kad išvestų ir tų darbuotojų vardus kurie yra nepriskirti jokiai parduotuvei. 
SELECT d.Vardas, d.Pavarde, p.Pavadinimas, p.Miestas
FROM darbuotojai d
LEFT JOIN parduotuves p
ON d.Parduotuves_id = p.ID
GROUP BY d.Vardas, d.Pavarde, p.Pavadinimas, p.Miestas


-- 13. Įterpkite į lentelę darbuotojai naują įrašą užpildydami visus laukus, bei priskirkite darbuotoją dirbti Vilniaus Maximoje. 
INSERT INTO darbuotojai (Asmens_kodas, Vardas, Pavarde, Dirba_nuo, Atlyginimas, Parduotuves_id)
VALUES ('48798095567', 'AUSTEJA', 'TAGIL', '2015-12-01', 1000.00, 3);

-- 14. Atnaujinkite duomenis lentelėje darbuotojai, priskirkite darbuotoją kurios asmens kodas '49005203214' dirbti Vilniaus Maximoje. 
UPDATE darbuotojai
SET Parduotuves_id = 3
WHERE Asmens_kodas = '49005203214';

-- 15. Ištrinkite iš lentelės skaitytojas įrašą kurį sukūrėte #13 užklausoje. 
DELETE FROM darbuotojai WHERE Asmens_kodas='48798095567';