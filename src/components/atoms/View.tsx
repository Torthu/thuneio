import { useEffect } from "react";
import BaseComponent, { BaseComponentProps } from "./BaseComponent";
import TopNavigation from "../organisms/TopNavigation";

interface ViewProps extends BaseComponentProps {
  title: string;
}

export default function View({ title, ...rest }: ViewProps) {
  useEffect(() => {
    document.title = title;
  }, [title]);
  return (
    <>
      <BaseComponent className="max-w-5xl mx-auto min-h-screen relative flex flex-col relative gap-4">
        <TopNavigation />
        <BaseComponent className="flex flex-col relative gap-4 px-20 lg:px-0">
          <BaseComponent {...rest} />
        </BaseComponent>
      </BaseComponent>
    </>
  );
}
