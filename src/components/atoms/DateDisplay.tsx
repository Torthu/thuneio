import BaseComponent, { BaseComponentProps } from "./BaseComponent";

const variants = {
  default: "opacity-60",
};

interface DateDisplayProps extends BaseComponentProps<keyof typeof variants> {
  date: Date;
}

export default function DateDisplay({
  as = "div",
  variant = "default",
  className,
  date,
  ...rest
}: DateDisplayProps) {
  const variantClasses = variants[variant] ?? variants["default"];

  className = `${variantClasses} ${className}`;

  return (
    <BaseComponent as={as} className={className} {...rest}>
      {date.getFullYear()}-{`0${date.getMonth() + 1}`.slice(-2)}-
      {`0${date.getDate()}`.slice(-2)}
    </BaseComponent>
  );
}
