const songs = [
    {
        title: 'Song 1',
        artist: 'Artist 1',
        src: 'path/to/song1.mp3'
    },
    {
        title: 'Song 2',
        artist: 'Artist 2',
        src: 'path/to/song2.mp3'
    },
    {
        title: 'Song 3',
        artist: 'Artist 3',
        src: 'path/to/song3.mp3'
    }
];

let currentSongIndex = 0;
let isPlaying = false;
const audio = new Audio();

const titleElement = document.getElementById('title');
const artistElement = document.getElementById('artist');
const playButton = document.getElementById('play');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

function loadSong(song) {
    titleElement.textContent = song.title;
    artistElement.textContent = song.artist;
    audio.src = song.src;
}

function playSong() {
    isPlaying = true;
    audio.play();
    playButton.textContent = 'Pause';
}

function pauseSong() {
    isPlaying = false;
    audio.pause();
    playButton.textContent = 'Play';
}

playButton.addEventListener('click', () => {
    if (isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
});

prevButton.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(songs[currentSongIndex]);
    playSong();
});

nextButton.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(songs[currentSongIndex]);
    playSong();
});

// Load the first song initially
loadSong(songs[currentSongIndex]);
