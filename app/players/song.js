function appendSong(id, title, url) {
  $("body").append(
    $("<div>", {'id': 'player'}).append(
      $("<div>", {'class': 'playing'}).append(
        $("<h2>", {'class': 'song'}).text(title)
      ).append(
        $("<h3>", {'class': 'artist'}).text(url)
      ).append(
        $("<div>", {'class': 'controls'}).append(
          $("<div>", {'class': 'volume'}).append($("<i>", {'class': 'fa fa-volume-up'}))
        ).append(
          $("<div>", {'class': 'play'}).append($("<i>", {'class': 'fa fa-play'}))
        ).append(
          $("<div>", {'class': 'pause'}).append($("<i>", {'class': 'fa fa-pause'}))
        ).append(
          $("<div>", {'class': 'next'}).append($("<i>", {'class': 'fa fa-forward'}))
        )
      )
    )
  );
}
