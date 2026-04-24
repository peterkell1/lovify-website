import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";
import { site } from "@/content/site";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const pageTitle = `${site.brand.name} — ${site.brand.tagline}`;

export const metadata: Metadata = {
  metadataBase: new URL(site.brand.url),
  title: pageTitle,
  description: site.brand.description,
  openGraph: {
    type: "website",
    url: site.brand.url,
    siteName: site.brand.name,
    title: pageTitle,
    description: site.brand.description,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: site.brand.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: site.brand.description,
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: site.brand.logo,
    apple: site.brand.logo,
  },
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en" className={`${archivo.variable}`}>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
};

export default RootLayout;
