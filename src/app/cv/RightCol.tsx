import { FlexCol, BaseComponent, FlexRow, H2 } from "@/components/atoms";
import SectionHeader from "@/components/atoms/SectionHeader";
import Education from "@/components/molecules/Education";
import Employer from "@/components/molecules/Employer";
import Project from "@/components/molecules/Project";
import cvdata from "@/data/cvdata";
import {
  AcademicCapIcon,
  BuildingOfficeIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/24/solid";

export default function RightCol({ lang }: { lang: "no" | "en" }) {
  return (
    <FlexCol className="gap-4">
      <BaseComponent>{cvdata.summary[lang]}</BaseComponent>

      <SectionHeader className="mt-4">
        <FlexRow className="gap-2 items-center">
          <AcademicCapIcon className="w-6 h-6 print:hidden" />
          {lang === "en" ? "Education" : "Utdanning"}
        </FlexRow>
      </SectionHeader>

      {cvdata.education.map((education, i) => (
        <Education key={`education-${i}`} {...education} lang={lang} />
      ))}

      <SectionHeader className="mt-4">
        <FlexRow className="gap-2 items-center">
          <BuildingOfficeIcon className="w-6 h-6 print:hidden" />
          {lang === "en" ? "Employers" : "Arbeidsgivere"}
        </FlexRow>
      </SectionHeader>

      {cvdata.employers.map((employer, i) => (
        <Employer key={`employer-${i}`} {...employer} lang={lang} />
      ))}

      <SectionHeader className="mt-4">
        <FlexRow className="gap-2">
          <ComputerDesktopIcon className="w-6 h-6 print:hidden" />
          {lang === "en" ? "Projects" : "Prosjekter"}
        </FlexRow>
      </SectionHeader>

      {cvdata.projects.map((project, i) => (
        <Project key={`project-${i}`} {...project} lang={lang} />
      ))}

      <SectionHeader className="mt-4">
        <FlexRow className="gap-2">
          <ComputerDesktopIcon className="w-6 h-6 print:hidden" />
          {lang === "en" ? "Hobby Projects" : "Hobbyprosjekter"}
        </FlexRow>
      </SectionHeader>

      {cvdata.hobbyProjects.map((project, i) => (
        <Project key={`project-${i}`} {...project} lang={lang} />
      ))}
    </FlexCol>
  );
}
