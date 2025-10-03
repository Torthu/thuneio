import { View } from "@/components";
import { FlexCol } from "@torthu/jacketui-components";

export default function ScribblesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <View>
      <FlexCol className="gap-6 mx-auto mb-8 p-6 bg-gray-100 border-gray-200 dark:bg-gray-800 md:border dark:border-gray-700 md:rounded">
        {children}
      </FlexCol>
    </View>
  );
}
