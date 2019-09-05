var video;
var button;
var serviceLayer;
var controlLayer;

window.onload = function() {
	video = document.getElementById("presentation__video");
	button = document.getElementById("presentation__btn-play");
	serviceLayer = document.getElementById("presentation__description-wrapper");
	controlLayer = document.getElementById("presentation__btn-bar");
	video.addEventListener("ended", function() {
		videostop();
	}, false);
};

function videoplay() {
	serviceLayer.style.zIndex = "1";
	controlLayer.style.zIndex = "3";
	if (video.paused) {
		video.play();
		button.textContent = "ll";
	} else {
		video.pause();
		button.textContent = "►";
	}
}

function videostop() {
	serviceLayer.style.zIndex = "3";
	controlLayer.style.zIndex = "1";
	video.load();
}