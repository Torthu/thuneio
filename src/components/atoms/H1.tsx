import BaseComponent, { BaseComponentProps } from "./BaseComponent";

/** H1
 * Main header - text-2xl font-extralight
 *
 * @param as string | ReactComponent (default: "h1") Which DOM/React component to render as
 *
 * @example
 *   <H1 as="h2">h2 with h1 styling</H1>
 *
 * @returns ReactNode
 */
export default function H1({
  className = "",
  as = "h1",
  ...rest
}: BaseComponentProps) {
  className = `font-extrabold text-2xl sm:text-2xl lg:text-2xl tracking-tight text-slate-100 print:text-lg ${className}`;

  return <BaseComponent {...rest} className={className} as={as} />;
}
