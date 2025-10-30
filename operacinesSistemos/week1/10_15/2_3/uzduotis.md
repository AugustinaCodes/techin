# Darbas su vartotojais ir teisemis

1. Sukurkite naują vartotoją VP, (VP - Jūsų vardo ir pavardės pirmos raidės), turintį namų katalogą, administratoriaus teises ir galintį peržiūrėti vaizdo įrašus, su slaptažodžiu kontrolinis. 

```
sudo useradd -m -g users -G lp,video,audio -s /bin/bash AB
sudo passwd AB
```

![Answer One](./images/answer1.png)

2. Patikrinkite, ar vartotojas VP buvo sukurtas. 

![Answer Two](./images/answer2.png)

or

```
cat /etc/ passwd
```

![Answer Two-One](./images/answer2-1.png)

3. Atimkite iš vartotojo VP teises peržiūrėti vaizdo įrašus. Pažiūrėkite, kokioms grupėms priklauso VP. 

```
sudo gpasswd -d AB video
groups AB
```

![Answer Three](./images/answer3.png)

4. Pridėkite vartotoją VP prie grupės party. 

```
sudo groupadd party
sudo gpasswd -a AB party
```

![Answer Four](./images/answer4.png)

5. Prisijunkite prie sistemos kaip sukurtas vartotojas VP. 

```
su AB
```

![Answer Five](./images/answer5.png)

6. Patikrinkite, kas prisijungęs prie sistemos ir koks vartotojas dabar dirba su terminalo langu. 

```
whoami
```

![Answer Six](./images/answer6.png)

7. Savo namų kataloge sukurkite failus a ir b. Sukurkite katalogus A ir B. 

```
touch a.txt b.txt
mkdir A B
```

![Answer Seven](./images/answer7.png)

8. Perkelkite failą a į katalogą B. Nukopijuokite failą b į katalogą A. 

```
mv a.txt ~/B
cp b.txt ~/A
```

![Answer Eight](./images/answer8.png)

9. Ištrinkite kątik sukurtus katalogus ir failus. 

```
rm -r *
```

![Answer Nine](./images/answer9.png)

10. Nukopijuokite failus /etc/timezone ir /etc/sudoers su jų originaliomis teisėmis ir savininkais į savo namų katalogą. 



Vartotojo student namų kataloge sukurkite katalogą foreign. Pakeiskite jo šeimininką ir grupę į student. 

Pakeiskite sukurto katalogo foreign teises taip, kad visi sistemoje galėtų į jį įeiti, tačiau niekas negalėtų įrašyti. 

Savo namų kataloge sukurkite katalogo foreign nuorodą. 

Savo namų kataloge (ir jame esančiuose kataloguose) suraskite visus failus, nurodykite jų failų tipus ir sunumeruotą tokį sąrašą išsaugokite faile types.txt. Būsimas klaidas ignoruokite. (find, xargs, file) 

Sukurkite naują vartotoją “temp-vartotojas” tik su administratoriaus teisėmis (be namų katalogo). 

Prisijunkite prie sistemos kaip sukurtas vartotojas. 

Paredaguokite save taip, kad galėtumėte prisijungti prie grafinės aplinkos (usermod mkhomedir_helper). 

Prisijunkite grafinėje aplinkoje. 