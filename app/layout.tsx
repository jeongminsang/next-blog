import './styles/globals.css'
import type { Metadata } from 'next'
import StyledComponentsRegistry from './registry'
import Header from './components/Header'
import Footer from './components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://minsang-blog.vercel.app/'),
  title: 'Minsang.dev',
  generator: 'Next.js',
  applicationName: 'Minsang.dev',
  keywords: ['Next.js', 'React', 'TypeScript'],
  authors: [{ name: 'Minsang' }],
  openGraph: {
    title: 'Minsang.dev',
    description: "Minsang's Tech Blog",
    url: 'https://minsang-blog.vercel.app/',
    siteName: 'Next.js',
    images: [
      {
        url: '/blogSc.png',
        width: 968,
        height: 370,
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const setThemeMode = `
    if(!window.localStorage.getItem('theme')){
      localStorage.theme = 'dark'
    }
    document.body.dataset.theme = window.localStorage.getItem('theme')
  `
  const channelTalkScript = `
    (function(){var w=window;if(w.ChannelIO){return w.console.error("ChannelIO script included twice.");}var ch=function(){ch.c(arguments);};ch.q=[];ch.c=function(args){ch.q.push(args);};w.ChannelIO=ch;function l(){if(w.ChannelIOInitialized){return;}w.ChannelIOInitialized=true;var s=document.createElement("script");s.type="text/javascript";s.async=true;s.src="https://cdn.channel.io/plugin/ch-plugin-web.js";var x=document.getElementsByTagName("script")[0];if(x.parentNode){x.parentNode.insertBefore(s,x);}}if(document.readyState==="complete"){l();}else{w.addEventListener("DOMContentLoaded",l);w.addEventListener("load",l);}})();

  ChannelIO('boot', {
    "pluginKey": "${process.env.NEXT_PUBLIC_KEY}"
  });
  `

  return (
    <html lang="en">
      <StyledComponentsRegistry>
        <body>
          <script
            dangerouslySetInnerHTML={{
              __html: setThemeMode,
            }}
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: channelTalkScript,
            }}
          ></script>
          <Header />
          {children}
          <Footer />
        </body>
      </StyledComponentsRegistry>
    </html>
  )
}
