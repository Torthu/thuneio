import { Avatar, Button, FlexRow } from "../atoms";

const NavItem = (props: any) => (
  <Button variant="navigation" as="a" {...props} className="" />
);

export default function TopNavigation() {
  return (
    <FlexRow className="mx-auto gap-2 w-full p-4 border-b border-gray-400 dark:border-gray-600 print:hidden items-center space-between">
      <FlexRow className="items-center gap-2">
        <Avatar
          variant="small"
          className="print:w-16 print:h-16"
          avatar="/torstein.jpeg"
        />
        <div className="text-lg">Torstein Thune</div>
      </FlexRow>

      <FlexRow className="gap-2 justify-end">
        <NavItem href="/cv">CV</NavItem>
        <NavItem href="/scribbles">Notes & Scribbles</NavItem>
      </FlexRow>
    </FlexRow>
  );
}
