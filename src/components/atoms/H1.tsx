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
  className = `font-bold text-2xl lg:text-4xl tracking-tight print:text-lg ${className}`;

  return <BaseComponent {...rest} className={className} as={as} />;
}
