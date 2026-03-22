import type { Metadata } from "next";
import { Providers } from "./providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "ProsConnect – Virtual Meetings for Nigerian Professionals",
  description: "Reliable video conferencing, smart scheduling, and AI meeting notes — built for African bandwidth realities.",
  authors: [{ name: "ProsConnect" }],
  openGraph: {
    title: "ProsConnect – Professional Virtual Meetings",
    description: "Reliable video conferencing, smart scheduling, and AI meeting notes — built for African bandwidth realities.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@ProsConnect",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
