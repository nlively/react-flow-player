'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _noop = require('./noop');

var initFlowPlayerSetup = function initFlowPlayerSetup(props) {
	var adaptiveRatio = props.adaptiveRatio,
	    aspectRatio = props.aspectRatio,
	    autoplay = props.autoplay,
	    bgcolor = props.bgcolor,
	    title = props.title,
	    sources = props.sources,
	    subtitles = props.subtitles,
	    fullscreen = props.fullscreen,
	    keyboard = props.keyboard,
	    live = props.live,
	    poster = props.poster,
	    rtmp = props.rtmp,
	    speeds = props.speeds,
	    volume = props.volume,
	    onError = props.onError,
	    onResume = props.onResume,
	    licenseKey = props.licenseKey,
	    logo = props.logo,
	    hlsQualities = props.hlsQualities,
	    splash = props.splash,
	    hlsjs = props.hlsjs,
	    defaultQuality = props.defaultQuality,
	    qualities = props.qualities,
	    vodQualities = props.vodQualities,
	    vastConfig = props.vastConfig,
	    analytics = props.analytics;

	var config = {
		clip: {
			sources: sources,
			title: title
		},
		adaptiveRatio: adaptiveRatio,
		aspectRatio: aspectRatio,
		autoplay: autoplay,
		bgcolor: bgcolor,
		fullscreen: fullscreen,
		keyboard: keyboard,
		live: live,
		poster: poster,
		rtmp: rtmp,
		speeds: speeds,
		volume: volume,
		hlsQualities: hlsQualities,
		splash: splash,
		hlsjs: hlsjs,
		ima: vastConfig,
		analytics: analytics
	};
	if (defaultQuality) {
		Object.assign(config.clip, { defaultQuality: defaultQuality });
	}

	if (qualities) {
		Object.assign(config.clip, { qualities: qualities });
	}

	if (vodQualities) {
		Object.assign(config.clip, { vodQualities: vodQualities });
	}

	if (subtitles && subtitles.length > 0) {
		Object.assign(config.clip, { subtitles: subtitles });
	}

	if (licenseKey && licenseKey.length > 0) {
		config.key = licenseKey;
		if (logo && ((typeof logo === 'undefined' ? 'undefined' : _typeof(logo)) === 'object' && (Object.keys(logo) || []).length > 0 || typeof logo === 'string' && logo.length > 0)) {
			config.logo = logo;
		}
	}

	var player = window.flowplayer('#' + props.playerId, config);
	if (player) {
		player.on('resume', onResume).on('error', onError);
		var intervalBreak = setInterval(function () {
			var item = document.getElementsByClassName('fp-controls');
			if (item) {
				(props.onLoad || _noop.noop)();
				clearInterval(intervalBreak);
			}
		}, 100);
	}
};

exports.default = initFlowPlayerSetup;