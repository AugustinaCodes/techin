<!-- Uzluzo MySQL, kai bandydavau pasileisti Reverse Engineer, kad tureciau access i EER Diagram, MySQL Workbench visada quitino, tai padariau ta DB project kitaip:-->

Prie rodykliu, pridejau table relationships:
1 - one
∞ - to many

For example:
Klientu lenteleje yra row transporto_priemone ir prie jos yra ∞ zenklas, kuris reiskia, kad klientai gali tureti daug transporto priemoniu, ir ji veda i transporto_informacija lentele, ir prie jos yra 1, kuris reiskia, kad transporto priemone gali tureti tik viena klienta/seimininka.

![Atsakymas](Autoremonto%20Dirbtuves.png)