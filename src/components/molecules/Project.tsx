"use client";

import { useState } from "react";
import { Button, FlexCol, FlexRow } from "../atoms";
import CvDateRange from "./CvDateRange";
import CvCard from "../atoms/CvCard";
import ChevronToggle from "../atoms/ChevronToggle";

export default function Project({
  start,
  end,
  client,
  industry,
  role,
  title,
  summary,
  technologies,
  lang,
}: any) {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <CvCard
      as={Button}
      variant={toggle ? "interactive-active" : "interactive"}
      onClick={() => setToggle(!toggle)}
    >
      <FlexRow className="items-center justify-between gap-4">
        <FlexCol as="h3">
          <CvDateRange start={start} end={end} />
          <div className="text-xl font-extrabold print:font-bold print:text-sm">
            {title[lang]}
          </div>
          <div className="text-sm my-2">{technologies.join(", ")}</div>
          {(client || industry) && (
            <>
              <div>
                @ {client} {industry && <>({industry[lang]})</>}
              </div>
            </>
          )}
        </FlexCol>
        <ChevronToggle toggle={toggle} />
      </FlexRow>

      <FlexCol
        className={`border-l-2 border-gray-600 px-2 gap-2 mt-2 ${
          toggle ? "" : "hidden"
        } print:block print:border-0 print:px-0`}
      >
        {role && (
          <div>
            {lang === "en" ? "Role" : "Rolle"}: {role[lang]}
          </div>
        )}
        <div>{summary[lang]}</div>
      </FlexCol>
    </CvCard>
  );
}
