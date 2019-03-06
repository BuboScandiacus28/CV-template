function progressBar() {

	var div = document.getElementsByClassName('software-progress__progress-bar');

	for (var i = 0; i < div.length; i++) {
		var progress = div[i].getAttribute('data-progress');

		var width = div[i].offsetWidth;

		div[i].style.width = (width * progress)/100 + 'px';
	}

}

progressBar();
