import { View } from "@/components";
import { FlexCol } from "@torthu/jacketui-components";

export default function ScribblesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <View>
      <FlexCol className="gap-6 mx-auto mb-8 p-6">{children}</FlexCol>
    </View>
  );
}
