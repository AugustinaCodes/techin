# Darbas su OS procesais

1. Išveskite į ekraną visus OS procesus. 

```bash
ps aux
```
![Answer One](./images/answer1.png)

2. Visų procesų sąrašą išsaugokite faile procesai.txt (vieta: ~).

```bash
ps aux > procesai.txt
```

![Answer Two](./images/answer2.png)

3. Išveskite į ekraną visus vartotojo root procesus.

```bash
ps aux | grep root
```
![Answer Three](./images/answer3.png)

4. Išbandykite komandą pstree.

```bash
pstree
```
![Answer Four](./images/answer4.png)

5. Paleiskite Firefox interneto naršyklę (leisti iš komandinės eilutės).

```bash
firefox
```

![Answer Five](./images/answer5.png)

6. Suraskite paleistą Firefox programą procesų sąraše.

```bash
ps aux | grep firefox
```

![Answer Six](./images/answer6.png)

7. Uždarykite Firefox programą iš komandinės eilutės.

```bash
pkill firefox
```

or control + Z stops and control + C closes the program

8. Išbandykite komandą (programą) top.

```bash
top
```

![Answer Eight](./images/answer8.png)

9. top programos pagalba patikrinkite kokia programa (procesas) naudoja daugiausiai atminties (RAM).

![Answer Nine](./images/answer9.png)

or

```bash
top -o %MEM
```

10. Suraskite, kiek procesų šiuo metu priklauso jūsų vartotojui.

```bash
top -u student
```

![Answer Ten](./images/answer10.png)

11. Išfiltruokite visus „zombie“ tipo procesus.

```bash
ps aux | grep 'defunct'
```

or

```bash
ps aux | grep 'z'
```

![Answer Eleven](./images/answer11.png)

12. Paleiskite bet kokią programą taip, kad ji automatiškai būtų nutraukta po 15 sekundžių.

```bash
timeout 15s firefox
```

![Answer Twelve](./images/answer12.png)

13. Užblokuokite savo naudotojui galimybę paleisti tam tikrą programą/komandą

- make sure the user exits (the one you want to block access to)
- add a group (the one you want to apply the restrictions to):

```bash
sudo groupadd groupname
```

- add user to the group:
```bash
sudo usermod -aG groupname username
```

a - append (don't remove from other groups);
G - specify groups

- make sure you're running commands as the root/main user
- limit program access:

```bash
sudo setfacl -m g:groupname:0 /usr/bin/firefox
```

setfacl - set file access control list (ACLs); m - modify; g - target group; 0 - no permissions at all

![Answer Thirteen](./images/answer13.png)

- to block a command:
- easy way to see which path it belongs:
```bash
which command
```
- then the same command applies:
```bash
sudo setfacl -m g:restrict:0 /usr/bin/pstree
```

![Answer Thirteen-One](./images/answer13-1.png)