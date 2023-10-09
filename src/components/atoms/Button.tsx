import BaseComponent, { BaseComponentProps } from "./BaseComponent";

const variants = {
  default: "",
  submit:
    "rounded bg-blue-600 px-2 py-1 font-medium text-white hover:bg-blue-700",
  message:
    "rounded bg-gray-800 px-2 text-center py-1 font-medium text-gray-100 hover:bg-gray-600 ",
  icon: "rounded-full bg-gray-600 p-1 text-white hover:bg-gray-400 hover:text-black focus:bg-gray-400 focus:text-black active:bg-gray-300 active:text-black",
  disabled:
    "rounded bg-gray-600 px-2 py-1 font-medium text-white hover:bg-gray-700",
  navigation:
    "p-2 border text-sm border-gray-700 hover:bg-gray-700 hover:cursor-pointer rounded-lg",
};

/** Button
 *
 * @param as {string | ReactComponent} (default: button) what DOM element or React component to render as
 * @param variant {string} (default: default) Variants: default | submit
 *
 * @example
 *   <Button variant="submit" as="a">I'm a link disguised as a submit button!</Button>
 *
 * @returns ReactNode
 */
export default function Button({
  className = "",
  as = "button",
  variant = "default",
  ...rest
}: BaseComponentProps<keyof typeof variants>) {
  const variantClasses = variants[variant] ?? variants["default"];

  className = `${variantClasses} ${className}`;

  return <BaseComponent {...rest} className={className} as={as} />;
}
