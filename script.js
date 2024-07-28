const audio = document.getElementById('audio');
const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');
const stopButton = document.getElementById('stop');
const skipForwardButton = document.getElementById('skip-forward');
const progress = document.getElementById('progress');

playButton.addEventListener('click', () => {
    audio.play();
});

pauseButton.addEventListener('click', () => {
    audio.pause();
});

stopButton.addEventListener('click', () => {
    audio.pause();
    audio.currentTime = 0;
});

skipForwardButton.addEventListener('click', () => {
    audio.currentTime += 10; // Skip forward by 10 seconds
});

audio.addEventListener('timeupdate', () => {
    const percent = (audio.currentTime / audio.duration) * 100;
    progress.style.width = `${percent}%`;
});
