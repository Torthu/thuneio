import BaseComponent, { BaseComponentProps } from "./BaseComponent";
import TopNavigation from "../organisms/TopNavigation";

interface ViewProps extends BaseComponentProps {
  title?: string;
}

export default function View({ title, ...rest }: ViewProps) {
  return (
    <BaseComponent className="max-w-5xl mx-auto min-h-screen relative flex flex-col relative gap-4">
      <TopNavigation />
      <BaseComponent className="flex flex-col relative gap-4 px-16 lg:px-8 xl:px-0">
        <BaseComponent {...rest} />
      </BaseComponent>
    </BaseComponent>
  );
}
