import Head from "next/head";

export default function HeadSEO({
  title,
  keywords,
  description
}: {
  title: string;
  keywords: string;
  description?: string;
}) {
  return (
    <Head>
      {/* keywords tags */}
      <meta name="keywords" content={keywords} />

      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta
        name="description"
        content={description ? description :"Explore East Africa with custom-designed safaris and tours from Tazama Africa"}
      />
      <link rel="shortcut icon" href="/assets/images/logos/favicon.ico" />
      {/* Open Graph stuff */}
      <meta
        property="og:image"
        content="https://res.cloudinary.com/drhl0yu7y/image/upload/v1708505897/family_safari/frzvpsec6tiivi2aeszm.jpg"
      />

      <meta property="og:type" content="website" />

      <meta property="og:site_name" content="Tazama Africa Tours and Safaris" />
      <meta property="og:title" content="Tazama Africa Tours and Safaris" />
      <meta property="og:url" content="https://www.tazamaafricasafari.com" />
      <meta property="og:type" content="website" />
      <meta
        property="og:description"
        content={description ? description : "Helping you design the safari of your dreams. Tazama Africa designs unique travel experiences throughout East Africa, giving you the trip of a lifetime."}
      />

      <meta name="twitter:title" content="Tazama Africa Tours and Safaris" />
      <meta name="twitter:url" content="https://www.tazamaafricasafari.com" />
      <meta name="twitter:card" content="summary" />
      <meta
        property="twitter:image"
        content="https://www.tazamaafricasafari.com/assets/images/gallery/family-trip.webp"
      />
      <meta
        name="twitter:description"
        content="Helping you design the safari of your dreams. Tazama Africa designs unique travel experiences throughout East Africa, giving you the trip of a lifetime."
      />
      <meta
        name="description"
        content={description ? description : "Helping you design the safari of your dreams. Tazama Africa designs unique travel experiences throughout East Africa, giving you the trip of a lifetime."}
      />
      <title>{title}</title>
      <script
        src="https://assets.usestyle.ai/seonajsplugin"
        defer
        id="seona-js-plugin"
      ></script>
    </Head>
  );
}
