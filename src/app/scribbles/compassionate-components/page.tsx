import { H1, A, View, SectionHeader, P, Li } from "@/components";

//https://www.youtube.com/watch?v=VKQAS3PNEVw
// Compassionate Components - Kristofer Selbekk - NDC Oslo 2020

export default function CompassionateComponents() {
  return (
    <View title="Compassionate Components">
      <H1>Compassionate Components</H1>
      <P>
        One thing that continually annoys me are the kinds of design systems and
        component libraries that I meet in my workplace. They are often large,
        containing loads of code, components, utilities. They fit well into the
        typical design flow of the place. But then you hit an edge case, a
        tweaked margin, a new colour, a new designer perhaps and the whole thing
        comes crashing down.
      </P>
      <P>
        Inspired by Kristofer Selbekk`s talk at NDC I`ll propose a set of rules
        for how to make components compassionate.
      </P>
      Margin, padding
      <SectionHeader>We will never meet an edge case syndrome</SectionHeader>
      <SectionHeader>We will never have a new need syndrome</SectionHeader>
      <SectionHeader>Self-explanatory code syndrome</SectionHeader>
      <P>Composability</P>
      <P>Configurability</P>
      <P>Escape Hatches</P>
      <P>Documentation</P>
      <P>Atomic(ish) Design</P>
    </View>
  );
}
