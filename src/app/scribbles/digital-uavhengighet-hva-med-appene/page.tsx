import { A, H1, Li, P } from "@/components";
import DateDisplay from "@/components/atoms/DateDisplay";
import { FlexRow, SectionHeader } from "@torthu/jacketui-components";

export const metadata = {
  title: "Digital uavhengighet: hva med alle disse viktige appene da?",
  description:
    "Vi har solgt sjelen til amerikanske IT-monopolister, er det så lurt da?",
  authors: [{ name: "Torstein Thune" }],
};

export default function Page() {
  return (
    <>
      <H1>Digital uavhengighet: hva med alle disse viktige appene da?</H1>
      <FlexRow variant="tight">
        Publisert <DateDisplay as="span" date={new Date("2025-09-30")} />
        Oppdatert <DateDisplay as="span" date={new Date("2025-10-03")} />
      </FlexRow>
      <P>
        Kritisk norsk infrastruktur som BankID må fungere, uavhengig av
        politiske vinder i verden, men vi har solgt sjelen til amerikanske
        IT-monopolister, er det så lurt da?
      </P>

      <SectionHeader>Apper og appbutikker er praktisk</SectionHeader>
      <P>
        Gjennom flere år har Norge beveget seg mot en sikrere og enklere
        fremtid. Kodebrikker er byttet ut med BankID-appen, tofaktorløsninger
        lever i Google Authenticator eller Microsoft Authenticator, bankene
        leverer apper som lever i lukkede, sikrede økosystemer.
      </P>
      <P>
        Gjennom en årrekke har vi også fått stadig strengere sikkerhetsrutiner.
        Apper kan i dag sjekke om de kjører på et operativsystem som Google
        eller Apple går god for, kort forklart om det er det samme
        operativsystemet som mobilen ble levert med, og så nekte å starte dersom
        de oppdager at noen har tuklet med det.
      </P>
      <P>
        Google Play og App Store er jo store og sikre systemer som vi kan stole
        på. Eller?
      </P>

      <SectionHeader>Monopolistene har kontroll</SectionHeader>
      <P>
        Det er iferd med å skje drastiske ting på kontrollfronten. På den ene
        siden har EU satt krav om at man skal kunne{" "}
        <A href="https://support.apple.com/en-gb/117767">
          installere applikasjoner fra alternative kilder på iOS
        </A>{" "}
        gjennom sin forordning om digitale markeder (DMA). På den andre siden
        har Google, kanskje inspirert av hvordan Apple kjemper mot kravene, sagt
        at de skal kreve såkalt attestering av apputviklere fra og med neste år.
      </P>
      <P>
        Attestering betyr at alle applikasjoner som installeres, uavhengig av om
        de kommer fra Google Play eller andre kilder, må være laget av personer
        Google kjenner til og godkjenner. Dette betyr for utviklere at de må
        registrere seg og identifisere seg hos Google - noe som involverer å
        laste opp identitetsdokumenter og betale en registreringsavgift. I retur
        får utvikleren en signatur som må brukes når man distribuerer
        applikasjonen. Denne prosessen, og enda viktigere signaturen,
        kontrollerer Google.
      </P>
      <P>
        Google argumenterer med at attesteringen er et sikkerhetstiltak, og
        refererer selv til at det er{" "}
        <A href="https://android-developers.googleblog.com/2025/08/elevating-android-security.html)">
          over 50 ganger mer skadelig programvare tilgjengelig gjennom
          tredjepartstjenester enn det er gjennom Googles egen Play Store
        </A>
        . Attesteringen gjør at Google kan, uten å konferere med andre, trekke
        tilbake muligheten for å installere en gitt applikasjon på Android.
      </P>
      <P>
        Hva hvis Google plutselig sier at du ikke får lov til å installere
        BankID-appen?
      </P>
      <P>
        Hva skjer egentlig om kritisk norsk infrastruktur plutselig strider mot
        Apple og Googles retningslinjer og policyer? Hva hvis USA plutselig
        krever at disse selskapene skal hindre kritisk norsk infrastruktur?
      </P>
      <P>
        Ville vi stolt på kinesiske Tencent eller russiske Yandex med makten til
        å bestemme hvilke applikasjoner vi kan installere? Uansett hvor disse
        selskapene skulle komme fra er det risiko for at politikken kan komme i
        veien, har vi land vi kan stole på til evig tid?
      </P>
      <P>
        Potensielt kritiske apper inkluderer autentisering (BankID), bank og
        finans, logistikk, transport og informasjon. På min mobil finner jeg
        følgende applikasjoner, ville disse fungert uten Google og Apple?
      </P>
      <ol>
        <Li>BankID (Autentisering)</Li>
        <Li>Entur (Transport)</Li>
        <Li>Helsenorge (Informasjon)</Li>
        <Li>Nordea Mobile (Bank)</Li>
        <Li>Nordnet (Bank)</Li>
        <Li>Norwegian (Transport)</Li>
        <Li>Politiloggen (Informasjon)</Li>
        <Li>Posten (logistikk)</Li>
        <Li>PostNord Norge (Logistikk)</Li>
        <Li>Ruter (Transport)</Li>
        <Li>RuterBillett (Transport)</Li>
        <Li>Skyss Billett (Transport)</Li>
        <Li>Sparebank1 Engangskode (Autentisering)</Li>
        <Li>Sparebanken Norge (Bank)</Li>
        <Li>Sparebank1 Mobilbank (Bank)</Li>
        <Li>Vigilo (Informasjon)</Li>
        <Li>Vipps (Bank)</Li>
        <Li>Vy (Transport)</Li>
      </ol>

      <SectionHeader>Hva kan vi gjøre?</SectionHeader>
      <P>
        Kritisk norsk infrastruktur må fungere utenfor lukkede amerikanske
        systemer. Det betyr at vi burde hatt BankID-applikasjoner som fungerer
        på vanlige datamaskiner, med Windows, MacOS eller enda viktigere Linux.
        Vi burde også ha BankID-varianter som fungerer på Android-varianter som
        ikke drives av Google slik som{" "}
        <A href="https://grapheneos.org/">GrapheneOS</A> og{" "}
        <A href="https://e.foundation/e-os/">/e/OS</A> og alternativer slik som
        finske <A href="https://sailfishos.org/">SailfishOS</A>.
      </P>

      <SectionHeader>Alternative appbutikker</SectionHeader>
      <P>
        Mens man på iOS aldri har hatt mulighet til å bevege seg utenfor Apple
        sitt eget økosystem har man på Android siden starten kunnet installere
        egne applikasjoner, såkalte apk-er, utenom Google Play. Dette kalles
        &quot;sideloading&quot;. Dette er en prosess som kan virke innviklet og
        skummelt for den jevne bruker, men har latt et rikt økosystem av
        uavhengige applikasjoner blomstre litt utenfor allfarvei.
      </P>
      <P>
        En alternativ appbutikk, som utelukkende består av{" "}
        <A href="https://en.wikipedia.org/wiki/Free_and_open-source_software">
          fri programvare
        </A>
        , er <A href="https://f-droid.org/">F-Droid</A>. Her har man mulighet
        til å laste ned programvare som Google ikke nødvendigvis har lyst til å
        tilby i sin egen appbutikk, slik som Youtube Vanced - en
        youtube-applikasjon der man slipper reklame.
      </P>
      <P>
        Et annet alternativ er{" "}
        <A href="https://store.auroraoss.com/">Aurora Store</A>, som
        redistribuerer applikasjoner fra blant annet Google Play og Samsung
        Galaxy Store, slik at man slipper å bruke Google og Samsung sine egne
        løsninger. Dette lar deg installere applikasjoner på Android-varianter
        som ikke har disse butikkene forhåndsinstallert.
      </P>

      <SectionHeader>Endringslogg</SectionHeader>
      <ul>
        <Li>
          <DateDisplay as="span" date={new Date("2025-10-03")} />: La til lenke
          til Forordning om digitale markeder (DMA) og sorterte applisten
          alfabetisk.
        </Li>
      </ul>
    </>
  );
}
