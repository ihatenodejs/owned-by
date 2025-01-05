import type { Metadata } from "next";
import '@fontsource-variable/manrope';
import "./globals.css";

export const metadata: Metadata = {
  title: "Domain owned by p0ntus",
  description: "This domain is owned by p0ntus. This domain is not for sale and never will be.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
