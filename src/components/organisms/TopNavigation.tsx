import { Avatar, Button, FlexRow } from "../atoms";

const NavItem = (props: any) => (
  <Button variant="navigation" as="a" {...props} className="" />
);

export default function TopNavigation() {
  return (
    <FlexRow className="mx-auto gap-2 w-full p-2 bg-black bg-opacity-20 items-center space-between rounded-xl shadow-md">
      <FlexRow className="items-center gap-2">
        <Avatar
          variant="smallSquare"
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
