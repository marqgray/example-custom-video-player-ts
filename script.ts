const idDefinitions = {
  video: "video",
  play: "play",
  stop: "stop",
  progress: "progress",
  timestamp: "timestamp",
};

const htmlElements = {
  video: <HTMLVideoElement>document.getElementById(idDefinitions.video),
  play: <HTMLButtonElement>document.getElementById(idDefinitions.play),
  stop: <HTMLButtonElement>document.getElementById(idDefinitions.stop),
  progress: <HTMLInputElement>document.getElementById(idDefinitions.progress),
  timestamp: <HTMLSpanElement>document.getElementById(idDefinitions.timestamp),
};

const toggleVideoStatus = () => {
  if (htmlElements.video.paused) {
    htmlElements.video.play().then(() => {});
  } else {
    htmlElements.video.pause();
  }
};

const updatePlayIcon = () => {};

const updateProgress = () => {};

const stopVideo = () => {};

const setVideoProgress = () => {};

htmlElements.video.addEventListener("click", toggleVideoStatus);
htmlElements.video.addEventListener("play", updatePlayIcon);
htmlElements.video.addEventListener("pause", updatePlayIcon);
htmlElements.video.addEventListener("timeupdate", updateProgress);

htmlElements.play.addEventListener("click", toggleVideoStatus);

htmlElements.stop.addEventListener("click", stopVideo);

htmlElements.progress.addEventListener("change", setVideoProgress);
