browser.webNavigation.onHistoryStateUpdated.addListener(function(details) {
  browser.tabs.sendMessage(details.tabId, {
    event: "FF_WEBSITE_BANNER_ALERT_HISTORY_STATE_UPDATE"
  });
});
