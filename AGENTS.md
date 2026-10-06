# Instrukcijos agentui

Projektas: Pirmas projektas. Prieš keisdamas kodą perskaityk `context.md` ir `AL_RULES.md`.

## Kalba

Lankytojo tekstai, `README.md`, `context.md`, `AL_RULES.md` ir šis failas rašomi lietuvių kalba. Su autore galima kalbėti ta kalba, kuria ji parašė žinutę.

## Kas jau yra

Pagrindinis puslapis, profilis ir atskiras kontaktų puslapis. Adresas: http://localhost:5173/

Svetainė yra autorės galerija jos paveikslams ir ikonoms. Paveikslai ir ikonos lieka atskiros sekcijos.

- Navigacija: Pradžia, Profilis, Paveikslai, Ikonos, Prisijungimas, Dokumentacija, Kontaktai
- Po šūkiu du mygtukai: Paveikslai ir Ikonos. Sekcijos kol kas be darbų
- Šūkis: „Čia jūsų visada laukiame!“
- Progreso juosta ir prisijungimo forma
- Profilis ir Kontaktai atidaro atskirus puslapius su tuo pačiu meniu. Pradžia grąžina į pagrindinį puslapį
- Poraštė su dokumentacija ir Vite bendruomene

Visi lankytojo tekstai rašomi tik lietuvių kalba. Spalvos kol kas lieka iš `src/index.css`.

Prisijungimas lieka naršyklėje ir niekur nesiunčiamas. Jis turi veikti ir kompiuteryje, ir telefone.

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
