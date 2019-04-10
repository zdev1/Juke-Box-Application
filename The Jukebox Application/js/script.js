/*eslint-env browser*/
var Jukebox = function () {
  "use strict";
    var albums= [], self;
    self = {
       addAlbum: function (album) {
           album.push(album);
       },
        favoriteAlbum: function () {
            var max = -1, fav, i;
            for (i = 0; i < albums.length; i += 1) {
                if (albums[i].played > max) {
                   max = albums[i].played;
                   fav = albums[i];
                }
            }
            return fav.display();
        },
        
    };
    return self;
};

var Album = function (artist, title) {
    "use strict";
    var self = {
        played: 0,
        play: function () {
            self.played += 1;
        },
        display: function () {
            return artist + " : " + title + "' has been played " + this.played + " times.";
        }
    };
    return self;
}; 

var jbox = new Jukebox();
var album1 = new Album("Taylor Swift", "Red");
var album2 = new Album("Pantera", "Far Beyond Driven");
var album3 = new Album("The Beatles", "Yellow Submarine");

jbox.addAlbum(album1);
jbox.addAlbum(album2);
jbox.addAlbum(album3);

album1.play();
album1.play();
album1.play();
album2.play();
album3.play();

window.document.write("Your favorite album is: " + jbox.favoriteAlbum());