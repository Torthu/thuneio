import { A } from "@/components";
import DateDisplay from "@/components/atoms/DateDisplay";
import { FlexCol, FlexRow, H1, H2 } from "@torthu/jacketui-components";

export const metadata = {
  title: "Torstein's scribbles",
  description: "A collection of notes and scribbles.",
};

export default function DesignSystems() {
  return (
    <>
      <H1 className="mb-4">Notes and scribbles</H1>

      <FlexCol variant="tight">
        <H2>
          <A href="/scribbles/digital-uavhengighet-hva-med-appene">
            Digital uavhengighet: hva med alle disse viktige appene da?
          </A>
        </H2>
        <FlexRow className="flex-col md:flex-row gap-2">
          <DateDisplay as="span" date={new Date("2025-09-30")} />
          <span>
            {" "}
            Vi har solgt sjelen til amerikanske IT-monopolister, er det så lurt
            da?
          </span>
        </FlexRow>
      </FlexCol>

      <FlexCol variant="tight">
        <H2>
          <A href="/scribbles/designsystems">Design Systems</A>
        </H2>
        <FlexRow className="flex-col md:flex-row gap-2">
          <DateDisplay as="span" date={new Date("2023-09-04")} />
          <span>A quick list of design systems for future inspiration.</span>
        </FlexRow>
      </FlexCol>
    </>
  );
}
