import { A, View, P, Li } from "@/components";
import { H1, SectionHeader } from "@torthu/jacketui-components";

//https://www.youtube.com/watch?v=VKQAS3PNEVw
// Compassionate Components - Kristofer Selbekk - NDC Oslo 2020

export default function CompassionateComponents() {
  return (
    <View title="Compassionate Components">
      <H1>Compassionate Components: The Art of DA11Y</H1>
      <P>
        15 short months ago I became a father. With a lack of sleep came
        challenges at work.
      </P>
      <blockquote>
        What is this thing again... I can`t remember how to use it... shit, I'm
        the author.
      </blockquote>

      <SectionHeader>Documentation and Examples</SectionHeader>
      <P>
        Documentation is something many of us hate to write, but love to read.
      </P>
      <P>
        Some ascribe to the idea that code can be self-documenting and that
        types can both document, validate and enable discovery.
      </P>
      <P>My tired toddler brain does not agree.</P>

      <H3>Interface soup: Is this thing edible?</H3>
      <P>I'll be using typescript types to illustrate my point.</P>

      <P>
        One thing that continually annoys me are the kinds of design systems and
        component libraries that I encounter. They are often large, containing
        loads of code, components and utilities. They fit well into the typical
        design flow of the place, but then you hit an edge case, a tweaked
        margin, a new colour, a new design perhaps and the whole thing comes
        crashing down.
      </P>
      <P>
        Inspired by Kristofer Selbekk`s talk at NDC I`ll propose a set of rules
        for how to make components compassionate.
      </P>
      <SectionHeader>We will never meet an edge case syndrome</SectionHeader>
      <SectionHeader>We will never have a new need syndrome</SectionHeader>
      <SectionHeader>Self-explanatory code syndrome</SectionHeader>
      <P>Composability</P>
      <P>Configurability</P>
      <P>Escape Hatches</P>
      <P>Documentation</P>
      <P>Atomic(ish) Design</P>
      <SectionHeader>Developer Accessibility (DA11Y)</SectionHeader>
    </View>
  );
}
