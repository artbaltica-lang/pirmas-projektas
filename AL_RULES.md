# AL taisyklės

Pirmas projektas. Šios taisyklės galioja naujiems komponentams, skriptams ir tekstams.

## Kalba

- Visi lankytojui matomi tekstai rašomi lietuvių kalba.
- `index.html` kalba lieka `lt`.
- `README.md`, `context.md` ir šis failas taip pat lietuvių kalba.

## Naujas komponentas

Kiekvienas komponentas gauna savo aplanką:

```
src/components/KomponentoVardas/
  KomponentoVardas.jsx
  KomponentoVardas.css
```

- Komponentas eksportuojamas kaip `export default function`.
- Stiliai importuojami pačiame komponente: `import './KomponentoVardas.css'`.
- Į puslapį komponentas įdedamas per `src/App.jsx`.
- Klasės rašomos taip, kaip jau yra projekte: `blokas`, `blokas__elementas`, `blokas--variantas`. Pavyzdžiai: `header__slogan`, `join-form__error`, `button--purple`.

## Spalvos ir šriftas

Naujos spalvos nekuriamos, kol autorė nepasako kitaip. Naudojami kintamieji iš `src/index.css`:

- tekstas `--text`, antraštės `--text-h`, prigesintas tekstas `--muted`
- fonas `--bg` ir `--bg-accent`
- mygtukai `--purple` ir `--purple-hover`
- šriftas `--sans`

Mygtukas, kuris atrodo kaip esami violetiniai mygtukai, naudoja klasę `button button--purple`.

## Puslapis

- Kol neprašoma kitaip, lieka vienas puslapis be atskirų maršrutų. Išimtis: „Kontaktai“ yra atskiras vaizdas su ta pačia navigacija. „Pradžia“ grąžina į pagrindinį puslapį.
- Nauja sekcija gauna `id`. Jei ji turi atsirasti meniu, nuoroda dedama į `Header` navigaciją: `href="#id"`.
- Nuorodos į kitą svetainę atsidaro naujame lange ir turi `rel="noreferrer"`.
- Šūkis „Čia jūsų visada laukiame!“ nekeičiamas be atskiro prašymo.

## Forma ir progresas

- Paspaudus „Prisijungti“, vardas ir slaptažodis įrašomi į `auth` lentelės lauką `auth1`. Slaptažodžio puslapyje nerodyti. „Atsijungti“ serverio įrašo netrina.
- Vardas duoda 50 % progreso. Slaptažodis iš bent 4 simbolių duoda dar 50 %.
- Tušti laukai rodo: „Įveskite vardą ir slaptažodį.“
- Pavykus rodoma: „Sveiki, {vardas}! Jūs sėkmingai prisijungėte.“

## Ko neliesti

- `node_modules` neredaguojamas ir neaprašomas kaip projekto dalis.
- Nauja biblioteka diegiama tik tada, kai jos tikrai reikia.
- Slaptažodžių, raktų ir `.env` failų į projektą nedėti.

## Po pakeitimo

- Jei keitėsi tai, ką mato lankytojas, patikrinti puslapį naršyklėje adresu http://localhost:5173/.
- Pokalbio pabaigoje papildyti `context.md`: kas pasikeitė, kuri data, ir ko daugiau nebedaryti. Spėjimų nerašyti.
- Jei pasikeitė paleidimas ar aplankų medis, tą patį sakinį įrašyti ir į `README.md`.
