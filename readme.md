# **Projekti Testimisaruanne**

### **Projekti Kirjeldus**
Valisin testimiseks projekti nimega "Calory Tracker", mis on lihtne veebirakendus kalorite jälgimiseks. Rakendus võimaldab kasutajal lisada, muuta ja kustutada toiduaineid ning jälgida päeva jooksul tarbitud kalorite kogust.

Projekti kodukaust: calorytracker

### **Testitud Funktsionaalsused**

#### **Add Meal Test**
Testib võimalust lisada uus toidukord rakendusse. Sisaldab samm-sammult juhiseid uue söögi lisamiseks. Eesmärk: Veenduda, et uus söök on edukalt lisatud. Oodatavad tulemused: Uus söök kuvatakse toidukordade loendis. 
Antud test ei töötanud kuna ta ületab testimisel ajalimiidi: 
.Adding a new meal...
F--.
Failures:

1) Scenario: User adds a new meal # features\add-meal.feature:6
   √ Given the user is on the Calorie Tracker page # features\step_definitions\add-meal.js:8
   × When the user adds a new meal with name "New Meal" and calories "500" # features\step_definitions\add-meal.js:14
       Error: function timed out, ensure the promise resolves within 5000 milliseconds
           at Timeout._onTimeout (C:\Users\sandr\Desktop\cucumber\node_modules\cucumber\lib\user_code_runner.js:76:18)
           at listOnTimeout (node:internal/timers:573:17)
           at process.processTimers (node:internal/timers:514:7)
   - Then the total calories should be updated to "500" # features\step_definitions\add-meal.js:26
   - And the new meal "New Meal" should be displayed in the list # features\step_definitions\add-meal.js:38
   √ After # features\step_definitions\add-meal.js:50

1 scenario (1 failed)
4 steps (1 failed, 2 skipped, 1 passed)



#### **Edit Meal Test**
Antud test ei töötanud:

PS C:\Users\sandr\Desktop\puppeteer> node edit-meal-test.js

C:\Users\sandr\Desktop\puppeteer\node_modules\puppeteer-core\lib\cjs\puppeteer\common\WaitTask.js:60
        this.#timeoutError = new Errors_js_1.TimeoutError(`Waiting failed: ${options.timeout}ms exceeded`);
                             ^
TimeoutError: Waiting for selector `#item-list li:first-child` failed: Waiting failed: 15000ms exceeded

Kuidas test oleks pidanud töötama:

Testib võimalust muuta olemasoleva toidukorra andmeid.
Sisaldab juhiseid olemasoleva söögi muutmiseks.
Eesmärk: Veenduda, et muudatused kajastuvad korrektselt.
Oodatavad tulemused: Muudetud söök kuvatakse õigete andmetega.

#### **Delete Meal Test**

Testib võimalust kustutada olemasolev toidukord rakendusest.
Sisaldab juhiseid toidukorra kustutamiseks.
Eesmärk: Veenduda, et toidukord on edukalt eemaldatud.
Oodatavad tulemused: Kustutatud söök ei kuvata enam toidukordade loendis.
Tehtud kuavtõmmis testi toimimisest: delete-meal-test-screenshot.png

### **Testimise Käik**
Laadisin alla ja seadistasin Puppeteer'i testikeskkonna.
Valisin testitavaks projektiks "Calory Tracker".
Lõin kolm erinevat UI testi, mis katavad lisamise, muutmise ja kustutamise funktsionaalsused.
Täitsin testjuhtumeid vastavalt projekti nõuetele.
Käivitasin testid, jälgisin nende käiku ja kontrollisin oodatud tulemusi.
Dokumenteerisin leitud probleemid või vead.

### **Leitud Probleemid**

#### **Värskenduse Probleem**

Probleem: Muudetud söögi kuvamine ei värskendu alati kohe pärast muudatuse salvestamist.
Mõju: Kasutajale võib jääda mulje, et muudatus ei toimunud.
Soovitus: Lisada täiendav värskendus või kinnitus pärast muudatuse salvestamist.

#### **Sisselogimise Puudumine**

Probleem: Rakenduses puudub sisselogimise funktsionaalsus, mistõttu ei ole kasutajaandmed personaalsed.
Mõju: Kasutaja andmed ei ole kaitstud ja igaüks saab muuta või kustutada toidukordi.
Soovitus: Lisada sisselogimine ja kasutaja autentimise süsteem.

### **Järeldus**
Testimise tulemusena leidsin mõningaid probleeme funktsionaalsustega, eriti muudetud söögi kuvamisega. Soovitan neid parandada ja kaaluda sisselogimise funktsionaalsuse lisamist, et suurendada kasutajakogemust ja turvalisust. Üldiselt on "Calory Tracker" projekt hea algus, kuid mõned täiustused võiksid parandada kasutajakogemust.




