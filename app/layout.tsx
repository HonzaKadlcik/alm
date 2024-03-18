import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import localFont from '@next/font/local';
import "./globals.css";

const WindowsXpTahoma = localFont({
    src: [
        {
            path: 'fonts/windows-xp-tahoma.ttf',
            weight: '900'
        }
    ],
    variable: '--font-windows-xp-tahoma'
});

const inter = Inter({ subsets: ["latin"] });
const robotoMono= Roboto_Mono({ subsets: ["latin"] });
export const metadata: Metadata = {
    title: "Anonymous Live Messenger",
    description: "Bezplatná anonymní aplikace pro chatování.",
    icons: "img/icon.png",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={WindowsXpTahoma.className}>{children}</body>
        </html>
    );
}
