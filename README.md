# Pirmas projektas

Čia jūsų visada laukiame!

Pirmasis svetainės projektas: vienas puslapis su navigacija, prisijungimo forma ir progreso juosta. Tekstai lietuvių kalba. Sąsaja sukurta su React ir Vite.

## Kas yra puslapyje

- **Navigacija** viršuje lieka matoma slenkant. Nuorodos veda į pradžią, paveikslus, ikonas, prisijungimą, dokumentaciją ir kontaktus.
- **Paveikslai ir ikonos** atidaromi atskiromis mygtukais pagrindiniame lange. Darbų vietos kol kas tuščios.
- **Progreso juosta** auga pildant formą: vardas duoda 50 %, slaptažodis iš bent 4 simbolių — dar 50 %.
- **Prisijungimo forma** prašo vardo ir slaptažodžio. Jei laukas tuščias, parodoma klaida. Sėkmingai išsiuntus, pasveikinamas įvestas vardas.
- **Poraštė** turi nuorodas į Vite ir JavaScript dokumentaciją bei Vite bendruomenę (GitHub, Discord).

Prisijungimas vyksta tik naršyklėje. Duomenys niekur nesiunčiami.

## Kaip paleisti

Reikia [Node.js](https://nodejs.org/).

```bash
npm install
npm run dev
```

Svetainė atsidaro adresu [http://localhost:5173/](http://localhost:5173/).

## Kitos komandos

```bash
npm run build
npm run preview
```

`build` surenka svetainę į aplanką `dist`. `preview` parodo jau surinktą versiją.

## Technologijos

- React 19
- Vite 8

## Aplankai

```
src/
  components/
    Header/       navigacija ir šūkis
    GalleryDoors/ mygtukai „Paveikslai“ ir „Ikonos“
    ProgressBar/  progreso juosta
    JoinForm/     prisijungimo forma
    Gallery/      paveikslų ir ikonų sekcijos
    SiteFooter/   dokumentacija ir kontaktai
  App.jsx
  main.jsx
```
