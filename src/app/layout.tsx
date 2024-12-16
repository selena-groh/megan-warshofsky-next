import { Analytics } from "@vercel/analytics/next";
import React from "react";
import Providers from "./providers";

export const metadata = {
  title: {
    template: "%s | Megan Warshofsky",
    default: "Megan Warshofsky", // a default is required when creating a template
  },
  description: "", // TODO: add description
};

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      // className={fonts.robotoSerif.variable}
      suppressHydrationWarning
    >
      <body>
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  );
}
