(function(window,$,_) {
	
	$(document).on('ready',function() {

		var $kappa = $('#kappa').find('img');

		$(window).on('keydown',function(event) {

			if (event.keyCode === 75) jump();

		});

		function jump() {

			$kappa.stop().animate({ top:-40 }, 300, 'easeInBack').delay(100).animate({ top:0 }, 200);

		}

	});
	
	return false;
	
})(window,jQuery,baseJS);