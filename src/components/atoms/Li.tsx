import BaseComponent, { BaseComponentProps } from "./BaseComponent";

const variants = {
  default: "list-disc ml-5 mb-2 max-w-lg",
  disc: "list-disc ml-5 mb-2 max-w-lg",
  decimal: "list-decimal ml-5 mb-2 max-w-lg",
};

/** Li
 * Basic list item <li>
 *
 * @example Unordered list
 *   <ul>
 *     <Li>Item 1</Li>
 *     <Li>Item 2</Li>
 *   </ul>
 * @example Ordered list
 *   <ol>
 *    <Li variant="decimal">Item 1</Li>
 *    <Li variant="decimal">Item 2</Li>
 *   </ol>
 *
 * @param {string} variant "default" | "disc" | "decimal" - list style type
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
