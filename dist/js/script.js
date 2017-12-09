window.onload = function() {
	initCompose();
	initBuy();
	btnCloseBuy();
	btnCloseCompose();
}

function initCompose() {
	var btn = document.getElementsByClassName('catalog__link--compose');
	var popupCompose = document.getElementById('composeWindow');
	var popupBg = document.getElementById('popupBgCompose');

	for (let i in btn) {
		btn[i].onclick = function() {
			var scroll = window.pageYOffset;
			var height = document.documentElement.clientHeight;
			var width = document.documentElement.clientWidth;

			if (width <= 768) {
				popupCompose.style.top=scroll - height + (height/1.2) + "px";
			} else {
				popupCompose.style.top=scroll - height + (height * 0.5) + "px";
			}
			popupCompose.classList.remove('compose-window--disable');
			popupBg.classList.add('compose-window__bg--active')
			popupCompose.classList.add('compose-window--active');

			window.onscroll = function() {
				var scroll = window.pageYOffset;
				var height = document.documentElement.clientHeight;
				var width = document.documentElement.clientWidth;
				if (width <= 768) {
					popupCompose.style.top = scroll - height + (height * 0.8) + "px";
				} else {
					popupCompose.style.top = scroll - height + (height * 0.5) + "px";
				}
			}
		}
	}
}

function initBuy() {
	var btn = document.getElementsByClassName('catalog__link--buy');
	var popup = document.getElementById('buyWindow');
	var popupBg = document.getElementById('popupBg');

	for (let i in btn) {
		btn[i].onclick = function() {
			var scroll = window.pageYOffset;
			var height = document.documentElement.clientHeight;
			var width = document.documentElement.clientWidth;

			if (width <= 768) {
				popup.style.top = scroll - height + (height/1.2) + "px";
			} else {
				popup.style.top = scroll - height + (height * 0.5) + "px";
			}
			popup.classList.remove('buy-window--disable');
			popupBg.classList.add('buy-window__bg--active')
			popup.classList.add('buy-window--active');

			window.onscroll = function() {
				var scroll = window.pageYOffset;
				var height = document.documentElement.clientHeight;
				var width = document.documentElement.clientWidth;
				if (width <= 768) {
					popup.style.top=scroll - height + (height/1.2) + "px";
				} else {
					popup.style.top=scroll - height + (height * 0.5) + "px";
				}
			}
		}
	}
}

function btnCloseBuy() {
	var btn = document.getElementById('ikon-close');
	var popup = document.getElementById('buyWindow');
	var popupBg = document.getElementById('popupBg');

	popupBg.onclick = () => {
		closePopupBuy();
		window.onscroll = function() {
			popup.style.top="-999px";
		}
	}

	btn.onclick = () => {
		console.log('привет');
		closePopupBuy();
		window.onscroll = function() {
			popup.style.top="-999px";
		}
	}

	function closePopupBuy() {
		popupBg.classList.remove('buy-window__bg--active')
		popup.classList.remove('buy-window--active');
		popup.style.top = "-999px";
		popup.classList.add('buy-window--disable');
	}
}

function btnCloseCompose() {
	var btnCompose = document.getElementById('ikon-close-compose');
	var popupCompose = document.getElementById('composeWindow');
	var popupBgCompose = document.getElementById('popupBgCompose');

	popupBgCompose.onclick = () => {
		closePopupCompose();
		window.onscroll = function() {
			popupCompose.style.top="-999px";
		}
	}

	btnCompose.onclick = () => {
		closePopupCompose();
		window.onscroll = function() {
			popupCompose.style.top="-999px";
		}
	}

	function closePopupCompose() {
		popupBgCompose.classList.remove('compose-window__bg--active')
		popupCompose.classList.remove('compose-window--active');
		popupCompose.style.top = "-999px";
		popupCompose.classList.add('compose-window--disable');
	}
}


