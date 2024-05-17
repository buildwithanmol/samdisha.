import { Metadata } from "next";
import "./globals.css";
import { Poppins } from 'next/font/google'
import { GoogleAnalytics } from '@next/third-parties/google';

export const metadata: Metadata = {
  title: "Empower your online journey with tips and tech content.",
  description: "Discover easy ways to excel in web development, design, and SEO. Stay motivated and dive into coding, web design trends, and SEO hacks for success!",
  keywords: [
    "web development tips",
    "website building",
    "coding tutorials",
    "programming languages",
    "web development trends",
    "web development tools",
    "front end frameworks",
    "HTML",
    "CSS",
    "JavaScript",
    "responsive design",
    "UI/UX design",
    "SEO strategies",
    "on-page SEO",
    "off-page SEO",
    "keyword research",
    "SEO techniques",
    "optimizing website for search engines",
    "success mindset",
    "freelance opportunities",
    "passive income ideas",
    "online business tips",
    "affiliate marketing",
    "monetizing websites",
    "digital marketing strategies"
  ]
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
      <GoogleAnalytics gaId="G-MYSH2L3KLD" />
    </html>
  );
}
