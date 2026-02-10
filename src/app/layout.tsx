import { MainProvider } from "./provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MainProvider>{children}</MainProvider>
      </body>
    </html>
  );
}

