# Darbas su failų/katalogų prieigos teisėmis

1. Savo namų kataloge sukurkite katalogą Teises. 

```
mkdir Teises
```

![Answer One](./images/answer1.png)

2. Kataloge Teises sukurkite failus: right1.txt, right2.txt, right3.txt. 

```
touch right1.txt right2.txt right3.txt
```

or

```
touch right{1..3}.txt
```

![Answer Two](./images/answer2.png)

3. Pažiūrėkite katalogo Teises ir sukurtų failų prieigos teises. 

```
ls -la
```

![Answer Three](./images/answer3.png)
![Answer Three-One](./images/answer3-1.png)

4. Pakeiskite katalogo Teises grupę į root grupę. 

```
sudo chown student:root ~/Teises
```

5. Pažiūrėkite katalogo Teises ir sukurtų failų prieigos teises. 

![Answer Five](./images/answer5.png)
![Answer Five-One](./images/answer5-1.png)

6. Sukurkite namų kataloge naują katalogą TeisesCP. 

```
mkdir TeisesCP
```

![Answer Six](./images/answer6.png)

7. Nukopijuokite iš katalogo Teises failą right2.txt į katalogą TeisesCP. 

```
cp right2.txt ~/TeisesCP
```

8. Pažiūrėkite nukopijuoto failo prieigos teises. 

![Answer Eight](./images/answer8.png)

9.  Pakeiskite failo TeisesCP/right2.txt prieigos teises į 644. 

```
chmod 644 right2.txt
```

10. Pažiūrėkite failo TeisesCP/right2.txt prieigos teises. 

![Answer Ten](./images/answer10.png)

11.  Pakeiskite failo TeisesCP/right2.txt šeimininką į root. 

```
sudo chown root right2.txt
```

![Answer Eleven](./images/answer11.png)

or to change owner and group:

```
sudo chown root:root right2.txt
```

12.  Ištrinkite (kaip paprastas vartotojas) failą TeisesCP/right2.txt.

```
rm right2.txt
```

![Answer Twelve](./images/answer12.png)