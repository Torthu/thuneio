import { useEffect } from "react";
import BaseComponent, { BaseComponentProps } from "./BaseComponent";

interface ViewProps extends BaseComponentProps {
  title: string;
}

export default function View({ title, ...rest }: ViewProps) {
  useEffect(() => {
    document.title = title;
  }, [title]);
  return <BaseComponent className="max-w-5xl mx-auto" {...rest} />;
}
