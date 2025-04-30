'use client';

import Head from 'next/head';

export default function Home() {
  return (
    <div className="font-light flex flex-col min-h-screen">
      {/* Head */}
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Home</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100;300;400;500&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* Centered Static Image */}
      <main className="flex-grow flex items-start sm:items-center justify-center px-4 mt-2 sm:mt-0">
        <div className="flex justify-center">
          <img
            src="https://raw.githubusercontent.com/chubbydancer/Sebastian_Portfolio_Website/refs/heads/main/images/landing/Main_test.jpg"
            alt="Artwork"
            className="w-full max-w-[500px] sm:max-w-[70vw] h-auto object-contain"
          />
        </div>
      </main>
    </div>
  );
}
