(function(window,$,_) {

	var _$kappa;

	var _data    = ['kappa','father','mother','brother'];
	var _length  = _data.length;
	var _counter = 0;
	
	$(document).on('ready',function() {

		_$kappa = $('#kappa').find('img');
		return false;

		$(window).on('keydown',function(event) {

			if (event.keyCode === 75) change();

		});

		function jump() {

			_$kappa.stop().animate({ top:-40 }, 300, 'easeInBack').delay(100).animate({ top:0 }, 200);

		}

	});

	window.change = function() {

		_counter++;
		if (_counter > _length - 1) _counter = 0;

		var key = _data[_counter];

		_$kappa.stop().animate({ opacity:0, top:-200 }, 300, 'easeInBack', function() {

			$(this).prop('src','files/img/' + key + '.png').delay(500).animate({ opacity:1, top:0 }, 300, 'easeOutBounce');
			return false;
			
		});

	}
	
	return false;
	
})(window,jQuery,baseJS);