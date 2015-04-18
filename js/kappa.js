var AUDIO_LIST = [];
AUDIO_LIST[75] = 'sounds/alert.mp3';
AUDIO_LIST[76] = 'sounds/bgm.mp3';
var talking = false;

talk();

function talk(){
	$(window).keydown(function(e){
		console.log(e.keyCode);
		if(talking){
			audioStop();
		}
		if(e.keyCode === 75 || e.keyCode === 76){
			audioStart(AUDIO_LIST[e.keyCode]);
			talking = true;
		} else {
			audioStop();
			talking = false;
		}
	});
}
