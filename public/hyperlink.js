// @ts-nocheck
function zforms_open_window(url, height, width) {
  var leftPos = 0;
  var topPos = 0;
  if (screen) {
    leftPos = (screen.width - width) / 2;
    topPos = (screen.height - height) / 2;
    window.open(url, null, 'width=' + width + ',height=' + height + ',left=' + leftPos + ',top=' + topPos + ', toolbar=0, location=0, status=1, scrollbars=1, resizable=1');
  }
}
