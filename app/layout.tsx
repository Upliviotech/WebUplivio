export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body style={{ margin: 0, fontFamily: 'Arial, sans-serif', background: '#000', color: '#fff' }}>
        {children}
      </body>
    </html>
  );
}
