import BaseComponent, { BaseComponentProps } from "./BaseComponent";
import TopNavigation from "../organisms/TopNavigation";

interface ViewProps extends BaseComponentProps {
  title?: string;
}

export default function View({ title, ...rest }: ViewProps) {
  return (
    <BaseComponent className="w-full md:w-10/12 max-w-5xl mx-auto min-h-screen relative flex flex-col gap-4">
      <TopNavigation />
      <BaseComponent className="flex flex-col relative gap-4">
        <BaseComponent {...rest} />
      </BaseComponent>
    </BaseComponent>
  );
}
