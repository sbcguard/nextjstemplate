import ClientWrapper from '@/layouts/ClientWrapper';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Nextjs Template',
  description: 'Generated by Next-js Template',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
