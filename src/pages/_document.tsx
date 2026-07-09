import { Head, Html, Main, NextScript } from "next/document";
import Document, { type DocumentContext, type DocumentInitialProps } from "next/document";

type MyDocumentProps = DocumentInitialProps & {
  locale?: string;
};

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<MyDocumentProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps, locale: ctx.locale ?? "es" };
  }

  render() {
    const { locale } = this.props as MyDocumentProps;

    return (
      <Html lang={locale ?? "es"}>
        <Head>
          <link rel="icon" type="image/png" href="/favicon.png" />
          <link rel="apple-touch-icon" href="/favicon.png" />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function () {
                  if ('scrollRestoration' in history) {
                    history.scrollRestoration = 'manual';
                  }

                  function resetHomeScroll() {
                    if (location.pathname === '/' && !location.hash) {
                      window.scrollTo(0, 0);
                    }
                  }

                  resetHomeScroll();
                  document.addEventListener('DOMContentLoaded', resetHomeScroll, { once: true });
                  window.addEventListener('load', resetHomeScroll, { once: true });
                  window.addEventListener('pageshow', resetHomeScroll);
                  window.requestAnimationFrame(resetHomeScroll);
                  window.setTimeout(resetHomeScroll, 50);
                  window.setTimeout(resetHomeScroll, 250);
                })();
              `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
