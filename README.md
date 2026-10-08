# Pirmas projektas

Čia jūsų visada laukiame!

Pirmasis svetainės projektas: pagrindinis puslapis ir atskiras kontaktų puslapis. Tekstai lietuvių kalba. Sąsaja sukurta su React ir Vite.

## Kas yra puslapyje

- **Navigacija** viršuje lieka matoma slenkant. Nuorodos veda į pradžią, paveikslus, ikonas, užduotis, prisijungimą, dokumentaciją ir kontaktus.
- **Užduotys** rodo, prideda, atnaujina ir šalina įrašus iš https://testapi.io/api/artbaltica-lang/resource/tasklistnata. Lauko vardas serveryje yra `tasklistnata1`.
- **Paveikslai ir ikonos** atidaromi atskiromis mygtukais pagrindiniame lange. Darbų vietos kol kas tuščios.
- **Progreso juosta** auga pildant formą: vardas duoda 50 %, slaptažodis iš bent 4 simbolių — dar 50 %.
- **Prisijungimo forma** prašo vardo ir slaptažodžio. Jei laukas tuščias, parodoma klaida. Sėkmingai išsiuntus, vardas ir slaptažodis įrašomi į https://testapi.io/api/artbaltica-lang/resource/auth lauke `auth1`, pasveikinamas įvestas vardas ir rodomas mygtukas „Atsijungti“.
- **Kontaktai** atidaro atskirą puslapį. Meniu lieka viršuje, „Pradžia“ grąžina į pagrindinį puslapį.
- **Poraštė** turi nuorodas į Vite ir JavaScript dokumentaciją bei Vite bendruomenę (GitHub, Discord).

Prisijungus vardas ir slaptažodis įrašomi į `auth` lentelės lauką `auth1`. Mygtukas „Atsijungti“ išvalo tik ekraną, įrašo serveryje nepaliečia.

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
    Uzduotys/     užduočių sąrašas iš serverio
    Kontaktai/    kontaktų puslapis
    SiteFooter/   dokumentacija ir Vite bendruomenė
  App.jsx
  main.jsx
```
