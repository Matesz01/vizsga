# Szórakozóhely weboldal és jegyértékesítő rendszer

## Projekt leírás

A projektünk célja egy olyan weboldal elkészítése, amely egy szórakozóhely működését segíti.

Az oldalon a látogatók meg tudják nézni a közelgő eseményeket, azok részleteit, illetve lehetőségük lesz online jegyet vásárolni. A vásárlás után a rendszer egy egyedi belépőt készít, amit a vásárló emailben kap meg.

A weboldalhoz készül egy külön admin felület is, ahol a tulajdonosok meg tudják nézni az eseményekkel kapcsolatos adatokat és statisztikákat. Például azt, hogy egy eseményt hányan néztek meg, mennyi jegyet adtak el, illetve melyik jegytípusból fogyott a legtöbb.

A célunk egy egyszerűen használható rendszer elkészítése, ami mind a vendégeknek, mind az oldal kezelőinek megkönnyíti a használatot.

---

## Főbb funkciók

* Események megjelenítése az oldalon
* Események részleteinek megtekintése
* Jegyek kiválasztása és vásárlása
* Egyedi belépő készítése vásárlás után
* Belépő elküldése emailben
* Események megtekintéseinek számolása
* Jegyeladási statisztikák készítése
* Admin felület a tulajdonosok számára

---

## Frontend



A frontend feladata lesz a weboldal kinézetének és a felhasználói felületnek az elkészítése. Ide tartozik például az események megjelenítése, a jegyvásárlási oldal és az admin felület kialakítása.

A későbbiekben fogjuk eldönteni, hogy milyen frontend keretrendszert vagy technológiát fogunk használni.

---

## Backend



A backend fogja kezelni az adatokat és a weboldal működéséhez szükséges háttérfolyamatokat.

Feladatai közé tartozik:

* vásárlások kezelése,
* adatok mentése,
* kommunikáció a frontend és az adatbázis között,
* statisztikák készítése,
* email küldések kezelése.

A backendhez használt technológia később kerül kiválasztásra.

---

## Statisztika és adatkezelés

A rendszer figyelni fogja az események látogatottságát és a jegyvásárlásokat.

A gyűjtött adatok alapján meg lehet nézni például:

* melyik eseményt nézték meg a legtöbben,
* melyik eseményre fogyott a legtöbb jegy,
* melyik jegytípus a legnépszerűbb.

Az adatokat felhőben szeretnénk tárolni, hogy az adminisztrátorok bárhonnan hozzáférjenek a statisztikákhoz.

---


