var AUDIO_PATH = 'files/sounds/';
var isTalking = false;
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

$(window).keydown(function(e){
console.log(e.keyCode);
	if(KEYCODE[e.keyCode] !== undefined){
		var random = Math.random();
		var level =  KEYCODE[e.keyCode].level;
		var type = ( Math.floor(random * KEYCODE[e.keyCode].word.length) + 1 );
console.log(type);
		talk(e, level, type);
		move(e);
		$('#bubble').removeClass('visible');
		bubble(e, level, type);
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
	$('#bubble').delay(5000).queue(function(next) {
    	$(this).removeClass('visible');
    	next();
	});
}

function move(e){
	if(e.keyCode === 49){
		$('img').addClass('animated flip').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
    	    $(this).removeClass('animated flip');
    	});
    }
}
