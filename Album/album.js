"use strict";
function make_Album(Artist, title, musictrack) {
    let myAlbum = {
        Artist: Artist,
        title: title
    };
    if (musictrack !== undefined) {
        myAlbum.musictrack = musictrack;
    }
    return myAlbum;
}
let music1 = make_Album("Artist1", "TitleOfAlbum1");
console.log(music1);
let music2 = make_Album("Artist2", "TitleOfAlbum2");
console.log(music2);
let music3 = make_Album("Artist3", "TitleOfAlbum3", 10);
console.log(music3);
