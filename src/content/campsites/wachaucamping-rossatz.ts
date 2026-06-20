import type { CampsiteConfig } from "../types";

const IMG = "/campsites/wachaucamping-rossatz";

const wachaucampingRossatz: CampsiteConfig = {
  name: "Wachau-Camping Rossatz",
  shortName: "Rossatz",
  slug: "wachaucamping-rossatz",
  ort: "Rossatzbach",
  region: "Wachau",
  brandKind: "Camping an der Donau",
  regionLong: "Wachau · Niederösterreich · UNESCO-Weltkulturerbe",

  heroVariant: "center",

  claim: "Campingurlaub mit Blick auf Dürnstein",
  claimEmphasis: "Blick auf Dürnstein",
  emailDetail: "euer Blick auf Dürnstein direkt vom Donaustellplatz",
  intro:
    "Direkt am rechten Donauufer in Rossatz, mitten in der Wachau, findest du ebene Stellplätze für Wohnmobil, Wohnwagen und Zelt — viele in erster Reihe am Fluss, mit Blick hinüber nach Dürnstein.",

  logo: { src: `${IMG}/logo-b27f0faf93.png`, alt: "Wachau-Camping Rossatz Logo" },

  statement: {
    text: "Bei uns reicht der Blick über die Donau bis hinüber nach Dürnstein.",
    emphasis: "nach Dürnstein",
  },

  pillars: [
    {
      title: "Plätze direkt an der Donau",
      text: "Die Donaustellplätze liegen in erster Reihe am Fluss — Wohnwagen aufstellen und aufs Wasser schauen.",
      image: { src: `${IMG}/gallery-2c76bdd28c.webp`, alt: "Wohnwagen mit Donaublick nach Dürnstein am Wachau-Camping Rossatz" },
    },
    {
      title: "Persönlich empfangen",
      text: "Kristina Roller und ihr Team begrüßen dich persönlich an der Rezeption — Anmeldung am besten vorab.",
      image: { src: `${IMG}/gallery-c868540874.webp`, alt: "Persönliche Anmeldung an der Rezeption von Wachau-Camping Rossatz" },
    },
    {
      title: "Baden in der Donau",
      text: "Der flache Schotterstrand vor dem Platz lädt zum Baden in der Donau — gegenüber grüßt Dürnstein.",
      image: { src: `${IMG}/gallery-75f537f0d4.webp`, alt: "Badestrand an der Donau mit Blick auf Dürnstein" },
    },
  ],

  usps: [
    "Donaustellplätze am Fluss",
    "Gratis WLAN",
    "Hunde willkommen",
    "Brötchenservice",
    "Tennisplatz",
    "Restaurants am Platz",
  ],

  trust: {
    heading: "Warum Gäste in Rossatz bleiben",
    headingEmphasis: "Rossatz",
    intro:
      "Seit Jahren ein vertrauter Platz an der Donau: ruhige Lage in Österreichs größter Marillengemeinde, kurze Wege zu Strand, Radweg und Rezeption — und ein Team, das jeden Gast noch persönlich kennt.",
  },

  awards: [],

  saison: { von: "März", bis: "November" },

  hero: {
    aerial: { src: `${IMG}/gallery-61b18cb649.webp`, alt: "Stellplätze von Wachau-Camping Rossatz zwischen blühenden Marillenbäumen" },
  },

  breather: {
    image: { src: `${IMG}/gallery-bb36bfe1eb.webp`, alt: "Abendlicht über den Weinterrassen und der Donau in der Wachau" },
    line: "Die Wachau — UNESCO-Weltkulturerbe, gleich vor dem Vorzelt.",
  },

  camping: {
    heading: "Camping am rechten Donauufer",
    intro:
      "Vom Donaustellplatz bis zur Zeltwiese: ebene Plätze, CEE-Strom und kurze Wege zu Strand, Restaurant und Radweg.",
    features: [
      {
        title: "Donaustellplätze mit Aussicht",
        text: "Geräumige, ebene Plätze für Wohnmobil und Wohnwagen — die Donaustellplätze am Wasser sind besonders gefragt.",
        image: { src: `${IMG}/gallery-f78b6edcce.webp`, alt: "Moderne Stellplätze für Wohnmobile am Wachau-Camping Rossatz" },
      },
      {
        title: "Zeltwiese überm Strom",
        text: "Eigene Wiesenplätze fürs Zelt mit freiem Blick über die Donau nach Dürnstein — vom kleinen bis zum großen Zelt.",
        image: { src: `${IMG}/gallery-09fcf081d9.webp`, alt: "Zeltplätze auf der Wiese mit Blick auf Dürnstein" },
      },
      {
        title: "Sonnenplätze zum Verweilen",
        text: "Ein schattiger Baum, der Tisch im Grünen und die Donau im Blick — hier genießt du den Urlaubstag in Ruhe.",
        image: { src: `${IMG}/gallery-4859239a13.webp`, alt: "Sitzplatz im Grünen mit Donaublick am Camping Rossatz" },
      },
      {
        title: "Zwei Restaurants am Platz",
        text: "Die Lokale Strandgut und Alte Schiffstation haben geöffnet — Einkehr mit Donaublick ohne lange Wege.",
        image: { src: `${IMG}/gallery-a2b1e96db2.webp`, alt: "Restaurantterrasse mit Sonnenschirmen am Wachau-Camping Rossatz" },
      },
      {
        title: "Persönliche Anmeldung",
        text: "An der Rezeption reservierst du Frühstücksgebäck und buchst den Tennisplatz — um Voranmeldung wird gebeten.",
        image: { src: `${IMG}/gallery-70e504c81e.webp`, alt: "Rezeptionsgebäude von Wachau-Camping Rossatz" },
      },
      {
        title: "Direkt am Donauradweg",
        text: "Der Donauradweg führt unmittelbar am Platz vorbei — mit der Rollfähre geht es bequem ans andere Ufer.",
        image: { src: `${IMG}/gallery-7e8ca1e173.webp`, alt: "Radfahrer am Donauradweg mit Blick auf Dürnstein" },
      },
    ],
  },

  aktivitaeten: {
    heading: "Ausflüge in die Wachau",
    intro:
      "Burgen, Klöster und Winzerorte liegen rundum am Donauufer — die schönsten Ziele erreichst du per Rad, Schiff oder kurzem Spaziergang.",
    items: [
      {
        title: "Dürnstein",
        text: "Die Kuenringerstadt mit dem markanten blauen Kirchturm liegt direkt gegenüber — Wahrzeichen der Wachau.",
        image: { src: `${IMG}/gallery-d48a1b412e.webp`, alt: "Dürnstein mit dem blauen Stiftskirchturm an der Donau" },
      },
      {
        title: "Stift Göttweig",
        text: "Das barocke Benediktinerstift thront überm Donautal — Weltkulturerbe mit weitem Blick über die Wachau.",
        image: { src: `${IMG}/gallery-0603a4a969.webp`, alt: "Stift Göttweig über dem Donautal" },
      },
      {
        title: "Burgruine Aggstein",
        text: "Hoch über der Donau thront die alte Raubritterburg der Kuenringer — ein Ausflug mit großem Panorama.",
        image: { src: `${IMG}/gallery-34d8d5dd32.webp`, alt: "Burgruine Aggstein hoch über der Donau" },
      },
      {
        title: "Krems",
        text: "Das Tor zur Wachau: historische Altstadt, Kunstmeile und Heurige nur wenige Kilometer flussabwärts.",
        image: { src: `${IMG}/gallery-45e962afa7.webp`, alt: "Steiner Tor in der Altstadt von Krems" },
      },
      {
        title: "Rollfähre über die Donau",
        text: "Mit Rad und Gepäck setzt die Rollfähre Arnsdorf-Spitz ans linke Ufer über — praktisch für Radtouren.",
        image: { src: `${IMG}/gallery-5e0dfb3cd7.webp`, alt: "Rollfähre mit Radfahrern über die Donau" },
      },
      {
        title: "Mautern & Römerweg",
        text: "Eine der ältesten Römersiedlungen am Eingang der Wachau — Kulturweg durch die hübsche kleine Altstadt.",
        image: { src: `${IMG}/gallery-f679f20084.webp`, alt: "Mautern an der Donau mit Brücke und Stift Göttweig im Hintergrund" },
      },
    ],
  },

  anreise: {
    heading: "Dein Weg nach Rossatz",
    modes: [
      {
        title: "Mit dem Auto",
        text: "Über die A1 (Abfahrt Melk) oder die S33 bis Krems an die Donau. Hinweis: Die Donaubrücke Mautern ist gesperrt — über die St. Pöltner Brücke (B37) in Krems ausweichen.",
      },
      {
        title: "Mit Rad & Schiff",
        text: "Der Donauradweg führt direkt am Platz vorbei; die Rollfähre Arnsdorf-Spitz verbindet dich mit dem linken Donauufer.",
      },
      {
        title: "Mit der Bahn",
        text: "Bahnstation Krems an der Donau, von dort weiter mit Bus oder Taxi ans rechte Ufer nach Rossatzbach.",
      },
    ],
  },

  galerie: {
    heading: "Wachau pur",
    headingEmphasis: "Wachau",
    intro:
      "Strand, Weinterrassen und Donaustimmung — ein paar Eindrücke vom Platz und seiner Umgebung.",
    tag: "März bis November",
    images: [
      { src: `${IMG}/gallery-1dd0bed516.webp`, alt: "Baden am Donaustrand mit Blick auf Dürnstein" },
      { src: `${IMG}/gallery-528a477b2e.webp`, alt: "Weinterrassen und Donautal bei Spitz in der Wachau" },
      { src: `${IMG}/gallery-cbedba3e41.webp`, alt: "Sommerabend an der Donau bei Dürnstein" },
      { src: `${IMG}/gallery-597bd1a8ea.webp`, alt: "Rossatz inmitten der Marillengärten und Weinberge" },
    ],
  },

  booking: {
    heading: "Jetzt deinen Donauplatz sichern",
    headingEmphasis: "Donauplatz",
    intro:
      "Sag uns Zeitraum und Personen — Kristina Roller meldet sich persönlich mit deiner Verfügbarkeit zurück.",
    pricesArePlaceholder: false,
    priceNote:
      "Richtpreise Nebensaison · Stellplatz inkl. 2 Personen · zzgl. Strom (€ 5/Tag) und Ortstaxe (€ 2,60 p. P.) · Hauptsaison etwas höher",
    highlight: { title: "Plätze direkt am Fluss", text: "Die Donaustellplätze liegen in erster Reihe am Wasser." },
    categories: [
      { id: "donau", label: "Donaustellplatz", perNight: 39, perExtraGuest: 10 },
      { id: "standard", label: "Stellplatz", perNight: 35, perExtraGuest: 10 },
      { id: "zelt", label: "Zeltplatz", perNight: 28, perExtraGuest: 10 },
    ],
  },

  kontakt: {
    coords: { lat: 48.388567, lng: 15.516357, approx: true },
    tel: "+43 676 848814800",
    telHref: "tel:+43676848814800",
    mail: "camping@rossatz-arnsdorf.at",
    adresse: "Rossatzbach 21 · 3602 Rossatzbach · Wachau",
  },

  languages: ["DE"],

  nav: [
    { label: "Camping", href: "#camping", children: [
      { label: "Stellplätze", href: "#camping" },
      { label: "Zelten", href: "#camping" },
    ]},
    { label: "Ausflüge", href: "#aktivitaeten" },
    { label: "Galerie", href: "#galerie" },
    { label: "Preise & Anreise", href: "#booking", children: [
      { label: "Preise", href: "#booking" },
      { label: "Anreise", href: "#anreise" },
    ]},
  ],
};

export default wachaucampingRossatz;
