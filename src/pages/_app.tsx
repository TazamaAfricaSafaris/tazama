import type { AppType } from "next/app";
import Layout from "~/components/ui/Layout";
import { api } from "~/lib/api";
import { Analytics } from "@vercel/analytics/react";

import { ReactLenis, type LenisRef } from 'lenis/react';
import { cancelFrame, frame } from 'framer-motion';

import { Raleway } from "next/font/google";
import localFont from "next/font/local"

import "~/styles/globals.css";
import { env } from "~/env";
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";
import React, { useEffect, useRef } from "react";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { SpeedInsights } from "@vercel/speed-insights/next";


export const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
});

export const amiora = localFont({
  src: '../fonts/Amiora.ttf',
  variable: '--font-amiora'
})

if (typeof window !== "undefined") {
  // checks that we are client-side
  posthog.init(env.NEXT_PUBLIC_POSTHOG_KEY, {
    api_host: env.NEXT_PUBLIC_POSTHOG_HOST || "https://app.posthog.com",
    loaded: (posthog) => {
      if (env.NODE_ENV === "development") posthog.debug(); // debug mode in development
    },
  });
}

const MyApp: AppType = ({ Component, pageProps }) => {
  const lenisRef = useRef<LenisRef>(null)

  useEffect(() => {
    function update(data: { timestamp: number }) {
      const time = data.timestamp
      lenisRef.current?.lenis?.raf(time)
    }

    frame.update(update, true)

    return () => cancelFrame(update)
  }, [])

  return (
    <ReactLenis
    options={{
      autoRaf: false,
      duration: 1.5,          // Scroll animation duration (seconds)
      smoothWheel: true,      // Enable smooth mouse wheel scrolling
      infinite: false,
    }}
    ref={lenisRef}
    root
    >
      <React.Fragment>
        <style jsx global>
          {`
          :root {
            --font-raleway: ${raleway.variable};
            --font-amiora: ${amiora.variable};
          }
          
          h1,
          h2,
          h3,
          h4,
          h5,
          h6,
          .font-serif {
            font-family: ${amiora.style.fontFamily};
          }
        `}
        </style>
        <GoogleAnalytics gaId={env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
        <GoogleTagManager gtmId={env.NEXT_PUBLIC_GOOGLE_TAG_ID} />
        <SpeedInsights />
        <PostHogProvider client={posthog}>
          <main className={`${raleway.variable}`}>
            <Layout>
              <Component {...pageProps} />
              <Analytics />
            </Layout>
          </main>
        </PostHogProvider>
      </React.Fragment>
    </ReactLenis>
  );
};

export default api.withTRPC(MyApp);
