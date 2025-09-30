import { View, H1, P, SectionHeader, H3, FlexCol } from "@/components";

export default function PersonalDigitalSovreignty() {
  return (
    <View title="Personal Digital Sovreignty">
      <FlexCol variant="main">
        <H1 className="mb-4">Personal Digital Sovreignty</H1>
        <P>
          It is currently en vogue to speak about European digital sovreignty,
          about how we (cause I am European) need to wean ourselves off the
          digital teats of our American friends and overlords.
        </P>
        <P>
          It is clear to me that beyond my country and continent's needs for
          sovreignty, I also need sovreignty.
        </P>

        <SectionHeader>Locking down the bait and switch</SectionHeader>

        <H3>Android shittification</H3>
        <P>
          For a number of years Android's been running two aspects of my life:
          my phone and my TV.
        </P>

        <P>
          Currently I sport a Samsung Phone, which I've grown to like. I mean,
          it looks nice and has all the features I need. Of course, it is full
          of crap, both from Samsung and from Google.
        </P>

        <P>
          I have a Samsung TV, whose operating system is, lets say lackluster.
          Therefore I've augmented it with a Nvidia Shield, which runs Android
          TV.
        </P>

        <P>
          Recently Google announced that it will be requiring developer
          verification in order to sideload applications. They argue it is to
          combat malware.
        </P>

        <P>
          Banks in my country require you to use an authentication scheme called
          BankID. The most convenient way of doing this is via an app, which is
          only available on Android and iOS.
        </P>

        <H3>Media shittification</H3>
        <P>Netflix requires DRM.</P>
        <P>
          Ripping Blu-Rays is a nightmare, requiring you to go on the internet
          and finding decryption keys.
        </P>
        <P>Youtube is a nightmare.</P>
        <P>
          Android TV is increasingly shittified with ads and un-removable
          anti-features.
        </P>

        <H3>Smart-home shittification</H3>
        <P>Futurehome introduced subscription to keep using my smart-home.</P>

        <SectionHeader>Personaly Digital Sovreignty</SectionHeader>
        <P>I want my shit to stay mine.</P>

        <H3>Jellyfin</H3>
        <H3>Sailfish OS / Fairphone</H3>
        <H3>Linux Distros</H3>
      </FlexCol>
    </View>
  );
}
