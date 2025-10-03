import { A, P, Li } from "@/components";
import { H1, SectionHeader } from "@torthu/jacketui-components";

export const metadata = {
  title: "Design Systems",
  description: "A quick list of design systems for future inspiration.",
};

export default function DesignSystems() {
  return (
    <>
      <H1>Design systems</H1>
      <P>
        This is my personal collection of design systems from both the public
        and private sectors, both foreign and domestic (Norwegian).
      </P>

      <SectionHeader>Frameworks / Industry</SectionHeader>
      <P>Design systems meant for use in your own websites/apps.</P>
      <ul>
        <Li>
          <A href="https://carbondesignsystem.com/">
            Carbon Design System (IBM)
          </A>
        </Li>
        <Li>
          <A href="https://fluent2.microsoft.design/">Fluent 2 (Microsoft)</A>
        </Li>
        <Li>
          <A href="https://helios.hashicorp.design/">Helios (Hashicorp)</A>
        </Li>
        <Li>
          <A href="https://m3.material.io/">Material Design (Google)</A>
        </Li>
        <Li>
          <A href="https://orbit.kiwi/">Orbit (kiwi.com)</A>
        </Li>
        <Li>
          <A href="https://www.patternfly.org/">PatternFly (Red Hat)</A>
        </Li>
        <Li>
          <A href="https://design-system.w3.org/">W3C Design System</A>
        </Li>
      </ul>

      <SectionHeader>Governments</SectionHeader>
      <P>
        Official design systems for services provided by governments. There may
        be more systems in a country&apos;s public sector (see section below).
      </P>
      <ul>
        <Li>
          <A href="https://argob.github.io/poncho/">Argentina</A>
        </Li>
        <Li>
          <A href="https://gold.designsystemau.org/">Australia</A>
        </Li>
        <Li>
          <A href="https://design.gccollab.ca/">Canada</A>
        </Li>
        <Li>
          <A href="https://designsystem.gov.cz/">Czech Republic</A>
        </Li>
        <Li>
          <A href="https://brand.estonia.ee/?lang=en">Estonia</A>
        </Li>
        <Li>
          <A href="https://www.vlaanderen.be/digitaal-vlaanderen/onze-oplossingen/webplatform">
            Flanders (Belgium)
          </A>
        </Li>
        <Li>
          <A href="https://www.systeme-de-design.gouv.fr/">France</A>
        </Li>
        <Li>
          <A href="https://styleguide.bundesregierung.de/sg-de/">Germany</A>
        </Li>
        <Li>
          <A href="https://guide.services.gov.gr/">Greece</A>
        </Li>
        <Li>
          <A href="https://developers.italia.it/en/designers/">Italy</A>
        </Li>
        <Li>
          <A href="https://www.digitaleoverheid.nl/achtergrondartikelen/het-nl-design-system-van-en-voor-de-hele-overheid/">
            Netherlands
          </A>
        </Li>
        <Li>
          <A href="https://www.digital.govt.nz/standards-and-guidance/design-and-ux/new-zealand-government-design-system/">
            New Zealand
          </A>
        </Li>
        <Li>
          <A href="https://designsystemet.no">Norway</A>
        </Li>
        <Li>
          <A href="https://www.designsystem.tech.gov.sg/">Singapore</A>
        </Li>
        <Li>
          <A href="https://swiss.github.io/styleguide/en/">Switzerland</A>
        </Li>
        <Li>
          <A href="https://www.digital.govt.nz/standards-and-guidance/design-and-ux/new-zealand-government-design-system/">
            New Zealand
          </A>
        </Li>
        <Li>
          <A href="https://design-system.service.gov.uk/">United Kingdom</A>
        </Li>
        <Li>
          <A href="https://designsystem.digital.gov/">United States</A>
        </Li>
        <Li>
          <A href="https://diia-en.fedoriv.com/">Ukraine</A>
        </Li>
      </ul>

      <SectionHeader>Public Sector</SectionHeader>
      <P>Design systems meant for use by public sector.</P>
      <ul>
        <Li>
          <A href="https://aksel.nav.no/">Aksel (NAV / Norway)</A>
        </Li>
        <Li>
          <A href="https://altinn.github.io/designsystem-styleguide/">
            Altinn (Norway)
          </A>
        </Li>
        <Li>
          <A href="https://design.domstol.no">Elsa (Norwegian courts)</A>
        </Li>
        <Li>
          <A href="https://design.lillestrom.kommune.no/guide/">
            Fleetwood (Lillestrøm Kommune, Norwegian county)
          </A>
        </Li>
        <Li>
          <A href="https://hedwig.posten.no">
            Hedwig (Posten, Norwegian postal service)
          </A>
        </Li>
        <Li>
          <A href="https://designmanual.norgesnasjonalparker.no/">
            Norges Nasjonalparker (Norwegian national parks)
          </A>
        </Li>
        <Li>
          <A href="https://punkt.oslo.kommune.no/latest/">
            Punkt (Oslo Kommune Origo, Norwegian county)
          </A>
        </Li>
        <Li>
          <A href="https://skatteetaten.github.io/frontend-components/">
            Skatteetaten (Norwegian tax authorities)
          </A>
        </Li>
        <Li>
          <A href="https://swisspost-web-frontend.netlify.app/#/home">
            Swiss Post (Switzerland)
          </A>
        </Li>
      </ul>

      <SectionHeader>Private Sector</SectionHeader>
      <P>
        Design systems meant for internal developement teams/development for
        private sector products.
      </P>
      <ul>
        <Li>
          <A href="https://acorn.firefox.com">Acorn: Firefox</A>
        </Li>
        <Li>
          <A href="https://atlaskit.atlassian.com/">Atlaskit: Atlassian</A>
        </Li>
        <Li>
          <A href="https://api.slack.com/block-kit">Block Kit: Slack</A>
        </Li>
        <Li>
          <A href="https://www.delldesignsystem.com/">Dell Design System</A>
        </Li>
        <Li>
          <A href="https://druids.datadoghq.com/">
            DRUIDS: Datadog reusable user interface design system
          </A>
        </Li>
        <Li>
          <A href="https://eds.equinor.com">EDS: Equinor</A>
        </Li>
        <Li>
          <A href="https://design.elvia.io/">Elvia</A>
        </Li>
        <Li>
          <A href="https://design.entur.no/">Entur Designsystem</A>
        </Li>
        <Li>
          <A href="https://eufemia.dnb.no/">Eufemia: DNB</A>
        </Li>
        <Li>
          <A href="https://www.fabric-ds.io/">Fabric: Finn.no</A>
        </Li>
        <Li>
          <A href="https://design.if.eu/">If design system</A>
        </Li>
        <Li>
          <A href="https://jokul.fremtind.no/">Jøkul: Fremtind</A>
        </Li>
        <Li>
          <A href="https://www.flexport.com/design">Latitude: Flexport</A>
        </Li>
        <Li>
          <A href="https://merkevare.naf.no/">NAF</A>
        </Li>
        <Li>
          <A href="https://www.openbridge.no/">OpenBridge</A>
        </Li>
        <Li>
          <A href="https://static.nrk.no/origo/latest/index.html">Origo: NRK</A>
        </Li>
        <Li>
          <A href="https://polaris.shopify.com/components">Polaris: Shopify</A>
        </Li>
        <Li>
          <A href="https://components.ruter.as/">Ruter Components</A>
        </Li>
        <Li>
          <A href="https://www.sanity.io/ui">Sanity UI</A>
        </Li>
        <Li>
          <A href="https://profilmanual.skyss.no/">Skyss Profilmanual</A>
        </Li>
        <Li>
          <A href="https://design.sparebank1.no/">SpareBank1</A>
        </Li>
        <Li>
          <A href="https://spectrum.adobe.com/">Spectrum: Adobe</A>
        </Li>
        <Li>
          <A href="https://spor.cloud.vy.no/">Spor: Vy</A>
        </Li>
        <Li>
          <A href="https://designsystem.kognif.ai/">Triton: Kognifai</A>
        </Li>
        <Li>
          <A href="https://brand.vipps.no">Vipps</A>
        </Li>
        <Li>
          <A href="https://ux.visma.com/">Visma UX</A>
        </Li>
        <Li>
          <A href="https://build.washingtonpost.com/">
            Washington Post Design System
          </A>
        </Li>
        <Li>
          <A href="https://wise.design/">Wise Design</A>
        </Li>
      </ul>

      <SectionHeader>Other</SectionHeader>
      <ul>
        <Li>
          <A href="https://developer.apple.com/design/human-interface-guidelines">
            Apple Human Interface Guidelines
          </A>
        </Li>
        <Li>
          <A href="https://www.neurodiversity.design/">
            Neurodiversity Design System
          </A>
        </Li>
      </ul>

      <SectionHeader>Novelty</SectionHeader>
      <ul>
        <Li>
          <A href="https://jdan.github.io/98.css/">98.css: Windows 98</A>
        </Li>
      </ul>
    </>
  );
}
