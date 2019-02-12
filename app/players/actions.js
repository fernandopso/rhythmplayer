$('.fa-play').on('click', { tabId: tab.id }, function(event) {
  chrome.tabs.sendMessage(event.data.tabId, { message: 'play_or_pause', tabId: event.data.tabId }, function(response) {
    if (response.error) {
      console.warn(response.error);
    }
  });
});

$('.seconds').on('click', { tabId: tab.id }, function(event) {
  chrome.tabs.sendMessage(event.data.tabId, { message: 'five_seconds', tabId: event.data.tabId }, function(response) {
    if (response.error) {
      console.warn(response.error);
    }
  });
});

$('.next').on('click', { tabId: tab.id }, function(event) {
  chrome.tabs.sendMessage(event.data.tabId, { message: 'next', tabId: event.data.tabId }, function(response) {
    if (response.error) {
      console.warn(response.error);
    }
  });
});
