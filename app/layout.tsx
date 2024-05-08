import { Metadata } from "next";
import "./globals.css";
import { Poppins } from 'next/font/google'

export const metadata: Metadata = {
  title: "Samdisha Vishwakarma"
}

const poppins = Poppins({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}
      </body>
    </html>
  );
}
