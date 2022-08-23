const image = document.querySelector('img');
const title = document.getElementById('title');
const artist = document.getElementById('artist');

const music = document.querySelector('audio');
const prevBtn = document.querySelector('#prev');
const playBtn = document.querySelector('#play');
const nextBtn = document.querySelector('#next');


//Music
const songs = [
  {
    name: 'jacinto-1',
    displayName: 'Electric Chill Machine',
    artist: 'Jacinto Design'
  },
  {
    name: 'jacinto-2',
    displayName: 'Electric Jazz',
    artist: 'Jacinto Design'
  },
  {
    name: 'jacinto-3',
    displayName: 'Accoustic Mix',
    artist: 'Jacinto Design'
  },
  {
    name: 'jacinto-4',
    displayName: 'Guitar Chill',
    artist: 'Jacinto Design'
  }
]

//check if playing
let isPlaying = false;

//play song
function playSong() {
  isPlaying = true;
  playBtn.classList.replace('fa-play' , 'fa-pause');
  playBtn.setAttribute('title', 'Pause');
  music.play();
}

//Pause
function pauseSong() {
  isPlaying = false;
  playBtn.classList.replace('fa-pause' , 'fa-play');
  playBtn.setAttribute('title', 'Play');
  music.pause();
}


//play or pause event listener
playBtn.addEventListener('click', () => (isPlaying? pauseSong() : playSong()));

//update dom
function loadSong(song){
  title.textContent = song.displayName;
  artist.textContent = song.artist;
  music.src = `music/${song.name}.mp3`;
  image.src = `img/${song.name}.jpg`;
}


//onload - select first song
loadSong(songs[3]);