# Instrukcijos agentui

Projektas: Pirmas projektas. Prieš keisdamas kodą perskaityk `context.md` ir `AL_RULES.md`.

## Kalba

Lankytojo tekstai, `README.md`, `context.md`, `AL_RULES.md` ir šis failas rašomi lietuvių kalba. Su autore galima kalbėti ta kalba, kuria ji parašė žinutę.

## Kas jau yra

Vienas puslapis, be maršrutų. Adresas: http://localhost:5173/

- Navigacija: Pradžia, Prisijungimas, Dokumentacija, Kontaktai
- Šūkis: „Čia jūsų visada laukiame!“
- Progreso juosta ir prisijungimo forma
- Poraštė su dokumentacija ir kontaktais

Prisijungimo duomenys lieka naršyklėje ir niekur nesiunčiami.

## Kaip keisti

- Naujas komponentas: aplankas `src/components/Vardas/` su `Vardas.jsx` ir `Vardas.css`, tada importas `src/App.jsx`.
- Klasės: `blokas`, `blokas__elementas`, `blokas--variantas`.
- Spalvos tik iš `src/index.css` kintamųjų.
- Nauja sekcija gauna `id`. Jei ji turi būti meniu, nuoroda dedama į `Header`.
- `node_modules` neliesti. Biblioteką diegti tik tada, kai jos tikrai reikia.
- Šūkio, formos tekstų ir progreso taisyklių (vardas 50 %, slaptažodis nuo 4 simbolių dar 50 %) nekeisti be atskiro prašymo.

## Po darbo

Jei keitėsi tai, ką mato lankytojas, patikrinti puslapį naršyklėje.

Pokalbio pabaigoje papildyti `context.md`: data, kas pasikeitė, ko daugiau nebedaryti. Jei pasikeitė paleidimas ar aplankų medis, tą patį įrašyti į `README.md`.
