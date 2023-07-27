import { As } from "../../types/As";

export interface BaseComponentProps<VariantType = any> {
  children?: React.ReactNode;
  as?: As;
  className?: string;
  variant?: VariantType;
  onClick?: (e: any) => void;
  src?: string;
  alt?: string;
  title?: string;
}

/** BaseComponent
 *
 * @param props.as {string | React.ComponentType} (default: 'div') What to render as
 *
 * @example
 *   <BaseComponent as={Paragraph}>Children</BaseComponent>
 * @example
 *   <BaseComponent as="p">A paragraph</BaseComponent>
 */
export default function BaseComponent({
  children,
  as = "div",

  // Extract and pass rest to DOM
  ...rest
}: BaseComponentProps) {
  const Element = as;

  return <Element {...rest}>{children}</Element>;
}
