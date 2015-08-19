;(function($, window) {
	// 把时间间隔（毫秒数）转换成倒计时格式
	function milliToCountDown(dur) {
		var scale = [1000, 60, 60, 24, 30, 12];
		var l = scale.length;
		var result = {
				milli: '00',sec: '00',mini: '00',hour: '00',
				day: '00',month: '00',year: '00'
			};
		if (dur <= 0) {
			return result;
		}
		for (var i = 0; i < l; i++) {

		}
	}

	$.yCount = function() {

	}
})(jQuery, this);