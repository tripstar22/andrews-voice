// * google font imports *
import { Nunito_Sans } from 'next/font/google';

// * google fonts *
const fontSansSerifDefault = Nunito_Sans({
  weight: ['400', '500', '600', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Arial', 'sans-serif'],
});

export default fontSansSerifDefault;
