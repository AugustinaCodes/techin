# Darbas su failais ir katalogais

1. Savo namų kataloge sukurkite katalogą Bandymas.

```
mkdir Bandymas
```

![Answer One](./images/answer1.png)

2. Kataloge Bandymas sukurkite failus: f1.txt, f2.txt, f3.txt, f4.txt, ff1.txt, ff2.txt, ff3.txt, ff4.txt. 

```
touch f1.txt f2.txt f3.txt f4.txt ff1.txt ff2.txt ff3.txt ff4.txt
```

3. Pažiūrėkite katalogo Bandymas turinį. 

![Answer Two, Three](./images/answer2-3.png)

4. Savo namų kataloge sukurkite katalogą Tikslas. 

![Answer Four](./images/answer4.png)

5. Nukopijuokite katalogo Bandymas failus f1.txt, f3.txt, ff2.txt, ff4.txt į katalogą Tikslas. 

```
cp f1.txt f3.txt ff2.txt ff4.txt ~/Tikslas/
```

6. Pažiūrėkite katalogo Tikslas turinį. 

![Answer Six](./images/answer6.png)

7. Katalogo Tikslas failų vardus pakeiskite iš f*.txt į file*.txt. 

```
mv f1.txt file1.txt
mv f3.txt file3.txt
mv ff2.txt filef2.txt
mv ff4.txt filef4.txt
```

![Answer Seven](./images/answer7.png)

8. Perkelkite pervadintus failus į katalogą Bandymas.

```
mv f*.txt ~/Bandymas
```

![Answer Eight](./images/answer8.png)

9.  Nukopijuokite failą passwd iš katalogo /etc į katalogą Bandymas. 

```
cp passwd ~/Bandymas/
```

![Answer Nine](./images/answer9.png)

10. Išveskite failo passwd turinį į ekraną. 

```
cat passwd
```

![Answer Ten](./images/answer10.png)

11.  Suraskite faile passwd žodį root. Rezultatą išveskite į ekraną. 

```
grep root passwd
```

![Answer Eleven](./images/answer11.png)

12.  Suskaičiuokite kiek yra simbolių faile passwd.  

```
wc -m passwd
```

![Answer Twelve](./images/answer12.png)
    
13.  Išveskite į ekraną failo passwd 5 pirmas ir paskutines failo eilutes. 

```
head -n 5 passwd
tail -n 5 passwd
```
    
![Answer Thirteen](./images/answer13.png)

14.  Kataloge Tikslas sukurkite failo passwd simbolinę nuorodą. 

```
ln -s passwd ~/Tikslas
```

15.  Pažiūrėkite katalogo Tikslas turinį. 
   
![Answer Fourteen and Fifteen](./images/answer14-15.png)

16.   Kataloge Bandymas ištrinkite failą passwd. 
    
```
rm passwd
```

![Answer Sixteen](./images/answer16.png)

17.  Pažiūrėkite katalogo Tikslas turinį. 

![Answer Seventeen](./images/answer17.png)    

18.  Nukopijuokite failą fstab iš katalogo /etc į katalogą Tikslas. 

```
cp fstab ~/Tikslas
```

![Answer Eighteen](./images/answer18.png)  

19.  Patikrinkite koks yra failo fstab dydis (baitais). 
    
```
wc -c fstab
```

![Answer Nineteen](./images/answer19.png)  

20.  Kataloge Bandymas sukurkite failą sorting.txt su tokiomis eilutėmis: apples, oranges, pears, kiwis, bananas. 
    
```
nano sorting.txt
```

ctrl + O to save, Enter, ctrl + X to exit

![Answer Twenty](./images/answer20.png) 

21.  Surūšiuokite failo sorting.txt turinį (eilutes) pagal abėcėlę ir rezultatą išveskite į ekraną. 
    
```
sort sorting.txt
```

![Answer Twenty One](./images/answer21.png) 

22.  Raskite, kur Jūsų failų sistemoje yra failas ff2.txt

```
find ~/ -name ff2.txt
```

![Answer Twenty Two](./images/answer22.png) 
