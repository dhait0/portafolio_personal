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
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
