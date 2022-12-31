let songs = [
  {filePath: `resources/1.mp3`},
  {filePath: `resources/2.mp3`},
  {filePath: `resources/3.mp3`},
  {filePath: `resources/4.mp3`},
  {filePath: `resources/5.mp3`},
]
let songIndex = 0;

console.log("Welcome to spotify");


let audioElement = new Audio('resources/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));


//audioElement.play();
//Play-pause click
masterPlay.addEventListener('click',()=>{
  if(audioElement.paused || audioElement.currentTime <= 0){
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity = 1;
  }
  else{
    audioElement.pause();
    masterPlay.classList.remove('fa-pause-circle');
    masterPlay.classList.add('fa-play-circle');
    gif.style.opacity = 0;
  }
})

//Event Listening
audioElement.addEventListener('timeupdate',()=>{
  //Update seekbar
  progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
  myProgressBar.value = progress;
});
myProgressBar.addEventListener('change',()=>{
  audioElement.currentTime = myProgressBar.value *  audioElement.duration/100;
})

const makeAllPlays =() =>{
  console.log("Inside makeAllPlay");
  Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
  element.classList.remove('fa-pause-circle');
  element.classList.add('fa-play-circle');
});
}

Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
  element.addEventListener('click', (e)=>{
    console.log("Event listener called");
    makeAllPlays();
    songIndex = parseInt(e.target.id);
    e.target.classList.remove('fa-play-circle');
    e.target.classList.add('fa-pause-circle');
    audioElement.src = songs[songIndex].filePath;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
  });
});
document.getElementById('next').addEventListener('click',()=>{
  if(songIndex >= 4){
    songIndex = 0;
  }else{
    songIndex += 1;
  }
  audioElement.src = songs[songIndex].filePath;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove('fa-play-circle');
  masterPlay.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click',()=>{
  if(songIndex <= 0){
    songIndex = 0;
  }else{
    songIndex -= 1;
  }
  audioElement.src = songs[songIndex].filePath;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove('fa-play-circle');
  masterPlay.classList.add('fa-pause-circle');
})
