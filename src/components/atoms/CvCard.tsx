import { FlexCol } from ".";
import { BaseComponentProps } from "./BaseComponent";

export default function CvCard({
  className = "",
  ...rest
}: BaseComponentProps) {
  const innerClasses = "text-left text-white rounded-md p-2 print:p-0";

  return <FlexCol className={`${innerClasses} ${className}`} {...rest} />;
}
