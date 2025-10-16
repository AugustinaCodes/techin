# Darbas su OS procesais

1. Išveskite į ekraną visus OS procesus. 

```
ps aux
```
![Answer One](./images/answer1.png)

2. Visų procesų sąrašą išsaugokite faile procesai.txt (vieta: ~).

```
ps aux > procesai.txt
```

![Answer Two](./images/answer2.png)

3. Išveskite į ekraną visus vartotojo root procesus.

```
ps aux | grep root
```
![Answer Three](./images/answer3.png)

4. Išbandykite komandą pstree.

```
pstree
```
![Answer Four](./images/answer4.png)

5. Paleiskite Firefox interneto naršyklę (leisti iš komandinės eilutės).

```
firefox
```

![Answer Five](./images/answer5.png)

6. Suraskite paleistą Firefox programą procesų sąraše.

```
ps aux | grep firefox
```

![Answer Six](./images/answer6.png)

7. Uždarykite Firefox programą iš komandinės eilutės.

```
pkill firefox
```

8. Išbandykite komandą (programą) top.

```
top
```

![Answer Eight](./images/answer8.png)

9. top programos pagalba patikrinkite kokia programa (procesas) naudoja daugiausiai atminties (RAM).

![Answer Nine](./images/answer9.png)

10. Suraskite, kiek procesų šiuo metu priklauso jūsų vartotojui.

```
top -u student
```

![Answer Ten](./images/answer10.png)

11. Išfiltruokite visus „zombie“ tipo procesus.

```
ps aux | grep 'defunct'
```

or

```
ps aux | grep 'z'
```

![Answer Eleven](./images/answer11.png)

12. Paleiskite bet kokią programą taip, kad ji automatiškai būtų nutraukta po 15 sekundžių.

```
timeout 15s firefox
```

![Answer Twelve](./images/answer12.png)

13. Užblokuokite savo naudotojui galimybę paleisti tam tikrą programą/komandą

