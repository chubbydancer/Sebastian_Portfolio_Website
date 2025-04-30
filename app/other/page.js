import Head from 'next/head';

export default function Other() {
  return (
    <div className="font-light flex flex-col min-h-screen justify-start items-center">
      {/* Head Component for Meta Tags */}
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Other</title>

        {/* Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100;300;400;500&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* Main Content Section */}
      <main className="flex flex-col justify-start items-center py-10">
        <div className="container mx-auto px-4 text-center">
          {/* Text Section */}
          <p className="text-lg italic mb-6">More work coming soon</p>
        </div>
      </main>
    </div>
  );
}
