import BaseComponent, { BaseComponentProps } from "./BaseComponent";

/** H2
 * subheader - text-xl font-extralight
 *
 * @param as string | ReactComponent (default: "h1") Which DOM/React component to render as
 *
 * @example
 *   <H2 as="h1">h1 with h2 styling</H1>
 *
 * @returns ReactNode
 */
export default function H3({
  className = "",
  as = "h3",
  ...rest
}: BaseComponentProps) {
  className = `text-lg font-extralight tprint:font-normal print:text-md ${className}`;

  return <BaseComponent {...rest} className={className} as={as} />;
}
