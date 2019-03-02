'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypesConfig = {
	playerId: _propTypes2.default.string.isRequired,
	playerClasses: _propTypes2.default.string,
	playerInitScript: _propTypes2.default.string.isRequired,
	sources: _propTypes2.default.array.isRequired,
	subtitles: _propTypes2.default.array,
	className: _propTypes2.default.string,
	analytics: _propTypes2.default.string,
	adaptiveRatio: _propTypes2.default.bool,
	aspectRatio: _propTypes2.default.string,
	autoplay: _propTypes2.default.bool,
	bgcolor: _propTypes2.default.string,
	title: _propTypes2.default.string,
	fullscreen: _propTypes2.default.bool,
	keyboard: _propTypes2.default.bool,
	live: _propTypes2.default.bool,
	splash: _propTypes2.default.bool,
	poster: _propTypes2.default.string,
	rtmp: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
	speeds: _propTypes2.default.array,
	volume: _propTypes2.default.number,
	hlsPlugin: _propTypes2.default.bool,
	customButton: _propTypes2.default.array,
	seeking: _propTypes2.default.number,
	seekingText: _propTypes2.default.string,
	seekFwHtml: _propTypes2.default.string,
	seekBwHtml: _propTypes2.default.string,
	onError: _propTypes2.default.func,
	onResume: _propTypes2.default.func,
	speedPlugin: _propTypes2.default.bool,
	hlsUrl: _propTypes2.default.string,
	speedUrl: _propTypes2.default.string,
	styleUrl: _propTypes2.default.string,
	hlsConfig: _propTypes2.default.bool,
	hlsConfigUrl: _propTypes2.default.string,
	licenseKey: _propTypes2.default.string,
	getPlayerApi: _propTypes2.default.func,
	logo: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
	hlsjs: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.object]),
	vodQualitySelectorSrc: _propTypes2.default.string,
	qualities: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.string]),
	defaultQuality: _propTypes2.default.string,
	vodQualities: _propTypes2.default.object,
	vodQualitySelectorPlugin: _propTypes2.default.bool,
	vastPlugin: _propTypes2.default.bool,
	vastPluginSrc: _propTypes2.default.string,
	vastIMASDKSrc: _propTypes2.default.string,
	vastConfig: _propTypes2.default.shape({
		// https://flowplayer.com/docs/player/vast#configuration-options
		adRules: _propTypes2.default.string,
		ads: _propTypes2.default.arrayOf(_propTypes2.default.shape({
			// https://flowplayer.com/docs/player/vast#ads-options
			time: _propTypes2.default.number,
			adTag: _propTypes2.default.string
		})),
		adsRenderingSettings: _propTypes2.default.object,
		playlist: _propTypes2.default.array,
		redirects: _propTypes2.default.number,
		showTitle: _propTypes2.default.bool,
		VpaidMode: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
		vastLoadTimeout: _propTypes2.default.number
	})
};

exports.default = propTypesConfig;