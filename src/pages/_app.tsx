import '../styles/globals.css';
import 'locomotive-scroll/dist/locomotive-scroll.css';

import { LazyMotion, domAnimation } from 'framer-motion';

import type { AppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          rel="shortcut icon"
          href="/rounded-avatar.png"
          type="image/x-icon"
        />

        <title>{`Manaz PR Portfolio`}</title>

        <meta name="title" content="Manaz PR" />
        <meta name="description" content="Manaz PR" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Manaz PR" />
        <meta property="og:description" content="Developer // Designer" />
        <meta property="og:image" content="/thumbnail.jpg" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Manaz PR" />
        <meta property="twitter:description" content="Developer // Designer" />
        <meta property="twitter:image" content="/thumbnail.jpg" />
      </Head>
      <LazyMotion features={domAnimation}>
        <Component {...pageProps} />
      </LazyMotion>
      <Script
        strategy="lazyOnload"
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
      ></Script>
      <Script id="google-analytics" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
        `}
      </Script>
    </>
  );
}

export default MyApp;
