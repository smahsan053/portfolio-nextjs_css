import { ThemeProvider } from 'next-themes'

import Analytics from './components/Analytics'
import { robotoFont } from './components/Fonts'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'
import './styles/reset.css'
import './styles/theme.css'
import './styles/global.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={robotoFont.className} suppressHydrationWarning>
      <head>
        <title>Syed Ahsan _ Senior front-end developer in Pakistan</title>
        <meta
          name="description"
          content="Hello, i’m Syed Ahsan :) An engineer graduated in Industrial Engineering now exploring AI & web development to satisfy my passion"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Ahsan's Portfolio" />
        <meta
          property="og:description"
          content="Hello, i’m Syed Ahsan :) An engineer graduated in Industrial Engineering now exploring AI & web development to satisfy my passion."
        />
        <meta name="viewport" content="width=device-width,minimum-scale=1" />
      </head>
      <body>
        <ThemeProvider>
          <Header />
          <Main>{children}</Main>
          <Footer />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
