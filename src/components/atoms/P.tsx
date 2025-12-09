import BaseComponent, { BaseComponentProps } from "./BaseComponent";

/** Paragraph
 * Basic paragraph
 *
 * @returns ReactNode
 */
export default function Paragraph({
  className = "",
  as = "p",
  ...rest
}: BaseComponentProps) {
  className = `${className}`;

  return <BaseComponent {...rest} className={className} as={as} />;
}
