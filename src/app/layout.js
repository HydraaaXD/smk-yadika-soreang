import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "SMK Yadika Soreang",
  description: "Generated by Student RPL",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-black overflow-x-hidden min-h-screen">
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  );
}
