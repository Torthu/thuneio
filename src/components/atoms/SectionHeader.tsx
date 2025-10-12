import { FlexRow, H2 } from ".";

export default function SectionHeader({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const innerClassNames = "items-center gap-4 print:hidden";
  return (
    <>
      <FlexRow className={`${innerClassNames} ${className}`}>
        <div className="w-6 border-b border-gray-900 dark:border-gray-500 print:border-gray-900"></div>
        <H2>{children}</H2>
        <div className="grow border-b border-gray-900 dark:border-gray-500 print:border-gray-900"></div>
      </FlexRow>
      <H2 className="hidden print:block">{children}</H2>
    </>
  );
}
