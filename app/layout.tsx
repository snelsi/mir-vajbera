import "./styles.scss";

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Всем отличного настроения!</title>
      </head>
      <body>{children}</body>
    </html>
  );
}

export default RootLayout;
