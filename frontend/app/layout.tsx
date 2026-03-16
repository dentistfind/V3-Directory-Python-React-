import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { OfficeProvider } from "@/context/OfficeContext";
import { DirectoryProvider } from "@/context/DirectoryContext";
import { DFPortalProvider } from "@/context/DFPortalContext";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DentistFind",
  description: "Find a dentist near you. Book services from around 1000+ Dentist and experience hassle-free appointment.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased`}
      >
        <OfficeProvider>
          <DirectoryProvider>
            <DFPortalProvider>
              {children}
            </DFPortalProvider>
          </DirectoryProvider>
        </OfficeProvider>
      </body>
    </html>
  );
}
