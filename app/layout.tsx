import '@/components/ui/global.css';
import { inter } from '@/components/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
        suppressHydrationWarning={true}
      >
        <div id="modal"></div>
        {children}
      </body>
    </html>
  );
}
