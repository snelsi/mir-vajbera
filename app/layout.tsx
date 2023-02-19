import "./styles.scss";

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>Всем отличного настроения!</title>
        <meta name="title" content="Всем отличного настроения!" />
        <meta
          name="description"
          content="Утром солнышко проснулось, Сладко-сладко потянулось, Улыбнулось и опять, Вышло по небу гулять! Удачного дня! Добрых улыбок!"
        />
        <meta property="og:title" content="Всем отличного настроения!" />
        <meta
          property="og:description"
          content="Утром солнышко проснулось, Сладко-сладко потянулось, Улыбнулось и опять, Вышло по небу гулять! Удачного дня! Добрых улыбок!"
        />
        <meta
          property="og:image"
          content="https://mir-vajbera.vercel.app/thumbnail.jpg"
        />
        <meta property="twitter:card" content="summary_large_image" />
      </head>
      <body>{children}</body>
    </html>
  );
}

export default RootLayout;
