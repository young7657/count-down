;(function($, window) {
	/**
	 * 格式化数字模式不足两位的数字，前面补0
	 * @param  {[int]} n [目标数字]
	 * @param  {[int]} l [设定长度]
	 * @return {[string]}   [格式化后的字符串]
	 */
	function formatZero(n, l) {
		l = l || 2;
		n = (+n).toString().split('');
		while(n.length < l) {n.unshift(0);}

		return n.join('');
	}
	/**
	 * 把时间间隔（毫秒数）转换成倒计时格式
	 * @param  {[int]} dur [时间间隔毫秒数]
	 * @return {[obj]}     [转换后的时间格式数据，从年到毫秒]
	 */
	function milliToCountDown(dur) {
		var S = [
			{k: 'milli', s: 1000},{k: 'sec', s: 60},{k: 'mini', s: 60},
			{k: 'hour', s: 24},{k: 'day', s: 30},{k: 'month', s: 12},
			{k: 'year', s: 0}
		];
		var l = S.length;
		var result = {};

		for (var i = 0; i < l; i++) {
			var s = S[i].s,k = S[i].k;
			var t = dur <= 0 ? 0 : (s ? dur % s : dur);//取余数

			result[k] = formatZero(t, k == 'milli' ? 3 : 2);

			if (dur <= 0 || !s) continue;
			dur = Math.floor(dur / s); //取除数
		}
		return result;
	}
	/**
	 * [获取倒计时]
	 * @param  {[string]} time [时间格式字符串，例如2015-08-19 14:04:56, 时分秒可以不加，默认是目标时间凌晨零点]
	 * @return {[obj]}      [当前时间距离目标时间的时间间隔信息]
	 */
	$.yCount = function(time) {
		var T = [];
		time = time.split(' ');

		T = T.concat(time[0].split('-')).concat(time[1] ? time[1].split(':') : []);

		var future = new Date(Date.UTC(T[0], T[1] - 1, T[2], T[3] || 0, T[4] || 0, T[5] || 0)),
			now = new Date(),
			dur = Math.round((future.getTime() - now.getTime())) + future.getTimezoneOffset() * 60 * 1000;

		return milliToCountDown(dur);
	}
})(jQuery, this);