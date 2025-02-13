import "./globals.css";

import Header from "../components/header/header";

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
      </body>
    </html>
  );
}
