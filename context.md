# Pirmas projektas — kontekstas

Paskutinį kartą atnaujinta: 2026-10-06.

Šis failas skirtas pokalbiams apie projektą. Jame laikoma tai, kas jau yra kode, ir tai, ką autorė pasakė atskirai. Kiekvieno pokalbio pabaigoje failas papildomas tik tais pakeitimais, kurie tikrai įvyko.

## Kalba

Svetainės tekstai ir šis failas rašomi lietuvių kalba. HTML kalba: `lt`.

## Kas tai yra

Vieno puslapio svetainė „Pirmas projektas“. Šūkis: „Čia jūsų visada laukiame!“

Sąsaja sukurta su React ir Vite. Tai pirmasis svetainės projektas. Autorė jį toliau pildys naujais komponentais ir skriptais. Kam tiksliai svetainė skirta ir kas ja naudosis, dar nepasakyta.

## Technologijos

- React 19
- Vite 8
- Moduliai: `"type": "module"`

## Paleidimas

Reikia Node.js.

```bash
npm install
npm run dev
```

Adresas: http://localhost:5173/

- `npm run build` surenka svetainę į aplanką `dist`
- `npm run preview` parodo jau surinktą versiją

Git šiame kompiuteryje neįdiegtas, aplanke nėra repozitorijos.

## Puslapio sandara

Vienas puslapis, be atskirų maršrutų. Navigacija veda į sekcijas tame pačiame puslapyje.

1. **Navigacija** lieka viršuje slenkant. Nuorodos: Pradžia (`#pradzia`), Paveikslai (`#paveikslai`), Ikonos (`#ikonos`), Prisijungimas (`#prisijungimas`), Dokumentacija (`#dokumentacija`), Kontaktai (`#kontaktai`).
2. **Antraštė** su JavaScript ir Vite ženklais, pavadinimu ir šūkiu. Po šūkiu du mygtukai: Paveikslai ir Ikonos.
3. **Progreso juosta** nuo 0 iki 100, su žymomis 0, 25, 50, 75 ir 100.
4. **Prisijungimo forma** laukuose „Vardas“ ir „Slaptažodis“.
5. **Galerija** — dvi atskiros sekcijos, kol kas be darbų: Paveikslai ir Ikonos. Jų nejungti į vieną tinklelį.
6. **Poraštė** su dokumentacija (Vite, JavaScript) ir kontaktais (GitHub, Discord). Nuorodos atsidaro naujame lange.
   Apačioje rodoma automatiškai pagal einamuosius metus atnaujinama © eilutė.

## Kaip veikia forma

Duomenys lieka naršyklėje ir niekur nesiunčiami.

- Įvestas vardas pakelia progresą iki 50 %.
- Slaptažodis iš bent 4 simbolių prideda dar 50 %.
- Tuščias vardas arba tuščias slaptažodis pateikiant formą rodo: „Įveskite vardą ir slaptažodį.“
- Pavykus rodoma: „Sveiki, {vardas}! Jūs sėkmingai prisijungėte.“ Progresas tampa 100 %.

Ar prisijungimas ir toliau turi likti tik naršyklėje, dar nepatvirtinta.

## Dabartinis vaizdas

Spalvos paimtos iš `src/index.css`. Tai dabartinė būsena, ne patvirtintas galutinis dizainas.

- Tekstas: `#2d2150`, antraštės: `#1b1035`, prigesintas tekstas: `#6b5b8c`
- Foną sudaro šviesiai mėlyna `#d8e9fb` ir alyvinis akcentas `#c9b6f2`
- Mygtukai ir nuorodos: violetinė `#7c3aed`, užvedus `#6d28d9`
- Šriftas: `system-ui`, Segoe UI, Roboto
- Bazinis dydis: 18px

## Failai

```
src/
  components/
    Header/       navigacija ir šūkis
    GalleryDoors/ mygtukai „Paveikslai“ ir „Ikonos“
    ProgressBar/  progreso juosta
    JoinForm/     prisijungimo forma
    Gallery/      paveikslų ir ikonų sekcijos
    SiteFooter/   dokumentacija ir kontaktai
  App.jsx         sujungia dalis ir laiko progreso būseną
  App.css
  main.jsx
  index.css       spalvos ir bazinis tekstas
README.md         kaip paleisti projektą
context.md        šis failas
AL_RULES.md       instrukcijos ir taisyklės naujiems komponentams
AGENTS.md         trumpos instrukcijos agentui
```

`node_modules` yra įdiegtos bibliotekos, ne projekto dalis, kurią reikia aprašinėti ar ranka keisti.

## Kas toliau

Autorė 2026-10-01 patvirtino, kad šis aprašas tinka. Projektas nėra baigtas: į jį dar bus dedami komponentai ir skriptai. Kaip juos dėti, parašyta `AL_RULES.md`.

2026-10-01 autorė pradeda dirbti su projektu per Codex CLI. Trumpa instrukcija agentui yra `AGENTS.md`. Codex diegiamas kompiuteryje atskirai, ne į šio projekto aplanką.

2026-10-05 GitHub paskyroje artbaltica-lang sukurta vieša repozitorija: https://github.com/artbaltica-lang/pirmas-projektas. Vietiniai projekto failai į ją dar neįkelti.

## Dar neatsakyta

- Kam skirta svetainė ir kas lankytojas.
- Ar dabartinės spalvos, šriftas ir išdėstymas lieka.
- Ar prisijungimas lieka tik naršyklėje, be serverio.

## Kaip papildyti šį failą

Pokalbio pabaigoje įrašyti tik tai, kas pasikeitė: naujus puslapius, tekstus, spalvas, elgseną ir tai, ko daugiau nebedaryti. Datą viršuje pakeisti. Spėjimų nerašyti.

2026-10-01 poraštėje pridėta © eilutė, kurios metai nustatomi automatiškai. Metų reikšmės ranka nekeisti.

2026-10-06 pagrindiniame lange pridėti mygtukai „Paveikslai“ ir „Ikonos“. Kiekvienas veda į savo tuščią sekciją. Spalvų, šūkio, formos tekstų ir progreso taisyklių nekeisti. Paveikslų ir ikonų nejungti į vieną sekciją. Prisijungimas lieka tik naršyklėje.
