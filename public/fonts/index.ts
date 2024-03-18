import { IBM_Plex_Serif } from 'next/font/google';

export const ibmPlexSerif = IBM_Plex_Serif({
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-ibm-plex-serif',
  subsets: ['latin'],
  display: 'swap',
});
