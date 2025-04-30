// app/contact/page.js
import Head from 'next/head';

export default function Contact() {
  return (
    <div className="font-light bg-white text-[#2A2A2A] flex flex-col min-h-screen">
      {/* Head Component for Meta Tags */}
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Contact</title>

        {/* Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100;300;400;500&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center px-4 py-10 text-center">
        <p className="text-lg mb-4">fernersebastian@gmail.com</p>
        <p className="text-lg">
          <a
            href="https://www.instagram.com/ateljesebastianferner"
            className="text-black no-underline hover:text-gray-500"
          >
            Instagram
          </a>
        </p>
      </main>
    </div>
  );
}
