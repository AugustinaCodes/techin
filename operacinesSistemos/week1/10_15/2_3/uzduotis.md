# Darbas su vartotojais ir teisemis

1. Sukurkite naują vartotoją VP, (VP - Jūsų vardo ir pavardės pirmos raidės), turintį namų katalogą, administratoriaus teises ir galintį peržiūrėti vaizdo įrašus, su slaptažodžiu kontrolinis. 

```bash
sudo useradd -m -g users -G sudo,video -s /bin/bash AB
sudo passwd AB
```

![Answer One](./images/answer1.png)

2. Patikrinkite, ar vartotojas VP buvo sukurtas. 

```bash
cat /etc/passwd
```

![Answer Two](./images/answer2.png)

3. Atimkite iš vartotojo VP teises peržiūrėti vaizdo įrašus. Pažiūrėkite, kokioms grupėms priklauso VP. 

```bash
sudo gpasswd -d AB video
groups AB
```

![Answer Three](./images/answer3.png)

4. Pridėkite vartotoją VP prie grupės party. 

```bash
sudo groupadd party
sudo gpasswd -a AB party
```

![Answer Four](./images/answer4.png)

5. Prisijunkite prie sistemos kaip sukurtas vartotojas VP. 

```bash
su AB
```

![Answer Five](./images/answer5.png)

6. Patikrinkite, kas prisijungęs prie sistemos ir koks vartotojas dabar dirba su terminalo langu. 

```bash
who
whoami
```

![Answer Six](./images/answer6.png)

7. Savo namų kataloge sukurkite failus a ir b. Sukurkite katalogus A ir B. 

```bash
touch a b
mkdir A B
```

![Answer Seven](./images/answer7.png)

8. Perkelkite failą a į katalogą B. Nukopijuokite failą b į katalogą A. 

```bash
mv a.txt ~/B
cp b.txt ~/A
```

![Answer Eight](./images/answer8.png)

9. Ištrinkite kątik sukurtus katalogus ir failus. 

```bash
rm -r *
```

![Answer Nine](./images/answer9.png)

10. Nukopijuokite failus /etc/timezone ir /etc/sudoers su jų originaliomis teisėmis ir savininkais į savo namų katalogą. 

```bash
sudo cp --preserve=mode,ownership /etc/timezone /home/AB/
sudo cp --preserve=mode,ownership /etc/sudoers /home/AB/
```

![Answer Ten](./images/answer10.png)

11. Vartotojo student namų kataloge sukurkite katalogą foreign. Pakeiskite jo šeimininką ir grupę į student. 

```bash
sudo mkdir /home/student/foreign
sudo chown student:student /home/student/foreign
```

12. Pakeiskite sukurto katalogo foreign teises taip, kad visi sistemoje galėtų į jį įeiti, tačiau niekas negalėtų įrašyti. 

```bash
sudo chmod a+rx /home/student/foreign
sudo chmod a-w /home/student/foreign
# or 
sudo chmod 555 /home/student/foreign
```

before:

![Answer Twelve-One](./images/answer12_1.png)

after:

![Answer Twelve-Two](./images/answer12_2.png)

13. Savo namų kataloge sukurkite katalogo foreign nuorodą. 

```bash
ln -s /home/student/foreign ~/foreign
# to check:
ls -l ~
```

![Answer Thirteen](./images/answer13.png)

14. Savo namų kataloge (ir jame esančiuose kataloguose) suraskite visus failus, nurodykite jų failų tipus ir sunumeruotą tokį sąrašą išsaugokite faile types.txt. Būsimas klaidas ignoruokite. (find, xargs, file) 

```bash
find ~ -type f 2>/dev/null | xargs file | nl > ~/types.txt
# find [kelias] [salygos]
# 2>/dev/null - paslepia klaidas
# | xargs file - perduoda visus rastus failus file komandai
# | nl - sunumeruoja eiles
# > ~/types.txt - issaugo rezultata types.txt faile
```

![Answer Fourteen](./images/answer14.png)

15. Sukurkite naują vartotoją “temp-vartotojas” tik su administratoriaus teisėmis (be namų katalogo). 

```bash
sudo useradd -g users -G sudo -s /bin/bash temp-vartotojas
```

![Answer Fifteen](./images/answer15.png)

16. Prisijunkite prie sistemos kaip sukurtas vartotojas.

![Answer Sixteen](./images/answer16.png)

17. Paredaguokite save taip, kad galėtumėte prisijungti prie grafinės aplinkos (usermod mkhomedir_helper). 

```bash
sudo mkhomedir_helper temp-vartotojas
```

![Answer Seventeen](./images/answer17.png)

18. Prisijunkite grafinėje aplinkoje. 

![Answer Eighteen](./images/answer18.png)