"use client";
import { H1, A, View, SectionHeader, P, Li } from "@/components";

export default function DesignSystems() {
  return (
    <View title="Design systems overview">
      <H1 className="mb-4">Design systems</H1>
      <P>
        This is my personal collection of design systems from both the public
        and private sectors, both foreign and domestic (Norwegian).
      </P>

      <SectionHeader className="mt-8 mb-6">Frameworks / Industry</SectionHeader>
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

      <SectionHeader className="mt-8 mb-6">Public Sector</SectionHeader>
      <P>Design systems meant for use by public sector.</P>
      <ul>
        <Li>
          <A href="https://aksel.nav.no/">Aksel: NAV</A>
        </Li>
        <Li>
          <A href="https://altinn.github.io/designsystem-styleguide/">Altinn</A>
        </Li>
        <Li>
          <A href="http://designsystem.gov.au/">
            Australian government design system
          </A>
        </Li>
        <Li>
          <A href="https://design.canada.ca/">Canada.ca design system</A>
        </Li>
        <Li>
          <A href="https://www.designsystemet.no">
            Designsystemet: Norwegian common design system
          </A>
        </Li>
        <Li>
          <A href="https://design.domstol.no">Elsa: Norwegian courts</A>
        </Li>
        <Li>
          <A href="https://design.lillestrom.kommune.no/guide/">
            Fleetwood: Lillestrøm Kommune
          </A>
        </Li>
        <Li>
          <A href="https://design-system.service.gov.uk/">
            Gov.uk Design System
          </A>
        </Li>
        <Li>
          <A href="https://hedwig.posten.no">Hedwig: Posten</A>
        </Li>
        <Li>
          <A href="https://designmanual.norgesnasjonalparker.no/">
            Norges Nasjonalparker
          </A>
        </Li>
        <Li>
          <A href="https://punkt.oslo.kommune.no/latest/">
            Punkt: Oslo Kommune Origo
          </A>
        </Li>
        <Li>
          <A href="https://skatteetaten.github.io/frontend-components/">
            Skatteetaten
          </A>
        </Li>
        <Li>
          <A href="https://swisspost-web-frontend.netlify.app/#/home">
            Swiss Post
          </A>
        </Li>
        <Li>
          <A href="https://designsystem.digital.gov/">USWDS: United States</A>
        </Li>
      </ul>

      <SectionHeader className="mt-8 mb-6">Private Sector</SectionHeader>
      <P>
        Design systems meant for internal developement teams/development for
        private sector products.
      </P>
      <ul>
        <Li>
          <A href="https://acorn.firefox.com">Acorn: Firefox</A>
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

      <SectionHeader className="mt-8 mb-6">Other</SectionHeader>
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

      <SectionHeader className="mt-8 mb-6">Novelty</SectionHeader>
      <ul>
        <Li>
          <A href="https://jdan.github.io/98.css/">98.css: Windows 98</A>
        </Li>
      </ul>
    </View>
  );
}