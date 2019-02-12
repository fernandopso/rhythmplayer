chrome.runtime.onMessage.addListener (
  function(request, sender, sendResponse) {
    if (request.message === 'play_or_pause') {
      var video = document.getElementsByTagName('video')[0];
      if (video) {
      	if (video.paused) {
          video.play();
          sendResponse({paused: false, tabId: request.tabId});
      	} else {
          video.pause();
          sendResponse({paused: true, tabId: request.tabId});
      	}
      } else {
      	sendResponse({error: 'No video object found'});
      }
    }

    if (request.message === 'five_seconds') {
      var video = document.getElementsByTagName('video')[0];
      console.log(video);
      if (video) {
        if (video.paused) {
          video.play();
          sendResponse({paused: false, tabId: request.tabId});
        } else {
          video.pause();
          sendResponse({paused: true, tabId: request.tabId});
        }
      } else {
        sendResponse({ error: 'No video object found' });
      }
    }

    if (request.message === 'next') {
      var nextButton = document.getElementsByClassName('ytp-next-button')[0];
      if (nextButton) {
        nextButton.click();
        sendResponse({next: true, tabId: request.tabId});
      } else {
        sendResponse({error: 'Cannot play next video'});
      }
    }
  }
);
