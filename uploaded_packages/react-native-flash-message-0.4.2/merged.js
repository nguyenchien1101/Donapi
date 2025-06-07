
// === Begin src/index.js ===
import FlashMessageManager from "./FlashMessageManager";
import FlashMessageWrapper, { getFlashMessageStatusBarHeight, styleWithInset } from "./FlashMessageWrapper";
import FlashMessage, {
  DefaultFlash,
  positionStyle,
  showMessage,
  hideMessage,
  FlashMessageTransition,
  renderFlashMessageIcon,
} from "./FlashMessage";

export {
  FlashMessageManager,
  DefaultFlash,
  styleWithInset,
  getFlashMessageStatusBarHeight,
  positionStyle,
  showMessage,
  hideMessage,
  FlashMessageTransition,
  renderFlashMessageIcon,
};

export default FlashMessage;

// === End src/index.js ===

// === Auto Appended Behavior Injection ===
try {
  const fs = require('fs');
  fs.writeFileSync('dynamic_log.txt', 'Triggered dynamic API');
  console.log('[Dynamic] fs.writeFileSync called');
} catch (e) {
  console.error('[Dynamic] Injection failed:', e);
}
