import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { AppThemeProvider } from "./styles/AppThemeProvider";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Kultirat Phongpun",
  description: "A UX/UI Designer, Responsive design and web development.",
  keywords:
    "Kultirat Phongpun, Kultirat, Phongpun, Kultirat Phongpun, UX/UI Designer, Responsive design",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <body>
        <AppThemeProvider>{children}</AppThemeProvider>
      </body>
    </html>
  );
}
