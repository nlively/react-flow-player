'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _noop = require('./lib/noop');

var defaultPropsInit = {
	className: '',
	adaptiveRatio: false,
	aspectRatio: '16:9',
	autoplay: false,
	bgcolor: '#2d3647',
	title: 'Video',
	fullscreen: true,
	keyboard: true,
	live: false,
	poster: '',
	rtmp: '',
	speeds: [0.25, 0.5, 1.0, 1.5, 2.0],
	volume: 1.0,
	customButton: [],
	seeking: 10,
	seekingText: '10',
	onError: _noop.noop,
	onResume: _noop.noop,
	speedPlugin: false,
	speedUrl: '//releases.flowplayer.org/speed-menu/flowplayer.speed-menu.min.js',
	styleUrl: '//releases.flowplayer.org/7.2.4/skin/skin.css',
	hlsPlugin: false,
	hlsUrl: '//releases.flowplayer.org/hlsjs/flowplayer.hlsjs.min.js',
	hlsConfig: false,
	hlsConfigUrl: '',
	vodQualitySelectorSrc: '//releases.flowplayer.org/vod-quality-selector/flowplayer.vod-quality-selector.min.js',
	licenseKey: '',
	logo: '',
	playerClasses: '',
	analytics: '',
	seekFwHtml: '',
	seekBwHtml: '',
	getPlayerApi: _noop.noop,
	splash: false,
	hlsjs: {},
	defaultQuality: '',
	qualities: '',
	vodQualities: undefined,
	vodQualitySelectorPlugin: false,
	vastPlugin: false,
	vastPluginSrc: '',
	vastIMASDKSrc: '//imasdk.googleapis.com/js/sdkloader/ima3.js',
	vastConfig: {},
	subtitles: []
};

exports.default = defaultPropsInit;