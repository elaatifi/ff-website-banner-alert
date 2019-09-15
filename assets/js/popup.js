window.onload = function() {
  document.getElementById("force-update-urls").addEventListener("click", function(evt) {
    if (confirm("Bạn có thực sự muốn cập nhật lại các cài đặt từ API?")) {
      browser.tabs.query({active: true, currentWindow: true}, function(tabs) {
        if (tabs.length) {
          browser.tabs.sendMessage(tabs[0].id, {
            event: "FF_WEBSITE_BANNER_ALERT_FORCE_UPDATE_URLS"
          });
        }
      })
    }
  });
}
