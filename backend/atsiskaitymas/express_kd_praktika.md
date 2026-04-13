## Užduotis: Maitinimo įstaigos užsakymų valdymo API

### Tikslas

Sukurti REST API sistemą, leidžiančią valdyti maisto patiekalus, klientus ir jų užsakymus naudojant `Express.js` bei `PostgreSQL`.

---

### Reikalavimai

#### Technologijos:

* `Node.js` su `Express.js`
* `PostgreSQL` duomenų bazė
* Autentikacija su `JWT` ir cookies
* Validacija su `ZOD`
* Centralizuotas klaidų valdymas

---

### Duomenų modeliai

#### 1. **Klientas (`customers`)**

* `id` (automatinis)
* `name` (string, privalomas, min 2 simboliai)
* `email` (unikalus, privalomas, validus el. paštas)
* `phone` (string, neprivalomas, tik skaičiai)

#### 2. **Patiekalas (`dishes`)**

* `id` (automatinis)
* `name` (string, privalomas, min 2 simboliai)
* `description` (string, neprivalomas)
* `price` (float, privalomas, turi būti teigiamas)

#### 3. **Užsakymas (`orders`)**

* `id` (automatinis)
* `customerId` (nuoroda į `customers`, privaloma)
* `orderDate` (data, automatiškai generuojama)
* `status` (enum: `pending`, `preparing`, `delivered`, `cancelled`)
* `dishId` (nuoroda į `dishes`, privaloma)

---

### Funkcionalumas

#### 1. **Autentikacija (admin vartotojui)**

* `POST /auth/register` – vartotojo registracija
* `POST /auth/login` – prisijungimas, grąžinamas JWT

* Vartotjai admin teisėmis gali viską, užsiregistravę vartotojai keisti savo duomenis, trinti savo duomenis ir atlikti visus veiksmus su savo užsakymais.
* Užsiregistravę vartotojai yra klientai. 

#### 2. **CRUD operacijos**

* **Patiekalai (`/dishes`)**

  * `GET /dishes` – visų patiekalų sąrašas
  * `POST /dishes` – sukurti patiekalą
  * `PATCH /dishes/:id` – atnaujinti patiekalo info
  * `DELETE /dishes/:id` – trinti patiekalą

* **Klientai (`/customers`)**

  * `GET /customers` – visų klientų sąrašas
  * `PATCH /customers/:id` – atnaujinti kliento info
  * `DELETE /customers/:id` – trinti klientą

* **Užsakymai (`/orders`)**

  * `GET /orders` – visų užsakymų sąrašas
  * `GET /orders/:id` – konkretus užsakymas su visais patiekalais
  * `POST /orders` – sukurti užsakymą 
  * `PATCH /orders/:id` – atnaujinti užsakymo statusą
  * `DELETE /orders/:id` – trinti užsakymą

---

### Sudėtingesnis funkcionalumas

* Patiekalų paieška pagal pavadinimą: `GET /dishes?search=pica`
* Užsakymų filtravimas pagal statusą: `GET /orders?status=delivered`

  * Kiekviename užsakyme turi būti grąžinama:
    * klientas (vardas, el. paštas)
    * patiekalų sąrašas su pavadinimu, kaina, kiekiu
    * bendra užsakymo suma (serverio pusėje paskaičiuota)

---

### Vertinimas (20 taškų)

| Sritis                            | Taškai |
| --------------------------------- | ------ |
| Autentikacija + JWT               | 3      |
| CRUD veiksmai (dishes, customers) | 4      |
| CRUD su orders                    | 4      |
| DB ryšių valdymas (join'ai)       | 3      |
| Validacija, klaidų valdymas       | 2      |
| Paieška, filtravimas              | 2      |
| Tvarkinga struktūra, failų tvarka | 2      |

---

Viso galima surinkti **20 taškų** – tai atitinka **10 balų**.

