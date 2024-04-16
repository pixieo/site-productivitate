import '@/app/ui/global.css';
import { cormorantGaramond } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className='scroll-smooth' id='top'>
      <body className={`${cormorantGaramond.className} antialias bg-beige-200`}>{children}</body>
    </html>
  );
}
