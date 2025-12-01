-- Užklausos atliekamos vienu sakiniu. Užklausos turi veikti nepriklausomai nuo ieškomų duomenų formato (didžiosios/mažosios).

-- 1. Išrinkite visus duomenis iš lentelės “VARTOTOJAI”.
SELECT * FROM banku_sistema.vartotojai;

-- 2. Išveskite, kiek iš viso veikėjų yra lentelėje “VARTOTOJAI”.
SELECT COUNT(*) FROM vartotojai;

-- 3. Išrinkite duomenis (vardas, pavardė, adresas) apie visas vartotojas moteris.
SELECT vardas, pavarde, adresas FROM vartotojai WHERE vardas='Petra' OR vardas='Julija';

-- 4. Išrinkite duomenis (pavadinimas, būstinės adresas) apie bankus, kurių ID yra 1 arba 3 arba 4.
SELECT pavadinimas, bustines_adresas FROM bankai WHERE id=1 OR id=3 OR id=4;

-- 5. Išrinkite visus bankus (ID, pavadinimas, būstinės adresas), kurių ID yra nuo 2 iki 4.
SELECT id, pavadinimas, bustines_adresas FROM bankai WHERE id BETWEEN 2 AND 4;

-- 6. Išrinkite visus duomenis apie vartotojus, kurių pavardėje trečia nuo priekio raidė yra “n”.
-- Couldn't fully figure this out
SELECT * FROM vartotojai WHERE pavarde LIKE '__%n%';

-- 7. Išrinkite visus duomenis apie vartotojus ir išrikiuokite juos pagal asmens kodą nuo didžiausio iki mažiausio.
SELECT * FROM vartotojai ORDER BY asmens_kodas DESC;

-- 8. Išrinkite iš lentelės “SASKAITOS” mažiausią ir didžiausią balansus.
SELECT MIN(balansas) AS lowest_balance, MAX(balansas) AS highest_balance FROM saskaitos;

-- 9. Išrinkite duomenis (vardas, pavardė, kiekis), kiek iš viso sąskaitų turi kiekvienas vartotojas.
SELECT v.vardas, v.pavarde, COUNT(s.vartotojo_ak) AS kiekis 
FROM vartotojai v 
LEFT JOIN saskaitos s ON v.asmens_kodas = s.vartotojo_ak 
GROUP BY v.asmens_kodas, v.vardas, v.pavarde;

-- 10. #9 užklausą pataisykite taip, kad rodytų tik tuos vartotojus, kurie turi daugiau nei 2 sąskaitas.
SELECT v.vardas, v.pavarde, COUNT(s.vartotojo_ak) AS kiekis 
FROM vartotojai v 
LEFT JOIN saskaitos s ON v.asmens_kodas = s.vartotojo_ak 
GROUP BY v.asmens_kodas, v.vardas, v.pavarde
HAVING COUNT(s.vartotojo_ak) > 2;

-- 11. Išrinkite duomenis (pavadinimas, ID, adresas), kiek kiekvienam bankui yra priskirta vartotojų.
SELECT b.pavadinimas, b.id, b.bustines_adresas, COUNT(s.banko_id) AS vartotojai
FROM bankai b
LEFT JOIN saskaitos s ON b.id = s.banko_id
GROUP BY b.id, b.pavadinimas

-- 12. Išveskite duomenis (vardas, pavardė, asmens_kodas) apie tuos vartotojus: kurių visų sąskaitų bendra suma (balansas) yra mažesnė nei 500,
-- arba kurie iš viso neturi nė vienos sąskaitos jokioje sąskaitų lentelėje.


-- 13. Įterpkite į lentelę “SASKAITOS” naują įrašą, užpildydami visus laukus bei priskirdami jam “Swedbank” banko ID (panaudodami subužklausą).
INSERT INTO saskaitos (saskaitos_nr, banko_id, vartotojo_ak, balansas)
VALUES (12, 2, 46521025687, '300.00');

-- 14. Atnaujinkite sąskaitos duomenis apie vartotoją, kurio asmens kodas yra 35681258402, priskirdami jam “Vilniaus bankas” banko ID.
UPDATE saskaitos
SET banko_id = 4
WHERE vartotojo_ak = 35681258402;

-- 15. Ištrinkite iš lentelės “SASKAITOS” įrašą, kurį sukūrėte #13 užklausoje.
DELETE FROM saskaitos WHERE saskaitos_nr = 12;
