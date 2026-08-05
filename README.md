# Szórakozóhely weboldal és jegyértékesítő rendszer

## Projekt leírása

A projekt célja egy olyan weboldal elkészítése, amely egy szórakozóhely működését segíti. Az oldal lehetőséget biztosít a látogatók számára, hogy megtekintsék az aktuális eseményeket, információkat szerezzenek róluk, valamint online jegyet vásároljanak.

A rendszer része egy adminisztrációs felület is, ahol a tulajdonosok nyomon tudják követni az események teljesítményét, a látogatottsági adatokat és az eladott jegyek számát.

---

## Főbb funkciók

### Felhasználói oldal

* Események listázása
* Események részletes adatainak megtekintése
* Jegytípusok kiválasztása
* Online jegyvásárlás
* Vásárlás után egyedi belépő létrehozása
* A belépő elküldése emailben a vásárló számára

---

### Admin felület

Az adminisztrátorok számára külön felület készül, ahol megtekinthetők:

* Események megtekintési számai
* Jegyeladási statisztikák
* Eladott jegytípusok aránya
* Egyes események népszerűsége

---

## Statisztikai rendszer

A weboldal figyeli a felhasználói aktivitást, például az események megtekintését és a vásárlásokat.

A gyűjtött adatok alapján lehetőség lesz megállapítani:

* melyik eseményeket nézik meg a legtöbben,
* melyik jegytípusból fogy a legtöbb,
* hogyan változik az érdeklődés az események iránt.

Az adatok felhő alapú tárolásba kerülnek, így az adminisztrátorok nem csak helyben, hanem távolról is hozzáférhetnek a statisztikákhoz.

---

# Technológiák

## Frontend

Frontend keretrendszer:

* [React / Angular / Vue / nincs kiválasztva]

Felhasznált technológiák:

* HTML
* CSS
* JavaScript

---

## Backend

Backend technológia:

* [Node.js (Express) / C# (.NET Core) REST API]

A backend feladatai:

* Adatok kezelése
* Vásárlások feldolgozása
* Kommunikáció a frontend és az adatbázis között
* Email értesítések kezelése
* Statisztikai adatok mentése

---

## Adatbázis

Az adatbázisban kerülnek tárolásra például:

* események adatai,
* jegyek,
* vásárlások,
* felhasználói adatok,
* statisztikai információk.

Adatbázis:

* [MySQL / PostgreSQL]

---

# Tervezett működés

A felhasználó a weboldalon kiválasztja a számára megfelelő eseményt és jegyet. A vásárlás feldolgozása után a rendszer létrehoz egy egyedi belépőt, amelyet emailben megkap a vásárló.

A megtekintések és vásárlások adatai folyamatosan mentésre kerülnek, amelyeket az admin felületen lehet megtekinteni.

---

# Projekt felépítése

```
Frontend
   |
   |
Backend API
   |
   ├── Adatbázis
   |
   ├── Fizetési rendszer
   |
   ├── Email küldés
   |
   └── Statisztikai rendszer
```

---

# Fejlesztők

* Pohl Máté Balázs Backend
* Rémes-Szabó Bence Adatbázis
* Schmidt Dániel Frontend

---

# Verzió

1.0
