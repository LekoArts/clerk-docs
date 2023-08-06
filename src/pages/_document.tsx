import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script
          defer
          data-domain="beta-docs.clerk.dev"
          src="https://plausible.io/js/script.js"
        ></script>
        <meta name="robots" content="noindex"></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}