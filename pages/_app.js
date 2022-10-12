import { ThemeProvider } from 'styled-components'
import '../styles/globals.css'
import { lightTheme, darkTheme } from './theme';
import { GlobalStyles } from './global';

import Navbar from './components/Navbar';

function MyApp({ Component, pageProps }) {

  return (
    <ThemeProvider theme={darkTheme}>
      <Navbar />
      <Component {...pageProps} />
    </ThemeProvider>)
}

export default MyApp
