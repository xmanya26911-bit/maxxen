import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://maxxen.vercel.app"),
  title: {
    default: "maxxen.ai — Custom Websites & Web Applications",
    template: "%s · maxxen.ai",
  },
  description:
    "We design and build custom websites and web applications that move minds and markets. Bespoke digital experiences for brands with soul.",
  openGraph: {
    title: "maxxen.ai — Web & App Development Atelier",
    description: "Bespoke websites, web applications, and digital experiences — forged for brands with soul.",
    type: "website",
    siteName: "maxxen.ai",
  },
}

export const viewport: Viewport = {
  themeColor: "#17100c",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600&family=Pinyon+Script&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
