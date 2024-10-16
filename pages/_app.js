import '../styles/global.scss'
import { ThemeProvider } from 'next-themes'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="system">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Andriy Koval - Front End Developer"
        />
        <meta name="color-scheme" content="dark light" />
        <meta name="og:title" content='Andriy Koval - Front End Developer' />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp