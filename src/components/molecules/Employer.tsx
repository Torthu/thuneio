"use client";

import { useState } from "react";
import { Button, FlexCol, FlexRow } from "../atoms";
import CvDateRange from "./CvDateRange";
import CvCard from "../atoms/CvCard";
import ChevronToggle from "../atoms/ChevronToggle";

export default function Employer({
  lang,
  company,
  role,
  summary,
  industry,
  start,
  end,
}: any) {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <CvCard
      as={Button}
      className={`${
        toggle ? "bg-gray-700" : "bg-gray-700/[.2]"
      } hover:bg-gray-700`}
      onClick={() => setToggle(!toggle)}
    >
      <FlexRow className="items-center justify-between gap-2">
        <FlexCol as="h3">
          <CvDateRange start={start} end={end} />
          <div className="text-xl font-extrabold print:font-bold print:text-sm">
            {role[lang]}
          </div>
          <div>
            @ {company} ({industry[lang]})
          </div>
        </FlexCol>
        <ChevronToggle toggle={toggle} />
      </FlexRow>
      <div
        className={`border-l-2 border-gray-600 px-2 mt-2 ${
          toggle ? "" : "hidden"
        } print:block print:border-0 print:px-0`}
      >
        {summary[lang]}
      </div>
    </CvCard>
  );
}
