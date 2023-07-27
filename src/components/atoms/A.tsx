import BaseComponent, { BaseComponentProps } from "./BaseComponent";

interface AProps extends BaseComponentProps<keyof typeof variants> {
  href: string;
}

const variants = {
  default: "text-sky-500 hover:text-sky-700 underline",
  button: "text-white rounded bg-sky-700 hover:bg-sky-500 px-4 py-2",
  buttonEven: "text-white rounded bg-sky-900 hover:bg-sky-500 px-4 py-2",
};

/** A
 *
 * @param as {string | ReactComponent} (default: a) what DOM element or React component to render as
 * @param variant {string} (default: default) Variants: default
 *
 * @example
 *   <A variant="default" href="url">I'm a link</A>
 *
 * @returns ReactNode
 */
export default function A({
  className = "",
  as = "a",
  variant = "default",
  ...rest
}: AProps) {
  const variantClasses = variants[variant] ?? variants["default"];

  className = `${variantClasses} ${className}`;

  return <BaseComponent {...rest} className={className} as={as} />;
}
