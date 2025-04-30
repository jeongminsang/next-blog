import "./styles/globals.css";
import type { Metadata } from "next";
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
  const setThemeMode = `
    if(!window.localStorage.getItem('theme')){
      localStorage.theme = 'dark'
    }
    document.body.dataset.theme = window.localStorage.getItem('theme')
  `;

  return (
    <html lang='en'>
      <StyledComponentsRegistry>
        <body className={inter.className}>
          <script
            dangerouslySetInnerHTML={{
              __html: setThemeMode,
            }}
          ></script>
          <Header />
          {children}
          <Footer />
        </body>
      </StyledComponentsRegistry>
    </html>
  );
}
