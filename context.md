# Pirmas projektas — kontekstas

Paskutinį kartą atnaujinta: 2026-10-08.

Šis failas skirtas pokalbiams apie projektą. Jame laikoma tai, kas jau yra kode, ir tai, ką autorė pasakė atskirai. Kiekvieno pokalbio pabaigoje failas papildomas tik tais pakeitimais, kurie tikrai įvyko.

## Kalba

Svetainės tekstai ir šis failas rašomi lietuvių kalba. HTML kalba: `lt`.

## Kas tai yra

Svetainė „Pirmas projektas“ turi pagrindinį puslapį ir atskirą kontaktų puslapį. Šūkis: „Čia jūsų visada laukiame!“

Sąsaja sukurta su React ir Vite. Tai autorės, dailininkės, galerija jos paveikslams ir ikonoms. Paveikslai ir ikonos rodomi atskirai. Darbų failų sekcijose dar nėra.

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

Git veikia. Šaka `master` seka `origin/master`. 2026-10-06 autorė išsaugojo komitą `Prideti migtukos paveikslams ir ikonoms`.

## Puslapio sandara

Navigacija lieka viršuje. Kontaktai atidaro atskirą puslapį, kitos nuorodos lieka pagrindiniame puslapyje.

1. **Navigacija** lieka viršuje slenkant. Nuorodos: Pradžia (`#pradzia`), Paveikslai (`#paveikslai`), Ikonos (`#ikonos`), Užduotys (`#uzduotys`), Prisijungimas (`#prisijungimas`), Dokumentacija (`#dokumentacija`), Kontaktai (`#kontaktai`). Iš kontaktų puslapio „Pradžia“ grąžina į pagrindinį.
2. **Antraštė** su JavaScript ir Vite ženklais, pavadinimu ir šūkiu. Po šūkiu du mygtukai: Paveikslai ir Ikonos.
3. **Progreso juosta** nuo 0 iki 100, su žymomis 0, 25, 50, 75 ir 100.
4. **Prisijungimo forma** laukuose „Vardas“ ir „Slaptažodis“.
5. **Galerija** — dvi atskiros sekcijos, kol kas be darbų: Paveikslai ir Ikonos. Jų nejungti į vieną tinklelį.
6. **Užduotys** — sąrašas iš https://testapi.io/api/artbaltica-lang/resource/tasklistnata. Laukas `tasklistnata1` rodomas, įrašomas, atnaujinamas (`PUT`) ir šalinamas.
7. **Kontaktai** — atskiras puslapis lietuvišku tekstu apie paveikslus ir ikonas. Meniu lieka. El. pašto ir telefono autorė dar nedavė, todėl jų nerašyti.
8. **Poraštė** su dokumentacija (Vite, JavaScript) ir Vite bendruomene (GitHub, Discord). Nuorodos atsidaro naujame lange.
   Apačioje rodoma automatiškai pagal einamuosius metus atnaujinama © eilutė.

## Kaip veikia forma

Paspaudus „Prisijungti“, vardas ir slaptažodis įrašomi į https://testapi.io/api/artbaltica-lang/resource/auth. Lentelė turi tik teksto lauką `auth1`, todėl jame saugoma eilutė `{"name","password"}`. Atskirų stulpelių iš kodo pridėti negalima. Slaptažodis puslapyje nerodomas. „Atsijungti“ išvalo tik ekraną.

- Įvestas vardas pakelia progresą iki 50 %.
- Slaptažodis iš bent 4 simbolių prideda dar 50 %.
- Tuščias vardas arba tuščias slaptažodis pateikiant formą rodo: „Įveskite vardą ir slaptažodį.“
- Pavykus rodoma: „Sveiki, {vardas}! Jūs sėkmingai prisijungėte.“ Progresas tampa 100 %. Po pasveikinimo yra mygtukas „Atsijungti“: jis išvalo laukus, paslepia pasveikinimą ir grąžina progresą į 0 %.

2026-10-08 autorė paprašė vardą ir slaptažodį rašyti į `auth` lentelę, į lauką `auth1`. Prisijungimas turi veikti ir kompiuteryje, ir telefone.

## Dabartinis vaizdas

Spalvos paimtos iš `src/index.css`. 2026-10-06 autorė pasakė, kad spalvos kol kas lieka. Šrifto ir išdėstymo ji atskirai nepatvirtino.

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
    Uzduotys/     užduočių sąrašas iš serverio
    Kontaktai/    kontaktų puslapis
    SiteFooter/   dokumentacija ir Vite bendruomenė
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

2026-10-05 GitHub paskyroje artbaltica-lang sukurta vieša repozitorija: https://github.com/artbaltica-lang/pirmas-projektas.

2026-10-06 autorė pasakė, kad svetainė yra jos galerija paveikslams ir ikonoms. Spalvos kol kas lieka. Prisijungimas kol kas tik naršyklėje, iš kompiuterio ir iš telefono. Visi lankytojo tekstai tik lietuvių kalba.

## Dar neatsakyta

- Kas lankytojas, be pačios autorės.
- Ar lieka dabartinis šriftas ir išdėstymas.

## Kaip papildyti šį failą

Pokalbio pabaigoje įrašyti tik tai, kas pasikeitė: naujus puslapius, tekstus, spalvas, elgseną ir tai, ko daugiau nebedaryti. Datą viršuje pakeisti. Spėjimų nerašyti.

2026-10-01 poraštėje pridėta © eilutė, kurios metai nustatomi automatiškai. Metų reikšmės ranka nekeisti.

2026-10-06 pagrindiniame lange pridėti mygtukai „Paveikslai“ ir „Ikonos“. Kiekvienas veda į savo tuščią sekciją. Spalvų, šūkio, formos tekstų ir progreso taisyklių nekeisti. Paveikslų ir ikonų nejungti į vieną sekciją. Lankytojo tekstų nerašyti kita kalba nei lietuvių. Prisijungimo nekelti į serverį, kol autorė nepaprašo. Jis turi likti patogus ir kompiuteryje, ir telefone.

2026-10-06 „Kontaktai“ atidaro atskirą puslapį, ne poraštės sekciją. Meniu lieka, „Pradžia“ grąžina į pagrindinį puslapį. Kontaktų teksto nekeisti į kitą kalbą. El. pašto ir telefono nepridėti, kol autorė jų nepasako.

2026-10-08 pridėta sekcija „Užduotys“. Ji skaito, įrašo ir šalina įrašus adresu https://testapi.io/api/artbaltica-lang/resource/tasklistnata. Vienintelis privalomas laukas yra `tasklistnata1`. Jo vardo nekeisti, kol autorė nepasako kito. Šūkio, spalvų, formos tekstų ir progreso taisyklių nekeisti.

2026-10-08 prisijungimo vardas ir slaptažodis rašomi į `auth1` kaip `{"name","password"}`. Lauko vardo nekeisti. Slaptažodžio puslapyje nerodyti. „Atsijungti“ įrašo nesina.

2026-10-08 prisijungus rodomas mygtukas „Atsijungti“. Jis grąžina tuščią formą ir 0 % progresą. Pasveikinimo teksto nekeisti.

2026-10-08 užduotį galima atnaujinti mygtuku „Atnaujinti“, tada „Išsaugoti“ arba „Atšaukti“. Keitimas siunčiamas metodu `PUT` į tą patį adresą su įrašo `id`. Lauko vardo `tasklistnata1` nekeisti.
