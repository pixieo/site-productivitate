import { Html, Head, Main, NextScript } from 'next/document'
import { nunito_300 } from '../ui/fonts';

export default function Document() {
  return (
    <Html lang="en" className='scroll-smooth' id='top'>
      <Head />
      <body className={`${nunito_300.className} antialias bg-beige-200`}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}