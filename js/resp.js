/*
 * 移动端 自适应代码
 */
(function (doc, win) {
	var docEl = doc.documentElement;
	var run = function () {
	var clientWidth = docEl.clientWidth;
	console.log(clientWidth);
	if (!clientWidth) return;
		docEl.style.fontSize = 20 * (clientWidth / 375) + 'px';
		/*
		 * 这里的  375  根据设计稿来定  比如设计稿是基于iPhone6的  那么屏幕尺寸就是375
		 */
	} 
	if (!doc.addEventListener) return;
	var resizeEvt = 'orientationchange' in window ? 'orientationchange' : "resize";
	window.addEventListener(resizeEvt, run, false);
	doc.addEventListener("DOMContentLoaded", run, false);	
})(document, window);