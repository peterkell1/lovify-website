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
export const metadata: Metadata = {
  title: `${site.brand.name} — ${site.brand.tagline}`,
  description: site.brand.description,
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
