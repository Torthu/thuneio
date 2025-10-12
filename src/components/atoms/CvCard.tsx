import { FlexCol } from ".";
import { BaseComponentProps } from "./BaseComponent";

const variants = {
  default: "",
  interactive:
    "dark:bg-gray-700/[.2] bg-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700",
  "interactive-active":
    "dark:bg-gray-700/[.2] bg-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700",
};

export default function CvCard({
  className = "",
  variant = "default",
  ...rest
}: BaseComponentProps<keyof typeof variants>) {
  const innerClasses = "text-left rounded-md p-4 print:p-0";

  return (
    <FlexCol
      className={`${innerClasses} ${variants[variant]} ${className}`}
      {...rest}
    />
  );
}
