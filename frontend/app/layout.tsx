import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { OfficeProvider } from "@/context/OfficeContext";
import { DirectoryProvider } from "@/context/DirectoryContext";
import { DFPortalProvider } from "@/context/DFPortalContext";
import { OfficePortalProvider } from "@/context/OfficePortalContext";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DentistFind",
  description: "Find a dentist near you. Book services from around 1000+ Dentist and experience hassle-free appointment.",
  viewport: "width=device-width, initial-scale=1.0, viewport-fit=cover",
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
              <OfficePortalProvider>
                {children}
              </OfficePortalProvider>
            </DFPortalProvider>
          </DirectoryProvider>
        </OfficeProvider>
      </body>
    </html>
  );
}
