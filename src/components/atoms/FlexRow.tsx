import BaseComponent, { BaseComponentProps } from "./BaseComponent";

const variants = {
  default: "flex flex-row w-full box-border",
  wrap: "flex flex-row w-full flex-wrap",
  wrapReverse: "flex flex-row w-full flex-wrap-reverse",
};

/** FlexRow
 * Flexbox row
 *
 * @param as {string | ReactComponent} (default: a) what DOM element or React component to render as
 * @param variant {string} (default: default) Variants: default
 *
 * @example
 *   <FlexRow variant="default">I'm a flexbox row</FlexRow>
 *
 * @returns ReactNode
 */
export default function FlexRow({
  className = "",
  as = "div",
  variant = "default",
  ...rest
}: BaseComponentProps<keyof typeof variants>) {
  const variantClasses = variants[variant] ?? variants["default"];

  className = `${variantClasses} ${className}`;

  return <BaseComponent {...rest} className={className} as={as} />;
}
