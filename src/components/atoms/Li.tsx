import BaseComponent, { BaseComponentProps } from "./BaseComponent";

const variants = {
  default: "text-white list-disc ml-5 mb-2 max-w-lg",
  disc: "text-white list-disc ml-5 mb-2 max-w-lg",
  decimal: "text-white list-decimal ml-5 mb-2 max-w-lg",
};

/** Li
 * Basic list item <li>
 *
 * @returns ReactNode
 */
export default function Li({
  className = "",
  variant = "default",
  as = "li",
  ...rest
}: BaseComponentProps<keyof typeof variants>) {
  const variantClasses = variants[variant] ?? variants["default"];

  className = `${variantClasses} ${className}`;

  return <BaseComponent {...rest} className={className} as={as} />;
}
