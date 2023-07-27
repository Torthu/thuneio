import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { BaseComponentProps } from "./BaseComponent";
import FlexCol from "./FlexCol";

interface ChevronToggleProps extends BaseComponentProps {
  toggle: boolean;
}

export default function ChevronToggle({
  toggle,
  className = "",
  ...rest
}: ChevronToggleProps) {
  const innerClasses =
    "items-center justify-center w-6 h-6 rounded-full border border-gray-200 print:hidden";
  return (
    <FlexCol className={`${innerClasses} ${className}`} {...rest}>
      {toggle && <ChevronDownIcon className="w-4 h-4" />}
      {!toggle && <ChevronRightIcon className="w-4 h-4" />}
    </FlexCol>
  );
}
