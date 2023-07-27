import BaseComponent, { BaseComponentProps } from "./BaseComponent";

const variants = {
  default: "flex flex-col",
  main: `flex flex-col box-border md:w-2/5 grow`,
  aside: `flex flex-col box-border md:max-w-2/5 shrink`,
};

/** FlexCol
 * Flexbox column
 *
 * @param as {string | ReactComponent} (default: a) what DOM element or React component to render as
 * @param variant {string} (default: default) Variants: default | main | aside
 *
 * @example
 *   <FlexCol variant="main">I'm a flexbox column</FlexCol>
 *
 * @returns ReactNode
 */
export default function FlexCol({
  className = "",
  as = "div",
  variant = "default",
  ...rest
}: BaseComponentProps<keyof typeof variants>) {
  const variantClasses = variants[variant] ?? variants["default"];

  className = `${variantClasses} ${className}`;

  return <BaseComponent {...rest} className={className} as={as} />;
}
