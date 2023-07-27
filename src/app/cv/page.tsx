"use client";

import { useEffect, useState } from "react";
import {
  Avatar,
  Button,
  FlexCol,
  H1,
  A,
  BaseComponent,
  FlexRow,
} from "../../components/atoms";
import View from "../../components/atoms/View";
import Education from "../../components/molecules/Education";
import Employer from "../../components/molecules/Employer";
import Project from "../../components/molecules/Project";
import SectionHeader from "../../components/atoms/SectionHeader";
import {
  AcademicCapIcon,
  BuildingOfficeIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/24/solid";
import cvdata from "@/data/cvdata";
import LeftCol from "./LeftCol";
import RightCol from "./RightCol";

export default function Cv() {
  const [lang, setLang] = useState<"no" | "en">("no");

  useEffect(() => {
    const userLang = navigator.language;

    if (
      ["da", "sv", "sv-fi", "no", "no-nb", "no-nn"].includes(
        userLang.toLowerCase()
      )
    ) {
      setLang("no");
    } else {
      setLang("en");
    }
  }, []);

  return (
    <View title="Torstein Thune CV" as="main" className="print:text-xs">
      <FlexRow className="print:hidden text-white justify-end mb-8 absolute top-4 right-4">
        <Button
          title="Bytt språk til norsk"
          className={`${
            lang === "no" ? "bg-gray-900" : "bg-gray-700"
          } px-4 py-2 border border-gray-500 rounded-l-lg`}
          onClick={() => setLang("no")}
        >
          Norsk
        </Button>
        <Button
          title="Switch language to English"
          className={`${
            lang === "en" ? "bg-gray-900" : "bg-gray-700"
          } px-4 py-2 border border-gray-500 hover:bg-gray-900 active:bg-gray-800 rounded-r-lg`}
          onClick={() => setLang("en")}
        >
          English
        </Button>
      </FlexRow>
      <div className="flex flex-col lg:flex-row items-start justify-center gap-12 max-w-5xl mx-auto p-12 my-12 print:p-2 print:my-2">
        <LeftCol lang={lang} />
        <RightCol lang={lang} />
      </div>
    </View>
  );
}
