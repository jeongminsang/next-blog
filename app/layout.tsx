import "./styles/globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import StyledComponentsRegistry from "./registry";
import Header from "./components/Header";
import Footer from "./components/Footer";
import EmptyDiv from "./components/EmptyDiv";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://minsang.dev/"),
  title: "Minsang.dev",
  generator: "Next.js",
  applicationName: "Minsang.dev",
  keywords: ["Next.js", "React", "TypeScript"],
  authors: [{ name: "Minsang" }],
  openGraph: {
    title: "Minsang.dev",
    description: "Minsang's Tech Blog",
    url: "https://minsang.dev/",
    siteName: "Next.js",
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
    <html lang='en' suppressHydrationWarning>
      <StyledComponentsRegistry>
        <body className={inter.className}>
          <ThemeProvider>
            <Header />
            <EmptyDiv />
            {children}
            <Footer />
          </ThemeProvider>
        </body>
      </StyledComponentsRegistry>
    </html>
  );
}
