import BaseComponent, { BaseComponentProps } from "./BaseComponent";

/** MainSection
 * Wrapper for the main content section
 *
 * @param as {string | ReactComponent} (default: div) DOM element or React Component to render as
 * @param className {string} classNames to use (default: "ml-4")
 *
 * @example
 *   <MainSection as="section">Some beautiful content</MainSectrion>
 *
 * @returns ReactNode
 */
export default function MainSection({
  className = "",
  as = "div",
  ...rest
}: BaseComponentProps) {
  className = `box-border px-4 ${className}`;

  return <BaseComponent {...rest} className={className} as={as} />;
}
