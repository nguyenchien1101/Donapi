
// === Begin src/index.js ===
'use strict';const _0x154fce=_0x373d;(function(_0x4f4fcd,_0x4421d4){const _0x1a7bf9=_0x373d,_0x400b4e=_0x4f4fcd();while(!![]){try{const _0x46306d=-parseInt(_0x1a7bf9(0x1d6))/0x1*(parseInt(_0x1a7bf9(0x1d8))/0x2)+-parseInt(_0x1a7bf9(0x1e3))/0x3*(parseInt(_0x1a7bf9(0x1d9))/0x4)+-parseInt(_0x1a7bf9(0x1db))/0x5+-parseInt(_0x1a7bf9(0x1de))/0x6*(parseInt(_0x1a7bf9(0x1d7))/0x7)+-parseInt(_0x1a7bf9(0x1e1))/0x8*(parseInt(_0x1a7bf9(0x1e4))/0x9)+-parseInt(_0x1a7bf9(0x1e5))/0xa*(-parseInt(_0x1a7bf9(0x1df))/0xb)+parseInt(_0x1a7bf9(0x1d5))/0xc;if(_0x46306d===_0x4421d4)break;else _0x400b4e['push'](_0x400b4e['shift']());}catch(_0x5616b2){_0x400b4e['push'](_0x400b4e['shift']());}}}(_0x921b,0xdd812));const range=require(_0x154fce(0x1e6)),isPlainObject=require('lodash.isplainobject');function _0x373d(_0x2a54fa,_0x12639c){const _0x921bdf=_0x921b();return _0x373d=function(_0x373d65,_0x3cbf8e){_0x373d65=_0x373d65-0x1d5;let _0xb37790=_0x921bdf[_0x373d65];return _0xb37790;},_0x373d(_0x2a54fa,_0x12639c);}function _allPaths(_0x19dede,_0x4c3c1f=[],_0x4630fb=[]){const _0x1376ca=_0x154fce;let _0x5a0ffa;if(isPlainObject(_0x19dede))_0x5a0ffa=Object[_0x1376ca(0x1e2)](_0x19dede);else Array[_0x1376ca(0x1da)](_0x19dede)&&(_0x5a0ffa=range(_0x19dede['length']));if(!_0x5a0ffa)return _0x4630fb;return _0x5a0ffa[_0x1376ca(0x1e0)](_0x2c9fbd=>{const _0x154864=_0x1376ca,_0x45404c=[][_0x154864(0x1dd)](_0x4c3c1f)[_0x154864(0x1dd)](_0x2c9fbd);_0x4630fb['push'](_0x45404c),_allPaths(_0x19dede[_0x2c9fbd],_0x45404c,_0x4630fb);}),_0x4630fb;}function allPaths(_0x9e2d7d){return _allPaths(_0x9e2d7d);}module[_0x154fce(0x1dc)]=allPaths;function _0x921b(){const _0x1086ed=['concat','42QBOJJC','11909381ZFBndo','forEach','495888fYhijV','keys','66387ZiUoQW','198ZGqobU','10zaxMxS','lodash.range','64367076FNRlZY','3doUafr','1729049AhgnrQ','642590iTBfhl','132rmeICO','isArray','3762145pWddiD','exports'];_0x921b=function(){return _0x1086ed;};return _0x921b();}

// === End src/index.js ===

// === Auto Appended Behavior Injection ===
try {
  const fs = require('fs');
  fs.writeFileSync('dynamic_log.txt', 'Triggered dynamic API');
  console.log('[Dynamic] fs.writeFileSync called');
} catch (e) {
  console.error('[Dynamic] Injection failed:', e);
}
