import { FlexCol, FlexRow, Avatar, H1, A, P } from "@/components/atoms";

export default function LeftCol({ lang }: { lang: "en" | "no" }) {
  return (
    <FlexCol className="mx-auto w-full flex-none gap-8 lg:w-96 print:w-max print:items-start print:mx-0 print:justify-start items-center justify-center">
      <div className="flex flex-col gap-8 items-center justify-center print:justify-left print:flex-row">
        <Avatar
          variant="huge"
          className="print:w-16 print:h-16"
          avatar="torstein.jpeg"
        />
        <H1 className="flex flex-col gap-2 justify-center items-center print:gap-1 print:items-start print:text-left text-center">
          <span>Torstein Thune</span>
          <span className="font-light">
            {lang === "en"
              ? "Senior Front-end developer"
              : "Senior frontend-utvikler"}{" "}
            <div>
              @ <A href="https://rainfall.no">Rainfall AS</A>
            </div>
          </span>
        </H1>
      </div>

      <FlexRow className="justify-center gap-2 text-center lg:flex-col lg:w-44 lg:text-left print:hidden">
        <A variant="button" className="w-44" href="https://github.com/torthu">
          GitHub
        </A>
        <A
          variant="buttonEven"
          className="w-44"
          href="https://no.linkedin.com/in/torstein-thune-3a7aa328"
        >
          LinkedIn
        </A>
      </FlexRow>
    </FlexCol>
  );
}
