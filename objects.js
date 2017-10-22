var playlist = {Kanye: "Gold Digger"};

function updatePlaylist(playlist, artistName, songTitle){
  var updatePlaylist = Object.assign({}, playlist, {Phil Ochs:['Here\'s to the State of Mississippi']});
}

function removeFromPlaylist(playlist, artistName){
  delete playlist.Kanye;
  return playlist;
}
