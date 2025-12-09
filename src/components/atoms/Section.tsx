import BaseComponent, { BaseComponentProps } from "./BaseComponent";

export interface SectionProps extends BaseComponentProps {}

export const Section = ({
  as = "section",
  className = "flex flex-col gap-6",
  ...rest
}: SectionProps) => <BaseComponent as={as} className={className} {...rest} />;
