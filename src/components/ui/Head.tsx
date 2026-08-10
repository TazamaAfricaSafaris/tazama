import Head from "next/head";
import Script from "next/script";

const SITE_URL = "https://www.tazamaafricasafari.com";
const DEFAULT_DESCRIPTION =
  "Helping you design the safari of your dreams. Tazama Africa designs unique travel experiences throughout East Africa, giving you the trip of a lifetime.";
const DEFAULT_IMAGE =
  "https://res.cloudinary.com/drhl0yu7y/image/upload/v1708505897/family_safari/frzvpsec6tiivi2aeszm.jpg";

export default function HeadSEO({
  title,
  description,
  path = "",
  image = DEFAULT_IMAGE,
  noindex = false,
  jsonLd
}: {
  title: string;
  description?: string;
  path?: string;
  image?: string;
  noindex?: boolean;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}) {
  const url = `${SITE_URL}${path}`;
  const desc = description ?? DEFAULT_DESCRIPTION;
  const schemas = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={desc} key="description" />
        <link rel="canonical" href={url} />
        {noindex && <meta name="robots" content="noindex,nofollow" />}

        <link rel="shortcut icon" href="/assets/images/logos/favicon.ico" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Tazama Africa Tours and Safaris" />
        <meta property="og:title" content={title} key="og:title" />
        <meta property="og:description" content={desc} key="og:description" />
        <meta property="og:url" content={url} key="og:url" />
        <meta property="og:image" content={image} key="og:image" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} key="twitter:title" />
        <meta name="twitter:description" content={desc} key="twitter:description" />
        <meta name="twitter:image" content={image} key="twitter:image" />

        {schemas.map((schema, i) => (
          <script
            key={`jsonld-${i}`}
            type="application/ld+json"
            // eslint-disable-next-line @typescript-eslint/naming-convention
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </Head>

      <Script
        src="https://assets.usestyle.ai/seonajsplugin"
        strategy="afterInteractive"
        id="seona-js-plugin"
      />
    </>
  );
}