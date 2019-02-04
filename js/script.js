/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = ['Believer', "I Wouldn't Mind", 'Rockefeller Street'],
    artist = ['Imagine Dragons', 'He Is We', 'Getter Jaani'],
    length = ['3:28', '3:23', '3:13'],
    image = ['https://upload.wikimedia.org/wikipedia/en/thumb/5/5c/Imagine-Dragons-Believer-art.jpg/220px-Imagine-Dragons-Believer-art.jpg', 'https://i.ytimg.com/vi/MSjDXxN09A8/hqdefault.jpg', 'https://t2.genius.com/unsafe/220x220/https%3A%2F%2Fimages.genius.com%2Fe9569526ed8b520e26bd9b579ecd3923.225x225x1.jpg'],
    link = ['https://www.youtube.com/watch?v=7wtfhZwyrcc', 'https://www.youtube.com/watch?v=MSjDXxN09A8', 'https://www.youtube.com/watch?v=wdNAYokSlCc'];
// BELOW Add 4 More arrays to store images_links, artists, song lengths, and links for each song
// Make sure they match the same order as your array above

// var songs = [
//     {
//         name: '',
//         artist: '',
//         length: '',
//         image: '',
//         link: ''
//     },
//     {
//         name: '',
//         artist: '',
//         length: '',
//         image: '',
//         link: ''
//     }
// ];

function displaySongInfo(){
    // BELOW Use forEach Loop to display the data from each of your arrays in the correct div
    for(var i = 0; i < songs.length; i++) {
        $('#images').append("<img src='" + image[i] + "'>");
        $('#songs').append("<p>"+ songs[i] +"</p>");
        $('#artists').append("<p> by: "+ artist[i] +"</p>");
        $('#lengths').append("<p>"+ length[i] +"</p>");
        $('#links').append("<p>"+ link[i] +"</p>");
    }
}

function emptySongInfo(){
    $("#songs").empty();
    $("#artists").empty();
    $("#lengths").empty();
    $("#images").empty();
    $("#links").empty();
    // Use jQuery to empty all of the remaining divs
}


function addSongInfo(){
    // BELOW write the code to add new items to each of the arrays.


}

$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

displaySongInfo();
