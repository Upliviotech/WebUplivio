export const metadata = {
  title: 'Uplivio',
  description: 'Moderní marketingové řešení pro váš byznys.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="cs">
      <body>{children}</body>
    </html>
  );
}
