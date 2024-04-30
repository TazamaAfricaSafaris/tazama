import { useEffect } from "react";

const useGoogleAdsConversion = () => {
  useEffect(() => {
    if (typeof window !== undefined) {
      window.dataLayer = window.dataLayer || [];

      function gtag() {
        window.dataLayer?.push(arguments);
      }
      gtag("js", new Date());
      gtag("config", "AW-6797462830");
      gtag("event", "conversion_event_submit_lead_form");
    }
  }, []);
};

export default useGoogleAdsConversion;
