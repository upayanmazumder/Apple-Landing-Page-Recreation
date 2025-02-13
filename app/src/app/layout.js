import "./globals.css";

import Header from "../components/header/header";
import Footer from "../components/footer/footer";

export const metadata = {
  title: "Apple",
  description: "CodeChef VIT Applicant Project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
