import type { CampsiteConfig } from "../types";

const IMG = "/campsites/wachaucamping-rossatz";

const wachaucampingRossatz: CampsiteConfig = {
  name: "Wachau-Camping Rossatz",
  shortName: "Rossatz",
  slug: "wachaucamping-rossatz",
  ort: "Rossatzbach",
  region: "Wachau",
  brandKind: "Camping an der Donau",
  regionLong: "Weltkulturerbe Wachau · Niederösterreich · Österreich",

  heroVariant: "center",

  claim: "Direkt an der Donau, mit Blick auf Dürnstein",
  claimEmphasis: "Blick auf Dürnstein",
  emailDetail: "euer Donaustellplatz direkt am Ufer der Donau",
  intro:
    "Auf dem rechten Donauufer, direkt gegenüber Dürnstein, findest du einen der schönsten Plätze der Wachau — Stellplätze für Wohnmobil, Wohnwagen und Zelt, viele mit freiem Blick aufs Wasser.",

  logo: { src: `${IMG}/logo-b27f0faf93.png`, alt: "Wachau-Camping Rossatz Logo" },

  statement: {
    text: "Morgens öffnest du das Vorzelt — und gegenüber leuchtet schon Dürnstein über der Donau.",
    emphasis: "Dürnstein",
  },

  pillars: [
    {
      title: "Stellplätze am Donauufer",
      text: "Viele Plätze liegen in erster Reihe direkt an der Donau — mit freiem Blick hinüber nach Dürnstein.",
      image: { src: `${IMG}/gallery-2c76bdd28c.webp`, alt: "Wohnwagen mit Sonnenschirm am Donauufer, Blick auf Dürnstein" },
    },
    {
      title: "Persönlich geführt",
      text: "Kristina Roller und ihr Team empfangen dich persönlich an der Rezeption — um Voranmeldung wird gebeten.",
      image: { src: `${IMG}/gallery-c868540874.webp`, alt: "Kristina Roller empfängt Gäste an der Rezeption von Wachau-Camping Rossatz" },
    },
    {
      title: "Inmitten der Marillengärten",
      text: "Rossatz-Arnsdorf ist Österreichs größte Marillengemeinde — rundum Weingärten, Donau und Wanderwege.",
      image: { src: `${IMG}/gallery-597bd1a8ea.webp`, alt: "Rossatz mit Weingärten und Marillengärten an der Donau" },
    },
  ],

  usps: [
    "Stellplätze an der Donau",
    "Blick auf Dürnstein",
    "WLAN kostenlos",
    "Brötchenservice",
    "Hunde willkommen",
    "Tennisplatz",
  ],

  trust: {
    heading: "Einer der schönsten Plätze der Wachau",
    headingEmphasis: "schönsten",
    intro:
      "Am rechten Donauufer, mitten im Weltkulturerbe Wachau: ebene Stellplätze direkt am Wasser, der Blick auf Dürnstein und kurze Wege in die Marillengärten — persönlich geführt von Kristina Roller und ihrem Team.",
  },

  awards: [],

  saison: { von: "März", bis: "November" },

  hero: {
    aerial: { src: `${IMG}/gallery-61b18cb649.webp`, alt: "Wohnmobile auf den sonnigen Stellplätzen von Wachau-Camping Rossatz" },
  },

  breather: {
    image: { src: `${IMG}/gallery-bb36bfe1eb.webp`, alt: "Luftbild über das Weltkulturerbe Wachau mit Weingärten und Donau" },
    line: "Die Wachau — gerade einmal 35 Kilometer Donautal.",
  },

  camping: {
    heading: "Camping am rechten Donauufer",
    intro:
      "Vom Wohnmobil über den Wohnwagen bis zum Zelt — ebene Plätze, viele direkt an der Donau, dazu Restaurants und Brötchenservice am Platz.",
    features: [
      {
        title: "Donaustellplätze",
        text: "Ebene, gepflegte Stellplätze für Wohnmobil und Wohnwagen — die Donaustellplätze liegen direkt am Wasser.",
        image: { src: `${IMG}/gallery-f78b6edcce.webp`, alt: "Gepflegte Stellplätze mit Wohnwagen und Wohnmobilen bei Wachau-Camping Rossatz" },
      },
      {
        title: "Zelten mit Aussicht",
        text: "Eigene Wiesenplätze fürs Zelt, viele mit Blick über die Donau auf Dürnstein und die Weinberge.",
        image: { src: `${IMG}/gallery-09fcf081d9.webp`, alt: "Zelt auf der Wiese mit Blick auf Dürnstein über der Donau" },
      },
      {
        title: "Baden in der Donau",
        text: "Direkt am Platz geht es an die Donau — ins Wasser, auf die Luftmatratze oder einfach am Ufer entspannen.",
        image: { src: `${IMG}/gallery-1dd0bed516.webp`, alt: "Badegast auf der Luftmatratze am Donauufer vor Dürnstein" },
      },
      {
        title: "Restaurants am Platz",
        text: "Die Restaurants Strandgut und Alte Schiffstation sorgen für gute Verpflegung ganz in der Nähe.",
        image: { src: `${IMG}/gallery-a2b1e96db2.webp`, alt: "Sonnige Gastgarten-Terrasse mit Schirmen bei Wachau-Camping Rossatz" },
      },
      {
        title: "Empfang & Brötchenservice",
        text: "Frisches Frühstücksgebäck reservierst du an der Rezeption — kostenloses WLAN gibt es dazu.",
        image: { src: `${IMG}/gallery-70e504c81e.webp`, alt: "Rezeptionsgebäude von Campingplatz Rossatz mit Gästen und Fahrrädern" },
      },
      {
        title: "Sonnenplätze zum Verweilen",
        text: "Schattige Bäume, Liegewiese und Blick aufs Wasser — bleib einfach sitzen und lass die Seele baumeln.",
        image: { src: `${IMG}/gallery-4859239a13.webp`, alt: "Gedeckter Gartentisch mit Donaublick auf Dürnstein" },
      },
    ],
  },

  aktivitaeten: {
    heading: "Ausflüge im Welterbe Wachau",
    intro:
      "Welterbe vor der Tür: Dürnstein, Göttweig und Krems, dazu Radwege und Wanderungen durch Weinberge und Marillengärten.",
    items: [
      {
        title: "Dürnstein",
        text: "Die blaue Stiftskirche und die Burgruine über dem Ort liegen direkt gegenüber am linken Ufer.",
        image: { src: `${IMG}/gallery-d48a1b412e.webp`, alt: "Dürnstein mit blauer Stiftskirche und Burgruine an der Donau" },
      },
      {
        title: "Burgruine Aggstein",
        text: "Die Burgruine Aggstein thront auf einem Felsen 300 Meter über der Donau — ein lohnendes Ausflugsziel.",
        image: { src: `${IMG}/gallery-34d8d5dd32.webp`, alt: "Burgruine Aggstein auf dem Felsen über der Donau" },
      },
      {
        title: "Stift Göttweig",
        text: "Das Benediktinerstift Göttweig, seit 2001 Weltkulturerbe, wacht südlich von Krems über die Wachau.",
        image: { src: `${IMG}/gallery-0603a4a969.webp`, alt: "Stift Göttweig über dem Donautal der Wachau" },
      },
      {
        title: "Krems",
        text: "Das Tor zur Wachau lockt mit historischer Altstadt, Kunstmeile und gemütlichen Heurigen.",
        image: { src: `${IMG}/gallery-45e962afa7.webp`, alt: "Historische Altstadt von Krems mit Steiner Tor" },
      },
      {
        title: "Donauradweg",
        text: "Der Donauradweg führt direkt am Platz vorbei — die Wachau lässt sich wunderbar mit dem Rad erkunden.",
        image: { src: `${IMG}/gallery-7e8ca1e173.webp`, alt: "Radfahrer am Donauradweg vor Dürnstein" },
      },
      {
        title: "Rollfähre Spitz–Arnsdorf",
        text: "Mit der Rollfähre Spitz–Arnsdorf setzt du bequem samt Fahrrad ans linke Donauufer über.",
        image: { src: `${IMG}/gallery-5e0dfb3cd7.webp`, alt: "Rollfähre mit Radfahrern auf der Donau bei Spitz-Arnsdorf" },
      },
    ],
  },

  anreise: {
    heading: "Dein Weg ans rechte Donauufer",
    modes: [
      {
        title: "Mit dem Auto",
        text: "Über die A1 bis Melk und weiter am rechten Donauufer; von Krems kommend weichst du über die St. Pöltner Brücke (B37) aus.",
      },
      {
        title: "Bahn & Fähre",
        text: "Bahnhof Krems an der Donau, von dort mit dem Bus oder der Rollfähre ans rechte Ufer nach Rossatz.",
      },
      {
        title: "Mit dem Rad",
        text: "Der Donauradweg verläuft direkt am Platz — die Wachau-Etappe zwischen Krems und Melk führt vorbei.",
      },
    ],
  },

  galerie: {
    heading: "Die Wachau vor der Tür",
    headingEmphasis: "Wachau",
    intro:
      "Sonnige Stellplätze, der Donaublick und die Dörfer der Wachau — ein paar Eindrücke aus der Umgebung.",
    tag: "März bis November",
    moreCount: 9,
    images: [
      { src: `${IMG}/gallery-cbedba3e41.webp`, alt: "Dürnstein bei Nacht mit beleuchtetem Schiff auf der Donau" },
      { src: `${IMG}/gallery-528a477b2e.webp`, alt: "Weinterrassen und Donau bei Spitz in der Wachau" },
      { src: `${IMG}/gallery-f679f20084.webp`, alt: "Mautern an der Donau mit Brücke und Blick zum Stift Göttweig" },
      { src: `${IMG}/gallery-1966050218.webp`, alt: "Weißenkirchen in der Wachau mit Kirche und Weinbergen an der Donau" },
    ],
  },

  booking: {
    heading: "Sichere dir deinen Donaustellplatz",
    headingEmphasis: "Donaustellplatz",
    intro:
      "Wähle Zeitraum und Personen — Kristina Roller bestätigt deine Anfrage persönlich. Um Voranmeldung wird gebeten.",
    pricesArePlaceholder: false,
    priceNote: "ab-Preise Nebensaison · 2 Personen inkl. Platz & Warmwasser · zzgl. Strom € 5/Tag und Nächtigungstaxe € 2,60",
    highlight: {
      title: "Plätze direkt an der Donau",
      text: "Die Donaustellplätze liegen in erster Reihe am Wasser, mit Blick auf Dürnstein.",
    },
    categories: [
      { id: "donau", label: "Donaustellplatz", perNight: 39, perExtraGuest: 10 },
      { id: "stellplatz", label: "Stellplatz", perNight: 34.5, perExtraGuest: 10 },
      { id: "zelt", label: "Zeltplatz", perNight: 24.5, perExtraGuest: 10 },
    ],
  },

  kontakt: {
    tel: "+43 676 848814800",
    telHref: "tel:+43676848814800",
    mail: "camping@rossatz-arnsdorf.at",
    adresse: "Rossatzbach 21 · 3602 Rossatzbach · Wachau",
    coords: { lat: 48.3899921, lng: 15.5169396 },
  },

  languages: ["DE"],

  nav: [
    { label: "Camping", href: "#camping", children: [
      { label: "Stellplätze", href: "#camping" },
      { label: "Baden", href: "#camping" },
    ]},
    { label: "Erleben", href: "#aktivitaeten" },
    { label: "Galerie", href: "#galerie" },
    { label: "Preise & Anreise", href: "#booking", children: [
      { label: "Preise", href: "#booking" },
      { label: "Anreise", href: "#anreise" },
    ]},
  ],
};

export default wachaucampingRossatz;
