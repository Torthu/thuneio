import { A, FlexCol, H1, Li, P, SectionHeader, View } from "@/components";

export default function Page() {
  return (
    <View title="Digital uavhengighet: hva med alle disse viktige appene da?">
      <FlexCol variant="default" className="gap-4 mb-20">
        <H1>Digital uavhengighet: hva med alle disse viktige appene da?</H1>
        <P>
          Vi har solgt sjelen til amerikanske IT-monopolister, er det så lurt
          da?
        </P>

        <SectionHeader>Apper og appbutikker er praktisk</SectionHeader>
        <P>
          Gjennom flere år har Norge beveget seg mot en sikrere og enklere
          fremtid. Kodebrikker er byttet ut med BankID-appen, tofaktorløsninger
          lever i Google Authenticator eller Microsoft Authenticator, bankene
          leverer apper som lever i lukkede, sikrede økosystemer.
        </P>
        <P>
          Google Play og App Store er jo store og sikre systemer som vi kan
          stole på. Eller?
        </P>

        <SectionHeader>Alternative appbutikker</SectionHeader>
        <P>
          Mens man på iOS aldri har hatt mulighet til å bevege seg utenfor Apple
          sitt eget økosystem har man på Android siden starten kunnet installere
          egne applikasjoner, såkalte apk-er, utenom Google Play. Dette kalles
          &quot;sideloading&quot;. Dette er en prosess som kan virke innviklet
          og skummelt for den jevne bruker, men har latt et rikt økosystem av
          uavhengige applikasjoner blomstre litt utenfor allfarvei.
        </P>
        <P>
          En alternativ appbutikk, som utelukkende består av{" "}
          <A href="https://en.wikipedia.org/wiki/Free_and_open-source_software">
            fri programvare
          </A>
          , er <A href="https://f-droid.org/">F-Droid</A>. Her har man mulighet
          til å laste ned programvare som Google ikke nødvendigvis har lyst til
          å tilby i sin egen appbutikk, slik som Youtube Vanced - en
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

        <SectionHeader>Monopolistene har kontroll</SectionHeader>
        <P>
          Det er iferd med å skje drastiske ting på kontrollfronten. På den ene
          siden har EU satt krav om at man skal kunne{" "}
          <A href="https://support.apple.com/en-gb/117767">
            installere applikasjoner fra alternative kilder på iOS
          </A>
          . På den andre siden har Google, kanskje inspirert av hvordan Apple
          kjemper mot kravene, sagt at de skal kreve såkalt attestering av
          apputviklere fra og med neste år.
        </P>
        <P>
          Attestering betyr at alle applikasjoner som installeres, uavhengig av
          om de kommer fra Google Play eller andre kilder, må være laget av
          personer Google kjenner til og godkjenner. Dette betyr for utviklere
          at de må registrere seg og identifisere seg hos Google - noe som
          involverer å laste opp identitetsdokumenter og betale en
          registreringsavgift. I retur får utvikleren en signatur som må brukes
          når man distribuerer applikasjonen. Denne prosessen, og enda viktigere
          signaturen, kontrollerer Google.
        </P>
        <P>
          Google kan da, uten å konferere med andre, trekke tilbake muligheten
          for å installere en gitt applikasjon på Android.
        </P>
        <P>
          Hva skjer egentlig om kritisk norsk infrastruktur plutselig strider
          mot Apple og Googles retningslinjer og policyer? Hva hvis USA
          plutselig krever at disse selskapene skal hindre kritisk norsk
          infrastruktur? Hva hvis de finner på å gjøre det på egenhånd?
        </P>
        <P>
          Potensielt kritiske apper inkluderer autentisering (BankID), bank og
          finans, logistikk, transport og informasjon. På min mobil finner jeg
          følgende applikasjoner, ville disse fungert uten Google og Apple?
        </P>
        <ol>
          <Li>Posten (logistikk)</Li>
          <Li>Sparebanken Norge (Bank)</Li>
          <Li>Sparebank1 Engangskode (Autentisering)</Li>
          <Li>Vipps (Bank)</Li>
          <Li>Skyss Billett (Transport)</Li>
          <Li>Sparebank1 Mobilbank (Bank)</Li>
          <Li>Nordnet (Bank)</Li>
          <Li>BankID (Autentisering)</Li>
          <Li>Entur (Transport)</Li>
          <Li>Norwegian (Transport)</Li>
          <Li>Ruter (Transport)</Li>
          <Li>RuterBillett (Transport)</Li>
          <Li>Vy (Transport)</Li>
          <Li>PostNord Norge (Logistikk)</Li>
          <Li>Helsenorge (Informasjon)</Li>
          <Li>Nordea Mobile (Bank)</Li>
          <Li>Politiloggen (Informasjon)</Li>
          <Li>Vigilo (Informasjon)</Li>
        </ol>

        <SectionHeader>Hva kan vi gjøre?</SectionHeader>
        <P>
          Kritisk norsk infrastruktur må fungere utenfor lukkede amerikanske
          systemer. Det betyr at vi burde hatt BankID-applikasjoner som fungerer
          på vanlige datamaskiner, med Windows, MacOS eller enda viktigere
          Linux. Vi burde også ha BankID-varianter som fungerer på
          Android-varianter som ikke drives av Google slik som{" "}
          <A href="https://grapheneos.org/">GrapheneOS</A> og{" "}
          <A href="https://e.foundation/e-os/">/e/OS</A> og alternativer slik
          som finske <A href="https://sailfishos.org/">SailfishOS</A>.
        </P>

        <SectionHeader>Videre lesning</SectionHeader>
        <A href="https://f-droid.org/2025/09/29/google-developer-registration-decree.html">
          F-Droid and Google&apos;s Developer Registration Decree (29. september
          2025; engelsk)
        </A>
      </FlexCol>
    </View>
  );
}
