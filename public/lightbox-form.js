/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/prefer-for-of */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/ban-ts-comment */
(function () {
  try {
    if (document.readyState == "complete") {
      onloadActions_451812();
    } else {
      window.addEventListener(
        "load",
        function () {
          onloadActions_451812();
        },
        false,
      );
    }

    function onloadActions_451812() {
      constructDiv_451812();
      showZForm_451812();
    }

    function constructDiv_451812() {
      var iframeDiv = document.createElement("div");
      iframeDiv.setAttribute(
        "id",
        "RpRK4CHabrTCKwe3sv1FNL5N9TBgcoBzTUZnWs6_Fvo_451812",
      );
      iframeDiv.setAttribute("class", "zf_main_id_451812");

      var closeFormDiv = document.createElement("div");
      closeFormDiv.setAttribute("id", "deleteform_451812");
      closeFormDiv.setAttribute("class", "zf_lb_closeform_451812");
      // @ts-ignore-error
      closeFormDiv.setAttribute("tabindex", 0);

      var containerDiv = document.createElement("div");
      containerDiv.setAttribute("id", "containerDiv_451812");
      containerDiv.setAttribute("class", "zf_lB_Container_451812 ");
      containerDiv.appendChild(iframeDiv);
      containerDiv.appendChild(closeFormDiv);

      var wrapperDiv = document.createElement("div");
      wrapperDiv.setAttribute("class", "zf_lB_Wrapper_451812");
      wrapperDiv.appendChild(containerDiv);

      var dimmerDiv = document.createElement("div");
      dimmerDiv.setAttribute("class", "zf_lB_Dimmer_451812");
      dimmerDiv.setAttribute("elname", "popup_box");

      var mainDiv = document.createElement("div");
      mainDiv.setAttribute("id", "formsLightBox_451812");
      mainDiv.style.display = "none";
      mainDiv.appendChild(wrapperDiv);
      mainDiv.appendChild(dimmerDiv);

      document.body.appendChild(mainDiv);
    }

    function showZForm_451812() {
      // @ts-ignore-error
      var iframe = document
        .getElementById("RpRK4CHabrTCKwe3sv1FNL5N9TBgcoBzTUZnWs6_Fvo_451812")
        .getElementsByTagName("iframe")[0];
      // @ts-ignore-error
      if (iframe == undefined || iframe.length == 0) {
        loadZForm_451812();
      }
      // @ts-ignore-error
      document.getElementById("formsLightBox_451812").style.display = "block";
      document.body.style.overflow = "hidden";
      setTimeout(function () {
        var containerDiv = document.getElementById("containerDiv_451812");
        // @ts-ignore-error
        containerDiv.setAttribute("tabindex", "-1");
        // @ts-ignore-error
        containerDiv.focus();
      }, 100);
    }

    function deleteZForm_451812() {
      var divCont = document.getElementById("formsLightBox_451812");
      // @ts-ignore-error
      divCont.style.display = "none";
      document.body.style.overflow = "";

      // @ts-ignore-error
      var iframe = document
        .getElementById("RpRK4CHabrTCKwe3sv1FNL5N9TBgcoBzTUZnWs6_Fvo_451812")
        .getElementsByTagName("iframe")[0];
      // @ts-ignore-error
      iframe.remove();
    }

    function loadZForm_451812() {
      // @ts-ignore-error
      var iframe = document
        .getElementById("RpRK4CHabrTCKwe3sv1FNL5N9TBgcoBzTUZnWs6_Fvo_451812")
        .getElementsByTagName("iframe")[0];
      // @ts-ignore-error
      if (iframe == undefined || iframe.length == 0) {
        var f = document.createElement("iframe");
        f.src = getsrcurlZForm_451812(
          "https://forms.zohopublic.com/tazamaafricatourssafari1/form/TAZAMAPLANMYTRIPFORM/formperma/RpRK4CHabrTCKwe3sv1FNL5N9TBgcoBzTUZnWs6_Fvo",
        );

        f.style.border = "none";
        f.style.minWidth = "100%";
        f.style.overflow = "hidden";
        var d = document.getElementById(
          "RpRK4CHabrTCKwe3sv1FNL5N9TBgcoBzTUZnWs6_Fvo_451812",
        );
        // @ts-ignore-error
        d.appendChild(f);

        var deleteForm = document.getElementById("deleteform_451812");
        // @ts-ignore-error
        deleteForm.onclick = deleteZForm_451812;
        // @ts-ignore-error
        deleteForm.addEventListener("keydown", function (event) {
          if (
            event.key === "Enter" ||
            event.keyCode === 13 ||
            event.key === " " ||
            event.keyCode === 32
          ) {
            event.preventDefault();
            deleteZForm_451812();
          }
        });

        window.addEventListener(
          "message",
          function () {
            // @ts-ignore-error
            var evntData = event.data;
            if (evntData && evntData.constructor == String) {
              var zf_ifrm_data = evntData.split("|");
              if (zf_ifrm_data.length == 2 || zf_ifrm_data.length == 3) {
                var zf_perma = zf_ifrm_data[0];
                // @ts-ignore-error
                var zf_ifrm_ht_nw = parseInt(zf_ifrm_data[1], 10) + 15 + "px";
                // @ts-ignore-error
                var iframe = document
                  .getElementById(
                    "RpRK4CHabrTCKwe3sv1FNL5N9TBgcoBzTUZnWs6_Fvo_451812",
                  )
                  .getElementsByTagName("iframe")[0];
                if (
                  // @ts-ignore-error
                  iframe.src.indexOf("formperma") > 0 &&
                  // @ts-ignore-error
                  iframe.src.indexOf(zf_perma) > 0
                ) {
                  // @ts-ignore-error
                  var prevIframeHeight = iframe.style.height;

                  var zf_tout = false;
                  if (zf_ifrm_data.length == 3) {
                    // @ts-ignore-error
                    iframe.scrollIntoView();
                    zf_tout = true;
                  }

                  if (prevIframeHeight != zf_ifrm_ht_nw) {
                    if (zf_tout) {
                      setTimeout(function () {
                        // @ts-ignore-error
                        iframe.style.minHeight = zf_ifrm_ht_nw;
                        var containerDiv = document.getElementById(
                          "containerDiv_451812",
                        );
                        // @ts-ignore-error
                        containerDiv.style.height = zf_ifrm_ht_nw;
                      }, 500);
                    } else {
                      // @ts-ignore-error
                      iframe.style.minHeight = zf_ifrm_ht_nw;
                      var containerDiv = document.getElementById(
                        "containerDiv_451812",
                      );
                      // @ts-ignore-error
                      containerDiv.style.height = zf_ifrm_ht_nw;
                    }
                  }
                }
              }
            }
          },
          false,
        );
      }
    }

    // @ts-ignore-error
    function getsrcurlZForm_451812(zf_src) {
      try {
        if (
          // @ts-ignore-error
          typeof ZFAdvLead !== "undefined" &&
          // @ts-ignore-error
          typeof zfutm_zfAdvLead !== "undefined"
        ) {
          for (
            var prmIdx = 0;
            // @ts-ignore-error
            prmIdx < ZFAdvLead.utmPNameArr.length;
            prmIdx++
          ) {
            // @ts-ignore-error
            var utmPm = ZFAdvLead.utmPNameArr[prmIdx];
            // @ts-ignore-error
            var utmVal = zfutm_zfAdvLead.zfautm_gC_enc(
              // @ts-ignore-error
              ZFAdvLead.utmPNameArr[prmIdx],
            );
            if (typeof utmVal !== "undefined") {
              if (utmVal != "") {
                if (zf_src.indexOf("?") > 0) {
                  zf_src = zf_src + "&" + utmPm + "=" + utmVal; //No I18N
                } else {
                  zf_src = zf_src + "?" + utmPm + "=" + utmVal; //No I18N
                }
              }
            }
          }
        }

        if (
          // @ts-ignore-error
          typeof ZFLead !== "undefined" &&
          // @ts-ignore-error
          typeof zfutm_zfLead !== "undefined"
        ) {
          // @ts-ignore-error
          for (var prmIdx = 0; prmIdx < ZFLead.utmPNameArr.length; prmIdx++) {
            // @ts-ignore-error
            var utmPm = ZFLead.utmPNameArr[prmIdx];
            // @ts-ignore-error
            var utmVal = zfutm_zfLead.zfutm_gC_enc(ZFLead.utmPNameArr[prmIdx]);
            if (typeof utmVal !== "undefined") {
              if (utmVal != "") {
                if (zf_src.indexOf("?") > 0) {
                  zf_src = zf_src + "&" + utmPm + "=" + utmVal; //No I18N
                } else {
                  zf_src = zf_src + "?" + utmPm + "=" + utmVal; //No I18N
                }
              }
            }
          }
        }
      } catch (e) {}
      return zf_src;
    }
    var buttonElem = document.getElementById("zf_button_451812");
    // @ts-ignore-error
    buttonElem.style.display = "block";
    // @ts-ignore-error
    buttonElem.addEventListener("click", showZForm_451812);
  } catch (e) {}
})();
