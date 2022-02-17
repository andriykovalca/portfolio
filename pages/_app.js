// import App from 'next/app'

import '../styles/global.scss'
import { ThemeProvider } from 'next-themes'



function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="system">
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp