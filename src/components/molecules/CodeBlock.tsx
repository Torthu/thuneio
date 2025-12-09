import { BaseComponent, BaseComponentProps } from "@torthu/jacketui-base";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

export interface CodeBlockProps extends BaseComponentProps {
  language: string;
  code: string;
}

export function CodeBlock({
  language,
  code,
  as = "div",
  className = "border border-slate-700 border-l-2 border-l-blue-500 shadow rounded",
  ...rest
}: CodeBlockProps) {
  return (
    <BaseComponent as={as} className={className} {...rest}>
      <SyntaxHighlighter style={atomOneDark} language={language}>
        {code}
      </SyntaxHighlighter>
    </BaseComponent>
  );
}
