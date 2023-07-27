import { FlexCol, FlexRow } from "../atoms";
import CvCard from "../atoms/CvCard";
import CvDateRange from "./CvDateRange";

export default function Education({
  start,
  end,
  institution,
  degree,
  lang,
}: any) {
  return (
    <CvCard as="h3">
      <CvDateRange start={start} end={end} />
      <div className="text-xl font-extrabold print:font-bold print:text-sm">
        {degree[lang]}
      </div>
      <div>@ {institution[lang]}</div>
    </CvCard>
  );
}
