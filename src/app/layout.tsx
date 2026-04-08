import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
export const metadata: Metadata = {
  title: "Lovify — Transform Your Life Through Music",
  description:
    "The first app that uses personalized music and visualization to reprogram your subconscious mind and create the life you want.",
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
