/* eslint-disable @typescript-eslint/prefer-optional-chain */
'use client';

import React from 'react';

const ZohoFormLink = () => {
  const openZohoForm = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();

    const url = e.currentTarget.href;
    const width = 700;
    const height = 648;
    let leftPos = 0;
    let topPos = 0;

    if (typeof window !== 'undefined' && window.screen) {
      leftPos = (window.screen.width - width) / 2;
      topPos = (window.screen.height - height) / 2;

      window.open(
        url,
        '_blank',
        `width=${width},height=${height},left=${leftPos},top=${topPos},toolbar=0,location=0,status=1,scrollbars=1,resizable=1`
      );
    }
  };

  return (
    <a
      href="https://forms.zohopublic.com/tazamaafricatourssafari1/form/TAZAMAPLANMYTRIPFORM/formperma/RpRK4CHabrTCKwe3sv1FNL5N9TBgcoBzTUZnWs6_Fvo"
      title="PLAN MY TRIP FORM"
      onClick={openZohoForm}
    >
      Access Form
    </a>
  );
};

export default ZohoFormLink;
