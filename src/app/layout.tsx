import type { Metadata } from "next";
import "./globals.css";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileStickyBar from "@/components/layout/MobileStickyBar";
import { DonationPopupProvider } from "@/components/donation/DonationPopupContext";
import DonationPopup from "@/components/donation/DonationPopup";
import DonationNotification from "@/components/ui/DonationNotification";

export const metadata: Metadata = {
  title: "Caring Hearts",
  description:
    "Caring Hearts — providing humanitarian relief and ending world hunger and global poverty.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <DonationPopupProvider>
          <AnnouncementBar />
          <Header />
          <main>{children}</main>
          <Footer />
          <MobileStickyBar />
          <DonationPopup />
          <DonationNotification />
        </DonationPopupProvider>
      </body>
    </html>
  );
}
