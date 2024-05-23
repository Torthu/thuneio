"use server";

import { A, FlexCol, H1, P, SectionHeader, View } from "@/components";

export default function UILibraries() {
  return (
    <View title="UI Libraries">
      <H1>UI Libraries</H1>

      <P>
        This is a collection of interesting component libraries for my own
        personal future reference.
      </P>

      <FlexCol className="gap-4">
        <SectionHeader>Tailwind UI (Tailwind Labs)</SectionHeader>
        <A href="https://tailwindui.com/">tailwindui.com</A>

        <SectionHeader>shadcn/ui</SectionHeader>
        <A href="https://ui.shadcn.com/">shadcn/ui</A>

        <SectionHeader>Radix UI</SectionHeader>
        <A href="https://www.radix-ui.com/">radix-ui.com</A>

        <SectionHeader>Headless UI (Tailwind Labs)</SectionHeader>
        <A href="https://headlessui.com/">headlessui.com</A>
      </FlexCol>
    </View>
  );
}
