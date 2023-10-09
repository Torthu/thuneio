"use client";
import { H1, A, View, SectionHeader, FlexCol, FlexRow } from "@/components";
import DateDisplay from "@/components/atoms/DateDisplay";

export default function DesignSystems() {
  return (
    <View title="Notes and scribbles">
      <FlexCol className="gap-4">
        <H1 className="mb-4">Notes and scribbles</H1>
        <FlexCol className="gap-2">
          <SectionHeader>
            <A as="a" href="/scribbles/designsystems">
              Design Systems
            </A>
          </SectionHeader>
          <FlexRow className="gap-2">
            <DateDisplay as="span" date={new Date("2023-09-04")} />
            <span>A quick list of design systems for future inspiration.</span>
          </FlexRow>
        </FlexCol>
      </FlexCol>
    </View>
  );
}
