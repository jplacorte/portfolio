import React from 'react';

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html className="overscroll-none" lang="en">
      <body className="text-sm text h-screen w-screen overflow-hidden overscroll-none flex">
        {children}
      </body>
    </html>
  );
}
