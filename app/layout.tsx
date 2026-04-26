import "./styles/globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Inter, JetBrains_Mono } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://minsang.dev/"),
  title: "Minsang.dev",
  description: "Architecting the Future of Engineering.",
  generator: "Next.js",
  applicationName: "Minsang.dev",
  keywords: ["Next.js", "React", "TypeScript"],
  authors: [{ name: "Minsang" }],
  openGraph: {
    title: "Minsang.dev",
    description: "Architecting the Future of Engineering.",
    url: "https://minsang.dev/",
    siteName: "Minsang.dev",
    images: [
      {
        url: "/blogSc.png",
        width: 968,
        height: 370,
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang='en'
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className='bg-bg-base text-primary font-sans'>
        <ThemeProvider attribute='class' defaultTheme='dark'>
          <Header />
          <main className='flex-1 min-h-screen'>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
