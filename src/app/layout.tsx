import "./globals.css";
import type { Metadata } from "next";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Thune.io",
  description: "Personal website of Torstein Thune",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`bg-gray-100 dark:bg-gray-800 dark text-gray-900 dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
