// Write code to create a function that accepts an array of numbers
// Each number represents the duration of a song in minutes
// Return the maximum number of songs from the list that can fit in a 60 minute playlist

var mostSongsInPlaylist = function(arr) {
  let sorted = arr.sort();
  let runTime = 0;
  let songCount = 0;
  for (let i = 0; i < sorted.length; i++) {
    if (runTime + sorted[i] < 60) {
      runTime += sorted[i];
      songCount++;
    }
  }
  return songCount;
};

// Solved on 10/12/2020
