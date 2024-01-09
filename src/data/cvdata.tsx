import { A, P } from "../components/atoms";

const data = {
  summary: {
    no: (
      <>
        <P>
          Torstein er en senior frontend-utvikler med mange års erfaring fra
          både medie- og forsikringsbransjen. Torstein ledet i flere år
          utviklingen av et rammeverk for utvikling av brukergrensesnitt til
          TV-bokser. Hvis du har Altibox i veggen har du sannsynligvis brukt den
          elektroniske program-guiden han laget for dem i 2017.
        </P>
        <P>
          Torstein får gode tilbakemeldinger fra sine teammedlemmer; han jobber
          strukturert, han er bestemt når det trengs, og en fleksibel og dyktig
          bidragsyter i diskusjoner og planlegging. Han er god til å få oversikt
          og se de store linjene når det kommer til arkitektur og strukturering
          av kode.
        </P>
      </>
    ),
    en: (
      <>
        <P>
          Torstein is a senior frontend developer with several years of
          experience from the media, insurance and finance industries. For
          several years Torstein lead the development of a framework for
          development of user interfaces for set-top boxes. If you&apos;ve ever
          used the service provider Altibox, you&apos;ve probably used the
          electronic program guide he made for them in 2017.
        </P>
        <P>
          Torstein gets good feedback from his team. He is structured,
          determined when needed, and is a flexible and skilled contributor in
          discussions and planning meetings. He is good at getting an overview
          and seeing the big picture when it comes to architecture and code
          structure.
        </P>
      </>
    ),
  },
  education: [
    {
      start: new Date(2011, 7),
      end: new Date(2013, 5),
      institution: {
        no: "Universitetet i Bergen",
        en: "University of Bergen",
      },
      degree: {
        no: "Master i Informasjonsvitenskap",
        en: "Master of Information Science",
      },
    },
    {
      start: new Date(2008, 7),
      end: new Date(2011, 5),
      institution: {
        no: "Universitetet i Bergen",
        en: "University of Bergen",
      },
      degree: {
        no: "Bachelor i Kognitiv Vitenskap",
        en: "Bachelor of Cognitive Science",
      },
    },
  ],
  employers: [
    {
      company: "Rainfall",
      industry: { no: "Konsulenthus", en: "Consultancy" },
      start: new Date(2022, 6),
      end: new Date(),
      role: {
        no: "Seniorkonsulent",
        en: "Senior Consultant",
      },
      summary: {
        no: (
          <>
            Torstein arbeider i dag som en senior frontend-utvikler hos{" "}
            <A href="https://rainfall.no">Rainfall</A>.
          </>
        ),
        en: (
          <>
            Torstein is currently working as a senior front-end developer
            consultant at <A href="https://rainfall.no">Rainfall</A>.
          </>
        ),
      },
    },

    {
      company: "Frende Forsikring",
      industry: { no: "Forsikring", en: "Insurance" },
      start: new Date(2019, 7),
      end: new Date(2022, 7),
      role: {
        no: "Seniorutvikler",
        en: "Senior Developer",
      },
      summary: {
        no: (
          <>
            Jobbet i et semi-autonomt team med ansvar for{" "}
            <A href="https://frende.no">Frende.no</A> og{" "}
            <A href="https://www.frende.no/nettbutikk/">Frendes nettbutikk</A>.
            Var med å utforme arkitekturen og frontenden til Frendes omskrevede
            nettbutikk som del av deres selvbetjentsatsning. Var sentral i
            prosjekter for å lage veivisere for personforsikringer.
          </>
        ),
        en: (
          <>
            Worked in a semi-autonomous team with the responsibility for
            Frende&apos;s website (<A href="https://frende.no">Frende.no</A>)
            and{" "}
            <A href="https://www.frende.no/nettbutikk/">
              Frende&apos;s web shop
            </A>
            . Contributed to forming the architecture and frontend of
            Frende&apos;s rewritten web shop as part of their self-service
            initiative. Had a central position in the development of wizards for
            personal insurances (namely health insurance, life insurance and
            disability insurance).
          </>
        ),
      },
    },

    {
      company: "Sixty",
      industry: { no: "Mediateknolgi", en: "Media Tech" },
      start: new Date(2018, 0),
      end: new Date(2019, 4),
      role: {
        no: "Arkitekt",
        en: "Architect",
      },
      summary: {
        no: "Hovedansvar for å designe og utvikle et internt rammeverk og abstraksjonslag for å lage TV-applikasjoner på ulike plattformer, spesielt Huawei/Android, Zenterio/Linux og Google TV. Teamet leverte applikasjoner og fullverdige TV-opplevelser til en rekke TV-distributører i Europa.",
        en: "Responsibility for designing and developing an internal framework and abstraction layer for creating TV-applications for different platforms, especially Huawei/Android, Zenterio/Linux and Google TV. The team delivered applications and full TV-UIs to a number of different TV-distributors across Europe.",
      },
    },

    {
      company: "Sixty",
      industry: { no: "Mediateknolgi", en: "Media Tech" },
      start: new Date(2015, 9),
      end: new Date(2018, 0),
      role: {
        no: "Techlead",
        en: "Tech Lead",
      },
      summary: {
        no: "Ledet et utviklingsteam på 6 personer som hadde ansvar for utvikling og vedlikehold av RiksTVs smartportal og Altibox sin TV-boks. Ledet i tillegg utviklingen av et white-label produkt, Ease TV, og leveranse av dette produktet til en spansk tv-distributør kalt Agile TV.",
        en: "Lead a developer team of 6 who had the responsibility of developing and maintaining RiksTV's smart portal and Altibox's Set-Top-Box. Additionally I lead the development of a white-label Set-Top-Box/TV-UI called Ease TV, and deliveries of this white-label UI to the Spanish TV-distributor Agile TV (by MasMovil).",
      },
    },

    {
      company: "Sixty",
      industry: { no: "Mediateknolgi", en: "Media Tech" },
      start: new Date(2013, 8),
      end: new Date(2015, 8),
      role: {
        no: "Interaktiv utvikler",
        en: "Interactive Developer",
      },
      summary: {
        no: "Jobbet som utvikler på både tradisjonelle nettsider og som utvikler av flere Tv-applikasjoner til RiksTVs smartportal. Utviklet blant annet applikasjoner for strømming av innhold for barn, “Barnas Favoritter”, filmleie og TV-arkiv innhold.",
        en: "Worked as a developer on both traditional websites and as a developer of several TV-applications for RiksTV's smart portal. Amongst others I developed an application for streaming of content for children called “Barnas Favoritter“ (“Childrens' Favourites“), video on demand and TV-archive content.",
      },
    },
  ],

  hobbyProjects: [
    {
      start: new Date(2020, 9),
      end: new Date(),
      client: undefined,
      employer: undefined,
      title: { no: "Microbrew.it", en: "Microbrew.it" },
      technologies: [
        "Next",
        "Electron",
        "Ionic",
        "React",
        "Tailwind",
        "Vite",
        "Typescript",
      ],
      summary: {
        no: "Nettsted og applikasjon med informasjon og kalkulatorer for ølbrygging.",
        en: "Website and application with information and calculators for beer brewing.",
      },
    },
  ],

  projects: [
    {
      start: new Date(2023, 9),
      end: new Date(),
      client: "KS Digitale Fellestjenester AS",
      employer: "Rainfall",
      title: { no: "KS Fiks", en: "KS Fiks" },
      industry: { no: "Offentlig sektor", en: "Public Sector" },
      role: { no: "Seniorutvikler", en: "Senior Developer" },
      technologies: ["Angular", "NGRX", "NX", "SASS", "Typescript"],
      summary: {
        no: 'Vedlikehold og videreutvikling av KS\' fiks platform, som inneholder bl.a innbyggerrettede tjenester som "Min Kommune".',
        en: 'Development and maintenance of KS\' fiks platform, that contains, amongst other services, citizen directed services such as "Min Kommune" ("My County").',
      },
    },
    {
      start: new Date(2022, 9),
      end: new Date(2022, 11),
      client: "Sbanken",
      employer: "Rainfall",
      title: { no: "Betalingsgrenser", en: "Payment limits" },
      industry: { no: "Bank og Finans", en: "Banking" },
      role: { no: "Seniorutvikler", en: "Senior Developer" },
      technologies: [
        "React",
        "Redux",
        "Redux-Sagas",
        "Styled Components",
        "Typescript",
        "Webpack",
        "Turbo",
      ],
      summary: {
        no: "Sbanken ville innføre betalingsgrenser for overføringer og betalinger både innenlands og utenlands. Gjennom prosjektet implementerte vi både konfigurasjonsmuligheter for beløpsgrenser samt validering og feilhåndtering i de ulike betalingsskjermene.",
        en: "Sbanken wanted to introduce payment limits for transfers and payments both domestically and internationally. Through the project we implemented both a micro frontend react application for configuration of payment limits as well as validation and error handlig for the different payment forms.",
      },
    },
    {
      start: new Date(2021, 3),
      end: new Date(2021, 11),
      client: "Frende Forsikring",
      employer: "Frende Forsikring",
      title: {
        no: "Selvbetjent salg av Frendes personforsikringsprodukter",
        en: "Self-service sales of Frende's life insurance products.",
      },
      technologies: ["React", "React Hooks", "Typescript", "SVG", "SCSS"],
      industry: { no: "Forsikring", en: "Insurance" },
      role: { no: "Seniorutvikler", en: "Senior Developer" },
      summary: {
        no: "Frende er et selskap delt i to datterselskaper med ansvar for hvert sitt forsikringsdomene: skadeforsikring (Frende Skade) og personforsikring (Frende Liv). Prosjektet gikk på å få til selvbetjente veivisere for produktporteføljen i Frende Liv. Gjennom prosjektet lagde vi en veiviser for kjøp av personforsikringsprodukter som både ivaretok lovpålakte krav om veiledning og personvern.",
        en: "Through the project we created an interactive wizard with law mandated councelling and privacy measures.",
      },
    },
    {
      start: new Date(2019, 7),
      end: new Date(2022, 7),
      client: "Frende Forsikring",
      employer: "Frende Forsikring",
      title: {
        no: "Ny nettbutikk",
        en: "New web shop",
      },
      technologies: [
        "React",
        "React Hooks",
        "Typescript",
        "Javascript",
        "SCSS",
      ],
      industry: { no: "Forsikring", en: "Insurance" },
      role: { no: "Seniorutvikler", en: "Senior Developer" },
      summary: {
        no: 'Utvikling av ny nettbutikk med høyere grad av støtte for tilpassing, integrasjoner og salg i eksterne banker. Utviklingsprosessen var sterkt inspirert av boken "Domain Modeling Made Functional", både med tanke på modellering og arkitekturvalg.',
        en: 'We developed a new web shop with a higher degree of customizability for integration in external banks (who sold the insurance products). The development process was strongly influenced by the book "Domain Modeling Made Functional", both with regards to modelling and architectural choices.',
      },
    },
    {
      start: new Date(2019, 3),
      end: new Date(2019, 5),
      client: "Cyta Ltd",
      employer: "Sixty",
      title: {
        no: "Interaktiv fotballgrafikk til Cyta",
        en: "Interactive football graphics for Cyta",
      },
      technologies: ["Coffeescript", "Javascript", "Android", "SCSS"],
      industry: { no: "Media", en: "Media/TV" },
      role: { no: "Seniorutvikler", en: "Senior Developer" },
      summary: {
        no: "Cyta, en tv og telekomaktør på Kypros, ønsket å forbedre sine fotballsendinger ved å tilby interaktiv grafikk med blant annet lagoppstilling, ligatabell og foreløpige resultat i samtidige kamper. Dette ble av Cyta definert som et testprosjekt for å se om slike interaktive funksjoner via TV-dekoder virket konkurransefremmende. Torstein sin rolle var frontend-arkitektur og utvikling av disse skjermene.",
        en: "Cyta, a TV and telecom action in Cyprus, wanted to improve their football offerings by providing interactive graphics with team lineups, league standings and preliminary results of parallel matches. This was defined as an innovation project to see if such interactive features through a Set-Top-Box proved to be a competetive advantage compared to alternative offerings. Torstein's role was front-end architecture and development.",
      },
    },

    {
      start: new Date(2018, 9),
      end: new Date(2019, 3),
      client: "Vivacom",
      employer: "Sixty",
      title: {
        no: "Nytt brukergrensesnitt til Vivacoms TV-dekoder",
        en: "New UI for Vivacom's set-top Box",
      },
      technologies: ["Coffeescript", "Javascript", "Android", "SCSS", "Grunt"],
      industry: { no: "Media", en: "Media/TV" },
      role: { no: "Seniorutvikler", en: "Senior Developer" },
      summary: {
        no: "Vivacom, det største teleselskapet i Bulgaria, ønsket å oppgradere TV-opplevelsen på sine TV-dekodere. Torstein bidro i rollen som arkitekt, inkludert verifisering av hvorvidt TV-boksen og den inkluderte nettleseren til Vivacom støttet komponentene til Sixtys TV-UI-rammeverk.",
        en: "Vivacom, the largest telecom company in Bulgaria, wanted to upgrade the user experience of their TV set-top boxes. Torstein's role was architecture, including verification of whether the box and its included embedded browser were compatible with Sixty's TV-UI product Ease TV.",
      },
    },

    {
      start: new Date(2017, 2),
      end: new Date(2019, 3),
      client: "Telekom Srbija",
      employer: "Sixty",
      title: {
        no: "Nytt brukergrensesnitt til Telekom Srbijas TV-dekoder",
        en: "New UI for Telekom Srbija's tet-top Box",
      },
      technologies: ["Coffeescript", "Javascript", "Android", "SCSS", "Grunt"],
      industry: { no: "Media", en: "Media/TV" },
      role: { no: "Seniorutvikler", en: "Senior Developer" },
      summary: {
        no: "Serbia Telekom, det største teleselskapet i Serbia, ønsket å oppgradere TV-opplevelsen på sine TV-dekodere. Torstein bidro gjennom å få en første versjon av brukergrensesnittet til å kjøre på boksene sammen med et demo-api i forbindelse med salgsprosessen.",
        en: "Telekom Srbija, the largest telekom company i Serbia, wanted to upgrade the experience of their set-top boxes. Torstein contributed through getting an early version of Ease TV to run on their bozes along with a demo-api as part of the sales process as well as contributing to customizing it to their content data API.",
      },
    },

    {
      start: new Date(2017, 4),
      end: new Date(2018, 3),
      client: "MasMovil",
      employer: "Sixty",
      title: {
        no: "Agile TV",
        en: "Agile TV",
      },
      technologies: [
        "Coffeescript",
        "Javascript",
        "Android",
        "Android TV",
        "SCSS",
        "Grunt",
      ],
      industry: { no: "Media", en: "Media/TV" },
      role: { no: "Seniorutvikler", en: "Senior Developer" },
      summary: {
        no: "MasMovil, et spansk telekomselskap, ønsket å gjøre et inntog i TV-distributør-markedet gjennom et nytt produkt kalt Agile TV. Prosjektet var å implementere en fullverdig smarttv-boks sammen med partnere Huawei, Technicolor og Google. Sammen laget vi en systemapplikasjon med blant annet en egen applikasjonslauncher, kanalliste med stømmer og data fra både digitalt bakkenett, Huaweis strømmeplattform og andre applikasjoner på Android TV-boksen. Systemapplikasjonen ble sertifisert av Google. Torstein sin oppgave var innsamling av funksjonelle krav, modellering og implementasjon av brukergrensesnittet.",
        en: "MasMovil, a Spanish telecom company, wanted to enter the TV-distributor market through a new product called Agile TV. The project was to implement a set-top box along with partners Huawei, Technicolor and Google. Together we made a system apk with our own application launcher, channel list with streams and data from DVB, Huawei's streaming platform and the channel API of the Android TV box. The system application was certified by Google. Torstein's job was gathering functional requirements, modelling and development of the UI.",
      },
    },

    {
      start: new Date(2017, 4),
      end: new Date(2018, 3),
      client: "Sixty",
      employer: "Sixty",
      title: {
        no: "Ease TV",
        en: "Ease TV",
      },
      technologies: ["Coffeescript", "SVG", "HTML", "SCSS", "Grunt"],
      industry: { no: "Medieteknologi", en: "Media/TV" },
      role: { no: "Techlead, Arkitekt", en: "Tech Lead, Architect" },
      summary: {
        no: "Sixty ønsket å styrke sin posisjon som en ledende aktør innen brukergrensesnitt til smart tv applikasjoner. Som del av dette ble et «white label» TV-grensesnitt kalt Ease TV utviklet. Torstein sin rolle var å stå for arkitektur, inkludert modellering og abstraksjoner for interaksjon med både ulike innholds-APIer og ulike system-APIer på ulike smartplattformer. Torstein var også sentral i arbeidet med å få en egen system-wrapper-apk til Android-bokser å bli godkjent av Google.",
        en: 'Sixty wanted to strengthen their position as a leading provider of UIs for smart tv/STB applications. As part of this a "white label" TV-UI called Ease TV was developed. Torstein&apos;s role was software architecture, including modelling and abstractons for consuming data from different content APIs and different system APIs on different platforms. Torstein was also central in the work on getting a system apk for Android TV boxes approved by Google.',
      },
    },

    {
      start: new Date(2014, 11),
      end: new Date(2017, 1),
      client: "Altibox",
      employer: "Sixty",
      title: {
        no: "Nytt dekoder-brukersnitt til Altibox",
        en: "New set-top box UI for Altibox",
      },
      technologies: ["Coffeescript", "Android", "SCSS", "HTML", "Grunt"],
      industry: { no: "Medieteknologi", en: "Media/TV" },
      role: { no: "Seniorutvikler", en: "Senior Developer" },
      summary: {
        no: "Altibox ønsket å styrke sin posisjon som en ledende TV-distributør i Norge. Sammen med samarbeidspartnere Huawei og Sixty leverte de ny infrastruktur, ny TV-boks og det da best likte TV-brukergrensesnittet i Norge. Torstein var sentral i utviklingen av blant annet TV-guiden og data-abstraksjonslag. Torstein jobbet også som del av prosjektet en periode i Nanjing, Kina, der Huawei har sin testorganisasjon og utviklingsavdeling for Android til TV-bruk.",
        en: "Altibox wanted to strengthen their position as a leading TV-distributor in Norway. Along with partners Huawei and Sixty they delivered new infrastructure, a new Set-Top-Box and the at the time best liked TV-UI in Norway. As part of the project Torstein was central in creating the electronic program guide and the data abstraction layer of the UI. Torstein also did a stint of functional testing/bugfixing at the Huawei Android for TV R&D division in Nanjing, China.",
      },
    },

    {
      start: new Date(2015, 4),
      end: new Date(2015, 9),
      client: "RiksTV",
      employer: "Sixty",
      title: {
        no: "Portal og TV-arkiv",
        en: "Portal and TV archive",
      },
      technologies: ["Coffeescript", "SVG", "Grunt"],
      industry: { no: "Medieteknologi", en: "Media/TV" },
      role: { no: "Utvikler", en: "Developer" },
      summary: {
        no: 'RiksTV ønsket å styrke sin posisjon innenfor strømming. Som del av satsningen ble det implementert en forside ("portal") og en arkiv-applikasjon "ukesarkiv" for å fronte alt innholdet RiksTV kunne tilby fra sine kanaler. Torstein stod for all brukergrensesnitt-utvikling på TV-boksen.',
        en: 'RiksTV wanted to strengthen its position within video on demand. As part of that initiative a front page (back office desked portal) and a TV archive application "week archive" were developed to front all the VOD vontent RiksTV could offer from their selection of TV channels. Torstein was responsible for all UI development on the Set-Top-Box.',
      },
    },

    {
      start: new Date(2013, 8),
      end: new Date(2017, 4),
      client: "RiksTV",
      employer: "Sixty",
      title: {
        no: "SF-kids/Barnas Favoritter",
        en: "SF-kids",
      },
      technologies: ["Coffeescript", "SVG", "Grunt"],
      industry: { no: "Media", en: "Media/TV" },
      role: { no: "Utvikler", en: "Developer" },
      summary: {
        no: 'Som del av RiksTVs fokus på strømming av "video on demand" utviklet Torstein flere applikasjoner. Et eksempel er strømmeapplikasjonen SF-kids (i starten kalt Barnas Favoritter) som var en tilpasset applikasjon for strømming av barneinnhold.',
        en: "As part of RiksTV's focus on streaming of \"video on demand\" Torstein developed several applications. One example is the streaming application SF-kids that was an application tailored for streaming childrens' content.",
      },
    },
  ],
};

export default data;
