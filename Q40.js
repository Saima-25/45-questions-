/*Write a function called make_album() that builds a Object describing a music album.
The function should take in an artist name and an album title,
and it should return a Object containing these two pieces of information.
 Use the function to make three dictionaries representing different albums.
 Print each return value to show that Objects are storing the album information correctly.
  Add an optional parameter to make_album() that allows you to store the number of tracks on an album.
  If the calling line includes a value for the number of tracks, add that value to the album’s Object.
   Make at least one new function call that includes the number of tracks on an album.*/
// function make_album(artist:string, album_title:string, track?: number){
//     let album:{[key:string]:string|number}={
//         artist,album_title
//     };
//     (album as any)['track'] = track;
//     return album;
// }
// we do not use type any in ts so there is anothr way but it will run node js
function make_album(artist, title, track) {
    var album = { artist: artist, title: title };
    if (track) {
        album['track'] = track;
    }
    return album;
}
console.log(make_album("Lata", "Old is Gold"));
console.log(make_album("Bala", "Chaliya"));
console.log(make_album("KK", "Saharay", 25));
