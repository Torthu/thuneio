import BaseComponent, { BaseComponentProps } from "./BaseComponent";

/** Paragraph
 * Basic paragraph
 *
 * @returns ReactNode
 */
export default function Textarea({
  className = "",
  as = "textarea",
  ...rest
}: BaseComponentProps) {
  className = `box-border block h-lg min-w-lg w-full rounded bg-slate-700 text-white ${className}`;

  return <BaseComponent {...rest} className={className} as={as} />;
}
