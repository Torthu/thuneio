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
export default function H2({
  className = "",
  as = "h2",
  ...rest
}: BaseComponentProps) {
  className = `text-xl font-extralight text-slate-100 print:font-normal print:text-md ${className}`;

  return <BaseComponent {...rest} className={className} as={as} />;
}
