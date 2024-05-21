import Header from "@/components/root/header";
import Footer from "@/components/root/footer";
import { Metadata } from "next";
import NextTopLoader from "nextjs-toploader";

export const metadata: Metadata = {
    title: "Samdisha Vishwakarma"
}
export default function RootComponentLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Header />
            {children}
            <NextTopLoader
                color="#5c75f2"
            />
            <Footer />
        </>
    );
}
