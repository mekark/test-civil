import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

// Single variable font, latin only, swapped in: one small file, no layout-blocking.
const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "RCC & Civil Construction Contractor in Chennai | Mekark",
  description:
    "Mekark delivers commercial RCC construction, industrial civil works and turnkey building solutions across Tamil Nadu and India. Request your free project blueprint.",
};

export const viewport: Viewport = {
  themeColor: "#060606",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
