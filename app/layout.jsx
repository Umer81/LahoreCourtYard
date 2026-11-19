import Providers from "../components/Providers";
import Nav from "../components/Nav";
import Cursor from "../components/Cursor";
import Footer from "../components/Footer";
import "./globals.css";

export const metadata = {
  title: "Lahore Courtyard | Event Management & PR Agency",
  description: "Events, PR and brand activation. We turn launches into landmarks and campaigns into culture.",
};

export const viewport = { themeColor: "#EFE7D5" };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#EFE7D5] text-[#2E5136] antialiased">
        <Providers><Nav /><Cursor />{children}<Footer /></Providers>
      </body>
    </html>
  );
}
