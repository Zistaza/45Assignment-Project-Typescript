function make_Album(Artist, title, musictrack) {
    var myAlbum = {
        Artist: Artist,
        title: title
    };
    if (musictrack !== undefined) {
        myAlbum.musictrack = musictrack;
    }
    return myAlbum;
}
var music1 = make_Album("Artist1", "TitleOfAlbum1");
console.log(music1);
var music2 = make_Album("Artist2", "TitleOfAlbum2");
console.log(music2);
var music3 = make_Album("Artist3", "TitleOfAlbum3", 10);
console.log(music3);
