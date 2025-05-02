import "./styles/globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import StyledComponentsRegistry from "./registry";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://minsang-blog.vercel.app/"),
  title: "Minsang.dev",
  generator: "Next.js",
  applicationName: "Minsang.dev",
  keywords: ["Next.js", "React", "TypeScript"],
  authors: [{ name: "Minsang" }],
  openGraph: {
    title: "Minsang.dev",
    description: "Minsang's Tech Blog",
    url: "https://minsang-blog.vercel.app/",
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
            {children}
            <Footer />
          </ThemeProvider>
        </body>
      </StyledComponentsRegistry>
    </html>
  );
}
