chrome.tabs.query({ url: '*://www.youtube.com/watch?v*' }, function(tabs) {
	tabs.forEach(function(tab) {
		appendSong(tab.id, tab.title, tab.url);
	});
});
