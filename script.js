console.log("Welcome to Spotify");
let audioElement = new Audio('1.mp3');
let playButton=document.getElementById('play')
let myProgressBar=document.getElementById('myProgressBar')

// let songs=[
// 	{songName="salaam-e-Ishq",filePath:"songs/2.mp3"}
// ]
// audioElement.play();
myProgressBar.addEventListener('time')