console.log("Welcome to Spotify");
let audioElement = new Audio('1.mp3');
let playButton=document.getElementById('play')
let myProgressBar=document.getElementById('myProgressBar')

// let songs=[
// 	{songName="salaam-e-Ishq",filePath:"songs/2.mp3"}
// ]
// audioElement.play();

//play pause click
playButton.addEventListener('click',()=>{
	if (audioElement.paused||audioElement.currentTime==0) {
		audioElement.play();
		console.log('Playing');
		playButton.classList.remove('fa-play-circle');
		playButton.classList.add('fa-pause-circle');
	}
	else{
		audioElement.pause();
		console.log('Paused');
		playButton.classList.remove('fa-pause-circle');
		play.classList.add('fa-play-circle');
	}
})

document.addEventListener('keyup',event=>{
	if (event.code=='Space') {
		if (audioElement.paused||audioElement.currentTime==0) {
			audioElement.play();
			console.log('Playing');
			playButton.classList.remove('fa-play-circle');
			playButton.classList.add('fa-pause-circle');
		}
		else{
			audioElement.pause();
			playButton.classList.remove('fa-pause-circle');
			play.classList.add('fa-play-circle');
		}
	} 
})

audioElement.addEventListener('timeupdate',()=>{
	console.log('Time Update');
	progress= parseInt((audioElement.currentTime/audioElement.duration)*100);
	console.log(progress);
	myProgressBar.value=progress;
})

myProgressBar.addEventListener('change',()=>{
	audioElement.currentTime=myProgressBar.value * audioElement.duration/100
})