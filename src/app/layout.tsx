import type { Metadata } from "next";
import { Providers } from "./providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "ProsConnect — Connect With the Right Professionals",
  description:
    "ProsConnect makes it easier to discover trusted professionals, explore expertise, and connect with the right people for your next project or opportunity.",
  keywords: [
    "professional network",
    "find professionals",
    "connect with professionals",
    "professional marketplace",
    "find skilled professionals",
    "professional services platform",
    "connect with experts",
  ],
  icons: {
    icon: [
      {
        url: "https://res.cloudinary.com/depeqzb6z/image/upload/v1789020932/orange.transparent_4x_dmcjss.png",
        href: "https://res.cloudinary.com/depeqzb6z/image/upload/v1789020932/orange.transparent_4x_dmcjss.png",
      },
      {
        url: "/favicon.png",
        href: "/favicon.png",
      },
    ],
    shortcut: "https://res.cloudinary.com/depeqzb6z/image/upload/v1789020932/orange.transparent_4x_dmcjss.png",
    apple: "https://res.cloudinary.com/depeqzb6z/image/upload/v1789020932/orange.transparent_4x_dmcjss.png",
  },
  openGraph: {
    title: "ProsConnect — Connect With the Right Professionals",
    description:
      "ProsConnect makes it easier to discover trusted professionals, explore expertise, and connect with the right people for your next project or opportunity.",
    type: "website",
    siteName: "ProsConnect",
    images: [
      {
        url: "https://res.cloudinary.com/depeqzb6z/image/upload/v1789020932/orange.transparent_4x_dmcjss.png",
        width: 800,
        height: 600,
        alt: "ProsConnect Icon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ProsConnect — Connect With the Right Professionals",
    description:
      "ProsConnect makes it easier to discover trusted professionals, explore expertise, and connect with the right people for your next project or opportunity.",
    site: "@ProsConnect",
    images: [
      "https://res.cloudinary.com/depeqzb6z/image/upload/v1789020932/orange.transparent_4x_dmcjss.png",
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          href="https://res.cloudinary.com/depeqzb6z/image/upload/v1789020932/orange.transparent_4x_dmcjss.png"
          type="image/png"
        />
        <link
          rel="shortcut icon"
          href="https://res.cloudinary.com/depeqzb6z/image/upload/v1789020932/orange.transparent_4x_dmcjss.png"
          type="image/png"
        />
        <link
          rel="apple-touch-icon"
          href="https://res.cloudinary.com/depeqzb6z/image/upload/v1789020932/orange.transparent_4x_dmcjss.png"
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
