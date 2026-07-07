import Head from "next/head";

type SeoHeadProps = {
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  type?: "website" | "article";
  canonicalPath?: string;
};

const defaultImage = "/og-default.svg";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");

function resolveUrl(path: string) {
  if (/^https?:\/\//.test(path)) {
    return path;
  }

  if (siteUrl) {
    return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
  }

  return path;
}

export function SeoHead({
  title,
  description,
  image = defaultImage,
  imageAlt = title,
  type = "website",
  canonicalPath,
}: SeoHeadProps) {
  const imageUrl = resolveUrl(image);
  const canonicalUrl = canonicalPath ? resolveUrl(canonicalPath) : undefined;
  const ogUrl = canonicalUrl ?? siteUrl;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="theme-color" content="#102132" />
      {canonicalUrl ? <link rel="canonical" href={canonicalUrl} /> : null}
      {ogUrl ? <meta property="og:url" content={ogUrl} /> : null}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:alt" content={imageAlt} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:image:alt" content={imageAlt} />
    </Head>
  );
}
