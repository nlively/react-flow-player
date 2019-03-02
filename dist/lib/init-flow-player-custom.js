'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _reactDom = require('react-dom');

var initFlowPlayerCustom = function initFlowPlayerCustom(props) {
	var customButton = props.customButton;
	// After is the 1st Priority, Before is 2nd priority, Parent is 3rd priority

	customButton.map(function (val) {
		var idElem = document.getElementById(val.id);
		if (!idElem) {
			var div = document.createElement('div');
			(0, _reactDom.render)(val.component, div);
			var elem = document.querySelector('.' + val.class);
			if (elem) {
				switch (val.place) {
					case 'append':
						elem.appendChild(div.childNodes[0]);
						break;
					case 'after':
						elem.after(div.childNodes[0]);
						break;
					default:
						if (elem && elem.parentElement) {
							elem.parentElement.insertBefore(div.childNodes[0], elem);
						}
						break;
				}
			}
		}
	});
	var seekingBtn = document.getElementsByClassName('fp-backward');
	var playerElem = document.getElementById(props.playerId);
	if (props.seeking && !isNaN(props.seeking) && (!seekingBtn || seekingBtn.length === 0) && playerElem) {
		(function () {
			var common = flowplayer.common;
			var bean = flowplayer.bean;
			var fpControls = flowplayer(playerElem);
			var seekingText = props.seekingText;
			var seekingTextBack = (props.seekingText || '').trim() !== '' ? '-' + props.seekingText : '+' + props.seekingText;
			var bw = common.createElement('a', { class: 'fp-backward' }, '' + seekingTextBack);
			var fw = common.createElement('a', { class: 'fp-forward' }, '' + seekingText);
			var seeking = props.seeking;
			bw.innerHTML = props.seekBwHtml || bw.innerHTML;
			fw.innerHTML = props.seekFwHtml || fw.innerHTML;
			bean.off(bw, 'click');
			bean.on(bw, 'click', function () {
				if (!fpControls) {
					return;
				}

				var target = fpControls.video.time - seeking;
				if (isNaN(target) || !fpControls.video.time) {
					fpControls.play();
					fpControls.seek(0);
				} else {
					if (target >= 0) {
						fpControls.seek(target);
					} else {
						fpControls.seek(0);
					}
				}
			});
			bean.off(fw, 'click');
			bean.on(fw, 'click', function () {
				if (!fpControls) {
					return;
				}

				var target = fpControls.video.time + seeking;
				if (isNaN(target) || !fpControls.video.duration) {
					fpControls.play();
					fpControls.seek(seeking);
				} else {
					if (target <= fpControls.video.duration) {
						fpControls.seek(target);
					} else {
						fpControls.seek(fpControls.video.duration);
					}
				}
			});

			if (common.find('.fp-controls') && common.find('.fp-controls').length > 0) {
				common.prepend(common.find('.fp-controls')[0], bw);
				common.insertAfter(common.find('.fp-controls')[0], common.find('.fp-controls > .fp-elapsed')[0], fw);
			}
		})();
	}
};

exports.default = initFlowPlayerCustom;