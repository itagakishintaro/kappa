var AUDIO_PATH = 'files/sounds/';
var isTalking = false;
var timeoutID;
var KEYCODE = {
	49: {
		'level': 1,
		'word': [
			'メロンくいてー',
			'今度お前んち行くね',
			'それっておれのこと？',
			'ひねりつぶす！',
			'まだ？',
			'軽いね。軽い。',
			'もえー',
			'鼻詰まってるのかな？'
		]
	}, 
	50: {
		'level': 2,
		'word': [
			'馬かと思った',
			'ただじゃおかない',
			'あー。がんばったほうじゃね？',
			'上機嫌が過ぎるな',
			'え！？3000円？'
		]
	}, 
	51: {
		'level': 3,
		'word': [
			'それ冥王星の洗礼じゃん',
			'それ、おれこの前3時間でやったやつだわ',
			'次それ言ったら目、潰す',
			'早めに目覚めよ'
		]
	}
}
var EFFECTS = ['bounce', 'flash', 'rubberBand', 'shake', 'swing', 'tada', 'wobble'
				, 'lightSpeedIn', 'rotateIn', 'zoomIn', 'zoomOut', 'flip'
				, 'hinge', 'rollIn', 'rollOut']

$(window).keydown(function(e){
console.log(e.keyCode);
	if(KEYCODE[e.keyCode] !== undefined && !isTalking){
		var random = Math.random();
		var level =  KEYCODE[e.keyCode].level;
		var type = ( Math.floor(random * KEYCODE[e.keyCode].word.length) + 1 );
console.log(type);
		talk(e, level, type);
		$('#bubble').removeClass('visible');
		bubble(e, level, type);
	}
	move(e);

	if(e.keyCode === 75){
		change();
	}
});

function talk(e, level, type){
	if(isTalking){
		audioStop();
		isTalking = false;
	}
	audioStart(AUDIO_PATH + level + '-' + type + '.m4a');
	isTalking = true;
}

function bubble(e, level, type){
	$('#bubble').addClass('visible');
	$('#bubble').text(KEYCODE[e.keyCode].word[Number(type - 1)]);

	clearTimeout(timeoutID);
	timeoutID = setTimeout( function(){
		$('#bubble').removeClass('visible');
		isTalking = false;
	} ,5000 );
}

function move(e){
	if(e.keyCode === 77){ // key m
		var effect = EFFECTS[ Math.floor(Math.random() * EFFECTS.length) ]
console.log(effect);
		$('img').addClass('animated ' + effect).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
    	    $(this).removeClass('animated ' + effect);
    	});
    }
}
