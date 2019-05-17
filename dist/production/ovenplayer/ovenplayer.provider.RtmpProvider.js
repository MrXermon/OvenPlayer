/*! For license information please see ovenplayer.provider.RtmpProvider.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{101:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),o=function(e){return e&&e.__esModule?e:{default:e}}(n(397));t.default=function(e,t,n){var i={},a=null,u={name:r.PROVIDER_RTMP,element:e,mse:null,listener:null,canSeek:!1,isLive:!1,seeking:!1,state:r.STATE_IDLE,buffer:0,framerate:0,currentQuality:-1,currentSource:-1,qualityLevels:[],sources:[],adTagUrl:n};return i=(0,o.default)(u,t,null),a=i.super("destroy"),OvenPlayerConsole.log("RTMP PROVIDER LOADED."),i.destroy=function(){OvenPlayerConsole.log("RTMP : PROVIDER DESTROYED."),a()},i}},389:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pickCurrentSource=t.errorTrigger=t.separateLive=t.extractVideoElement=void 0;var r=n(2),o=function(e){return e&&e.__esModule?e:{default:e}}(n(9));t.extractVideoElement=function(e){return o.default.isElement(e)?e:e.getVideoElement?e.getVideoElement():e.media?e.media:null},t.separateLive=function(e){return!(!e||!e.isDynamic)&&e.isDynamic()},t.errorTrigger=function(e,t){t&&(t.setState(r.STATE_ERROR),t.pause(),t.trigger(r.ERROR,e))},t.pickCurrentSource=function(e,t,n){var r=Math.max(0,t);if(e)for(var o=0;o<e.length;o++)if(e[o].default&&(r=o),n.getSourceLabel()&&e[o].label===n.getSourceLabel())return o;return r}},391:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(n(392)),o=a(n(8)),i=(n(389),n(2));function a(e){return e&&e.__esModule?e:{default:e}}t.default=function(e,t,n,a){var u=google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED,l=google.ima.AdErrorEvent.Type.AD_ERROR,s={},c=!1,g={started:!1,active:!1,isVideoEnded:!1},d=void 0,f=void 0;google.ima.settings.setLocale("ko"),google.ima.settings.setDisableCustomPlaybackForIOS10Plus(!0),google.ima.settings.setAutoPlayAdBreaks(!1);var E=null,T=null,v=null,A=null,y=null,p=function(e){console.log(e.getError().getVastErrorCode(),e.getError().getMessage());var n=e.getError().getInnerError();n&&console.log(n.getErrorCode(),n.getMessage()),v&&v.destroy(),g.active=!1,g.started=!0,t.play()},S=function(n){var o=new google.ima.AdsRenderingSettings;o.restoreCustomPlaybackStateOnAdBreakComplete=!0,(v=n.getAdsManager(e,o)).init("100%","100%",google.ima.ViewMode.NORMAL),A=(0,r.default)(v,t,g,p),t.on(i.CONTENT_VOLUME,function(e){v.setVolume(e.volume/100)},s),c=!0};function m(){OvenPlayerConsole.log("AutoPlay Support : ","autoplayAllowed",d,"autoplayRequiresMuted",f),(y=new google.ima.AdsRequest).forceNonLinearFullSlot=!1,y.setAdWillAutoPlay(d),y.setAdWillPlayMuted(f),y.adTagUrl=a,T.requestAds(y)}return E=new google.ima.AdDisplayContainer(function(){var e=document.createElement("div");return e.setAttribute("class","ovp-ads"),e.setAttribute("id","ovp-ads"),n.getContainer().append(e),e}(),e),(T=new google.ima.AdsLoader(E)).addEventListener(u,S,!1),T.addEventListener(l,p,!1),function(){var t=e.play();void 0!==t&&t.then(function(){e.pause(),d=!0,f=!1,m()}).catch(function(){e.pause(),d=!1,f=!1,m()})}(),s.isActive=function(){return g.active},s.started=function(){return g.started},s.play=function(){if(!g.started){var e=0;return new Promise(function(t,n){!function r(){return e++,c?d?(E.initialize(),v.start(),g.started=!0,t()):(d=!0,n(new Error("autoplayNotAllowed"))):e<100?void setTimeout(r,100):n(new Error("admanagerLoadingTimeout"))}()})}v.resume()},s.pause=function(){v.pause()},s.videoEndedCallback=function(e){A.isAllAdComplete()||!A.isLinearAd()?e():(g.isVideoEnded=!0,T.contentComplete())},s.destroy=function(){v&&v.destroy(),E&&E.destroy(),A&&A.destroy(),T&&(T.removeEventListener(u,S),T.removeEventListener(l,p));var e=(0,o.default)(n.getContainer()).find(".ovp-ads");e&&e.remove(),t.off(i.CONTENT_VOLUME,null,s)},s}},392:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});!function(e){e&&e.__esModule}(n(8));var r=n(2);t.default=function(e,t,n,o){var i={},a={},u=null,l=google.ima.AdEvent.Type.AD_BUFFERING,s=google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED,c=google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED,g=google.ima.AdErrorEvent.Type.AD_ERROR,d=google.ima.AdEvent.Type.ALL_ADS_COMPLETED,f=google.ima.AdEvent.Type.CLICK,E=google.ima.AdEvent.Type.SKIPPED,T=google.ima.AdEvent.Type.COMPLETE,v=google.ima.AdEvent.Type.FIRST_QUARTILE,A=google.ima.AdEvent.Type.LOADED,y=google.ima.AdEvent.Type.MIDPOINT,p=google.ima.AdEvent.Type.PAUSED,S=google.ima.AdEvent.Type.RESUMED,m=google.ima.AdEvent.Type.STARTED,O=google.ima.AdEvent.Type.USER_CLOSE,_=google.ima.AdEvent.Type.THIRD_QUARTILE,P=!1,C=null;return a[s]=function(e){OvenPlayerConsole.log(e.type),n.active=!0,t.pause()},a[c]=function(e){OvenPlayerConsole.log(e.type),n.active=!1,n.isVideoEnded||t.play()},a[g]=o,a[d]=function(e){OvenPlayerConsole.log(e.type),P=!0,n.isVideoEnded&&t.setState(r.STATE_COMPLETE)},a[f]=function(e){OvenPlayerConsole.log(e.type)},a[v]=function(e){OvenPlayerConsole.log(e.type)},a[l]=function(e){OvenPlayerConsole.log("AD_BUFFERING",e.type),t.setState(r.STATE_LOADING)},a[A]=function(n){OvenPlayerConsole.log(n.type);var o=e.getRemainingTime(),i=n.getAd();t.trigger(r.STATE_AD_LOADED,{remaining:o,isLinear:i.isLinear()})},a[y]=function(e){OvenPlayerConsole.log(e.type)},a[p]=function(e){OvenPlayerConsole.log(e.type),t.setState(r.STATE_AD_PAUSED)},a[S]=function(e){OvenPlayerConsole.log(e.type),t.setState(r.STATE_AD_PLAYING)},a[m]=function(o){OvenPlayerConsole.log(o.type);var i=o.getAd();C=i;var a={isLinear:i.isLinear(),duration:i.getDuration(),skipTimeOffset:i.getSkipTimeOffset()};t.trigger(r.AD_CHANGED,a),i.isLinear()?(t.setState(r.STATE_AD_PLAYING),n.started=!0,u=setInterval(function(){var n=e.getRemainingTime(),o=i.getDuration();t.trigger(r.AD_TIME,{duration:o,skipTimeOffset:i.getSkipTimeOffset(),remaining:n,position:o-n,skippable:e.getAdSkippableState()})},300)):t.play()},a[T]=function(e){OvenPlayerConsole.log(e.type),e.getAd().isLinear()&&clearInterval(u),t.trigger(r.STATE_AD_COMPLETE)},a[E]=function(e){OvenPlayerConsole.log(e.type),e.getAd().isLinear()&&clearInterval(u),t.trigger(r.STATE_AD_COMPLETE)},a[O]=function(e){OvenPlayerConsole.log(e.type),e.getAd().isLinear()&&clearInterval(u),t.trigger(r.STATE_AD_COMPLETE)},a[_]=function(e){OvenPlayerConsole.log(e.type)},Object.keys(a).forEach(function(t){e.removeEventListener(t,a[t]),e.addEventListener(t,a[t])}),i.setAdCompleteCallback=function(e){},i.isAllAdComplete=function(){return P},i.isLinearAd=function(){return!C||C.isLinear()},i.destroy=function(){OvenPlayerConsole.log("AdsEventListener : destroy()"),t.trigger(r.STATE_AD_COMPLETE),Object.keys(a).forEach(function(t){e.removeEventListener(t,a[t])})},i}},397:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=l(n(391)),o=l(n(93)),i=l(n(398)),a=n(389),u=n(2);function l(e){return e&&e.__esModule?e:{default:e}}t.default=function(e,t){OvenPlayerConsole.log("CORE loaded. ");var n={};(0,o.default)(n);var l=e.element,s=null,c=null;Object.defineProperty(l,"currentTime",{value:0,writable:!0}),e.adTag&&(s=(0,r.default)(l,n,t,e.adTag)),c=(0,i.default)(l,n,s?s.videoEndedCallback:null);var g=function(t){var r=e.sources[e.currentSource];OvenPlayerConsole.log("source loaded : ",r,"lastPlayPosition : "+t);var o=l.getCurrentSource();r.file!==o?l.load(r.file):0===t&&n.getPosition()>0&&n.seek(t),t>0&&(n.seek(t),n.play())};return n.triggerEventFromExternal=function(e,t){return c[e]?c[e](t):null},n.getName=function(){return e.name},n.canSeek=function(){return e.canSeek},n.setCanSeek=function(t){e.canSeek=t},n.isSeeking=function(){return e.seeking},n.setSeeking=function(t){e.seeking=t},n.setState=function(t){if(e.state!==t){var r=e.state;switch(t){case u.STATE_COMPLETE:n.trigger(u.PLAYER_COMPLETE);break;case u.STATE_PAUSED:n.trigger(u.PLAYER_PAUSE,{prevState:e.state});break;case u.STATE_PLAYING:n.trigger(u.PLAYER_PLAY,{prevState:e.state})}e.state=t,n.trigger(u.PLAYER_STATE,{prevstate:r,newstate:e.state})}},n.getState=function(){return e.state},n.setBuffer=function(e){},n.getBuffer=function(){if(l)return l.getBuffer?l.getBuffer():null},n.getDuration=function(){if(l)return l.getDuration?l.getDuration():0},n.getPosition=function(){if(l)return l.getPosition?l.getPosition():0},n.setVolume=function(e){if(l)return l.setVolume?l.setVolume(e):0},n.getVolume=function(){if(l)return l.setVolume?l.getVolume():0},n.setMute=function(){l&&l.setMute()},n.getMute=function(){if(l)return!!l.getMute&&l.getMute()},n.preload=function(r,o){OvenPlayerConsole.log("CORE : preload() ",r,o);var i=0;return e.sources=r,e.currentSource=(0,a.pickCurrentSource)(r,e.currentSource,t),new Promise(function(e,r){!function a(){return i++,l.isFlashReady&&l.isFlashReady()?(Object.defineProperty(l,"duration",{value:l.getDuration()}),g(o||0),i=0,function o(){return i++,l.isFileLoaded()?(t.isAutoStart()&&n.play(),t.isMute()&&n.setMute(!0),t.getVolume()&&t.getVolume()<100&&n.setVolume(t.getVolume()),e()):i<100?void setTimeout(o,100):r(u.ERRORS[u.INIT_RTMP_SETUP_ERROR])}()):i<100?void setTimeout(a,100):r(u.ERRORS[u.INIT_RTMP_SETUP_ERROR])}()})},n.load=function(n){e.sources=n,e.currentSource=(0,a.pickCurrentSource)(n,e.currentSource,t),g(e.sources_.starttime||0)},n.play=function(){if(!l)return!1;n.getState()!==u.STATE_PLAYING&&(s&&s.isActive()||s&&!s.started()?s.play():l.play())},n.pause=function(){if(!l)return!1;n.getState()===u.STATE_PLAYING?l.pause():n.getState()===u.STATE_AD_PLAYING&&s.pause()},n.seek=function(e){l.seek(e)},n.setPlaybackRate=function(e){return 0},n.getPlaybackRate=function(){return 0},n.getSources=function(){return l?e.sources.map(function(e,t){return{file:e.file,type:e.type,label:e.label,index:t}}):[]},n.getCurrentSource=function(){return e.currentSource},n.setCurrentSource=function(r,o){return e.currentQuality!==r&&(r>-1&&e.sources&&e.sources.length>r?(n.setState(u.STATE_IDLE),OvenPlayerConsole.log("source changed : "+r),e.currentSource=r,n.trigger(u.CONTENT_SOURCE_CHANGED,{currentSource:r}),t.setSourceLabel(e.sources[r].label),o&&g(l.getCurrentTime()||0),e.currentSource):void 0)},n.getQualityLevels=function(){return l?e.qualityLevels:[]},n.getCurrentQuality=function(){return l?e.currentQuality:null},n.setCurrentQuality=function(e){},n.isAutoQuality=function(){},n.setAutoQuality=function(e){},n.getFramerate=function(){return e.framerate},n.setFramerate=function(t){return e.framerate=t},n.seekFrame=function(t){var r=e.framerate,o=(l.getCurrentTime()*r+t)/r;o+=1e-5,n.pause(),n.seek(o)},n.stop=function(){OvenPlayerConsole.log("CORE : stop() "),l.stop()},n.destroy=function(){OvenPlayerConsole.log("CORE : destroy() player stop, listener, event destroied"),l.remove(),s&&s.destroy(),n.off()},n.super=function(e){var t=n[e];return function(){return t.apply(n,arguments)}},n}},398:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2);t.default=function(e,t,n){var o={isJSReady:function(){return!0},timeupdate:function(o){e.currentTime=o.position,t.trigger(r.CONTENT_TIME,o),t.trigger(r.CONTENT_BUFFER,o),o.position>=o.duration&&t.getState()!==r.STATE_IDLE&&t.getState()!==r.STATE_COMPLETE&&(n?n(function(){t.setState(r.STATE_COMPLETE)}):t.setState(r.STATE_COMPLETE))},volumeChanged:function(e){t.trigger(r.CONTENT_VOLUME,e)},stateChanged:function(e){t.setState(e.newstate)},metaChanged:function(e){t.trigger(r.CONTENT_META,e)},error:function(e){t.setState(r.STATE_ERROR),t.pause(),t.trigger(r.ERROR,e)}};return o}}}]);