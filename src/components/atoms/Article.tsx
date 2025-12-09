import BaseComponent, { BaseComponentProps } from "./BaseComponent";

export interface ArticletProps extends BaseComponentProps {}

export const Article = ({
  as = "article",
  className = "flex flex-col gap-10",
  ...rest
}: ArticletProps) => <BaseComponent as={as} className={className} {...rest} />;
