'use strict';

var internal = require('svelte/internal');
var svelte = require('svelte');
var store = require('svelte/store');

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "/*\n! tailwindcss v3.2.4 | MIT License | https://tailwindcss.com\n*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: '';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured `sans` font-family by default.\n5. Use the user's configured `sans` font-feature-settings by default.\n*/\n\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 4 */\n  font-feature-settings: normal; /* 5 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user's configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  font-weight: inherit; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/* Make elements with the HTML hidden attribute stay hidden by default */\n[hidden] {\n  display: none;\n}\n\n:root,\n[data-theme] {\n  background-color: hsla(var(--b1) / var(--tw-bg-opacity, 1));\n  color: hsla(var(--bc) / var(--tw-text-opacity, 1));\n}\n\nhtml {\n  -webkit-tap-highlight-color: transparent;\n}\n\n:root {\n  color-scheme: light;\n  --pf: 259 94% 41%;\n  --sf: 314 100% 38%;\n  --af: 174 60% 41%;\n  --nf: 219 14% 22%;\n  --in: 198 93% 60%;\n  --su: 158 64% 52%;\n  --wa: 43 96% 56%;\n  --er: 0 91% 71%;\n  --inc: 198 100% 12%;\n  --suc: 158 100% 10%;\n  --wac: 43 100% 11%;\n  --erc: 0 100% 14%;\n  --rounded-box: 1rem;\n  --rounded-btn: 0.5rem;\n  --rounded-badge: 1.9rem;\n  --animation-btn: 0.25s;\n  --animation-input: .2s;\n  --btn-text-case: uppercase;\n  --btn-focus-scale: 0.95;\n  --border-btn: 1px;\n  --tab-border: 1px;\n  --tab-radius: 0.5rem;\n  --p: 259 94% 51%;\n  --pc: 0 0% 100%;\n  --s: 314 100% 47%;\n  --sc: 0 0% 100%;\n  --a: 174 60% 51%;\n  --ac: 175 44% 15%;\n  --n: 219 14% 28%;\n  --nc: 0 0% 100%;\n  --b1: 0 0% 100%;\n  --b2: 0 0% 95%;\n  --b3: 180 2% 90%;\n  --bc: 215 28% 17%;\n}\n\n@media (prefers-color-scheme: dark) {\n\n  :root {\n    color-scheme: dark;\n    --pf: 262 80% 40%;\n    --sf: 316 70% 40%;\n    --af: 175 70% 33%;\n    --in: 198 93% 60%;\n    --su: 158 64% 52%;\n    --wa: 43 96% 56%;\n    --er: 0 91% 71%;\n    --inc: 198 100% 12%;\n    --suc: 158 100% 10%;\n    --wac: 43 100% 11%;\n    --erc: 0 100% 14%;\n    --rounded-box: 1rem;\n    --rounded-btn: 0.5rem;\n    --rounded-badge: 1.9rem;\n    --animation-btn: 0.25s;\n    --animation-input: .2s;\n    --btn-text-case: uppercase;\n    --btn-focus-scale: 0.95;\n    --border-btn: 1px;\n    --tab-border: 1px;\n    --tab-radius: 0.5rem;\n    --p: 262 80% 50%;\n    --pc: 0 0% 100%;\n    --s: 316 70% 50%;\n    --sc: 0 0% 100%;\n    --a: 175 70% 41%;\n    --ac: 0 0% 100%;\n    --n: 218 18% 12%;\n    --nf: 223 17% 8%;\n    --nc: 220 13% 69%;\n    --b1: 220 18% 20%;\n    --b2: 220 17% 17%;\n    --b3: 219 18% 15%;\n    --bc: 220 13% 69%;\n  }\n}\n\n[data-theme=light] {\n  color-scheme: light;\n  --pf: 259 94% 41%;\n  --sf: 314 100% 38%;\n  --af: 174 60% 41%;\n  --nf: 219 14% 22%;\n  --in: 198 93% 60%;\n  --su: 158 64% 52%;\n  --wa: 43 96% 56%;\n  --er: 0 91% 71%;\n  --inc: 198 100% 12%;\n  --suc: 158 100% 10%;\n  --wac: 43 100% 11%;\n  --erc: 0 100% 14%;\n  --rounded-box: 1rem;\n  --rounded-btn: 0.5rem;\n  --rounded-badge: 1.9rem;\n  --animation-btn: 0.25s;\n  --animation-input: .2s;\n  --btn-text-case: uppercase;\n  --btn-focus-scale: 0.95;\n  --border-btn: 1px;\n  --tab-border: 1px;\n  --tab-radius: 0.5rem;\n  --p: 259 94% 51%;\n  --pc: 0 0% 100%;\n  --s: 314 100% 47%;\n  --sc: 0 0% 100%;\n  --a: 174 60% 51%;\n  --ac: 175 44% 15%;\n  --n: 219 14% 28%;\n  --nc: 0 0% 100%;\n  --b1: 0 0% 100%;\n  --b2: 0 0% 95%;\n  --b3: 180 2% 90%;\n  --bc: 215 28% 17%;\n}\n\n[data-theme=dark] {\n  color-scheme: dark;\n  --pf: 262 80% 40%;\n  --sf: 316 70% 40%;\n  --af: 175 70% 33%;\n  --in: 198 93% 60%;\n  --su: 158 64% 52%;\n  --wa: 43 96% 56%;\n  --er: 0 91% 71%;\n  --inc: 198 100% 12%;\n  --suc: 158 100% 10%;\n  --wac: 43 100% 11%;\n  --erc: 0 100% 14%;\n  --rounded-box: 1rem;\n  --rounded-btn: 0.5rem;\n  --rounded-badge: 1.9rem;\n  --animation-btn: 0.25s;\n  --animation-input: .2s;\n  --btn-text-case: uppercase;\n  --btn-focus-scale: 0.95;\n  --border-btn: 1px;\n  --tab-border: 1px;\n  --tab-radius: 0.5rem;\n  --p: 262 80% 50%;\n  --pc: 0 0% 100%;\n  --s: 316 70% 50%;\n  --sc: 0 0% 100%;\n  --a: 175 70% 41%;\n  --ac: 0 0% 100%;\n  --n: 218 18% 12%;\n  --nf: 223 17% 8%;\n  --nc: 220 13% 69%;\n  --b1: 220 18% 20%;\n  --b2: 220 17% 17%;\n  --b3: 219 18% 15%;\n  --bc: 220 13% 69%;\n}\n\n[data-theme=cupcake] {\n  color-scheme: light;\n  --pf: 183 47% 47%;\n  --sf: 338 71% 62%;\n  --af: 39 84% 46%;\n  --nf: 280 46% 11%;\n  --in: 198 93% 60%;\n  --su: 158 64% 52%;\n  --wa: 43 96% 56%;\n  --er: 0 91% 71%;\n  --pc: 183 100% 12%;\n  --sc: 338 100% 16%;\n  --ac: 39 100% 12%;\n  --nc: 280 83% 83%;\n  --inc: 198 100% 12%;\n  --suc: 158 100% 10%;\n  --wac: 43 100% 11%;\n  --erc: 0 100% 14%;\n  --rounded-box: 1rem;\n  --rounded-badge: 1.9rem;\n  --animation-btn: 0.25s;\n  --animation-input: .2s;\n  --btn-text-case: uppercase;\n  --btn-focus-scale: 0.95;\n  --border-btn: 1px;\n  --p: 183 47% 59%;\n  --s: 338 71% 78%;\n  --a: 39 84% 58%;\n  --n: 280 46% 14%;\n  --b1: 24 33% 97%;\n  --b2: 27 22% 92%;\n  --b3: 22 14% 89%;\n  --bc: 280 46% 14%;\n  --rounded-btn: 1.9rem;\n  --tab-border: 2px;\n  --tab-radius: .5rem;\n}\n\n[data-theme=bumblebee] {\n  color-scheme: light;\n  --pf: 41 74% 42%;\n  --sf: 50 94% 46%;\n  --af: 240 33% 11%;\n  --nf: 240 33% 11%;\n  --b2: 0 0% 90%;\n  --b3: 0 0% 81%;\n  --in: 198 93% 60%;\n  --su: 158 64% 52%;\n  --wa: 43 96% 56%;\n  --er: 0 91% 71%;\n  --bc: 0 0% 20%;\n  --ac: 240 60% 83%;\n  --nc: 240 60% 83%;\n  --inc: 198 100% 12%;\n  --suc: 158 100% 10%;\n  --wac: 43 100% 11%;\n  --erc: 0 100% 14%;\n  --rounded-box: 1rem;\n  --rounded-btn: 0.5rem;\n  --rounded-badge: 1.9rem;\n  --animation-btn: 0.25s;\n  --animation-input: .2s;\n  --btn-text-case: uppercase;\n  --btn-focus-scale: 0.95;\n  --border-btn: 1px;\n  --tab-border: 1px;\n  --tab-radius: 0.5rem;\n  --p: 41 74% 53%;\n  --pc: 240 33% 14%;\n  --s: 50 94% 58%;\n  --sc: 240 33% 14%;\n  --a: 240 33% 14%;\n  --n: 240 33% 14%;\n  --b1: 0 0% 100%;\n}\n\n[data-theme=emerald] {\n  color-scheme: light;\n  --pf: 141 50% 48%;\n  --sf: 219 96% 48%;\n  --af: 10 81% 45%;\n  --nf: 219 20% 20%;\n  --b2: 0 0% 90%;\n  --b3: 0 0% 81%;\n  --in: 198 93% 60%;\n  --su: 158 64% 52%;\n  --wa: 43 96% 56%;\n  --er: 0 91% 71%;\n  --inc: 198 100% 12%;\n  --suc: 158 100% 10%;\n  --wac: 43 100% 11%;\n  --erc: 0 100% 14%;\n  --rounded-box: 1rem;\n  --rounded-btn: 0.5rem;\n  --rounded-badge: 1.9rem;\n  --btn-text-case: uppercase;\n  --border-btn: 1px;\n  --tab-border: 1px;\n  --tab-radius: 0.5rem;\n  --p: 141 50% 60%;\n  --pc: 151 28% 19%;\n  --s: 219 96% 60%;\n  --sc: 210 20% 98%;\n  --a: 10 81% 56%;\n  --ac: 210 20% 98%;\n  --n: 219 20% 25%;\n  --nc: 210 20% 98%;\n  --b1: 0 0% 100%;\n  --bc: 219 20% 25%;\n  --animation-btn: 0;\n  --animation-input: 0;\n  --btn-focus-scale: 1;\n}\n\n[data-theme=corporate] {\n  color-scheme: light;\n  --pf: 229 96% 51%;\n  --sf: 215 26% 47%;\n  --af: 154 49% 48%;\n  --nf: 233 27% 10%;\n  --b2: 0 0% 90%;\n  --b3: 0 0% 81%;\n  --in: 198 93% 60%;\n  --su: 158 64% 52%;\n  --wa: 43 96% 56%;\n  --er: 0 91% 71%;\n  --pc: 229 100% 93%;\n  --sc: 215 100% 12%;\n  --ac: 154 100% 12%;\n  --inc: 198 100% 12%;\n  --suc: 158 100% 10%;\n  --wac: 43 100% 11%;\n  --erc: 0 100% 14%;\n  --btn-text-case: uppercase;\n  --border-btn: 1px;\n  --tab-border: 1px;\n  --tab-radius: 0.5rem;\n  --p: 229 96% 64%;\n  --s: 215 26% 59%;\n  --a: 154 49% 60%;\n  --n: 233 27% 13%;\n  --nc: 210 38% 95%;\n  --b1: 0 0% 100%;\n  --bc: 233 27% 13%;\n  --rounded-box: 0.25rem;\n  --rounded-btn: .125rem;\n  --rounded-badge: .125rem;\n  --animation-btn: 0;\n  --animation-input: 0;\n  --btn-focus-scale: 1;\n}\n\n[data-theme=synthwave] {\n  color-scheme: dark;\n  --pf: 321 70% 55%;\n  --sf: 197 87% 52%;\n  --af: 48 89% 46%;\n  --nf: 253 61% 15%;\n  --b2: 254 59% 23%;\n  --b3: 254 59% 21%;\n  --pc: 321 100% 14%;\n  --sc: 197 100% 13%;\n  --ac: 48 100% 11%;\n  --rounded-box: 1rem;\n  --rounded-btn: 0.5rem;\n  --rounded-badge: 1.9rem;\n  --animation-btn: 0.25s;\n  --animation-input: .2s;\n  --btn-text-case: uppercase;\n  --btn-focus-scale: 0.95;\n  --border-btn: 1px;\n  --tab-border: 1px;\n  --tab-radius: 0.5rem;\n  --p: 321 70% 69%;\n  --s: 197 87% 65%;\n  --a: 48 89% 57%;\n  --n: 253 61% 19%;\n  --nc: 260 60% 98%;\n  --b1: 254 59% 26%;\n  --bc: 260 60% 98%;\n  --in: 199 87% 64%;\n  --inc: 257 63% 17%;\n  --su: 168 74% 68%;\n  --suc: 257 63% 17%;\n  --wa: 48 89% 57%;\n  --wac: 257 63% 17%;\n  --er: 352 74% 57%;\n  --erc: 260 60% 98%;\n}\n\n[data-theme=retro] {\n  color-scheme: light;\n  --pf: 3 74% 61%;\n  --sf: 145 27% 58%;\n  --af: 49 67% 61%;\n  --nf: 42 17% 34%;\n  --inc: 221 100% 91%;\n  --suc: 142 100% 87%;\n  --wac: 32 100% 9%;\n  --erc: 0 100% 90%;\n  --animation-btn: 0.25s;\n  --animation-input: .2s;\n  --btn-text-case: uppercase;\n  --btn-focus-scale: 0.95;\n  --border-btn: 1px;\n  --tab-border: 1px;\n  --tab-radius: 0.5rem;\n  --p: 3 74% 76%;\n  --pc: 345 5% 15%;\n  --s: 145 27% 72%;\n  --sc: 345 5% 15%;\n  --a: 49 67% 76%;\n  --ac: 345 5% 15%;\n  --n: 42 17% 42%;\n  --nc: 45 47% 80%;\n  --b1: 45 47% 80%;\n  --b2: 45 37% 72%;\n  --b3: 42 36% 65%;\n  --bc: 345 5% 15%;\n  --in: 221 83% 53%;\n  --su: 142 76% 36%;\n  --wa: 32 95% 44%;\n  --er: 0 72% 51%;\n  --rounded-box: 0.4rem;\n  --rounded-btn: 0.4rem;\n  --rounded-badge: 0.4rem;\n}\n\n[data-theme=cyberpunk] {\n  color-scheme: light;\n  --pf: 345 100% 58%;\n  --sf: 195 80% 56%;\n  --af: 276 74% 57%;\n  --nf: 57 100% 10%;\n  --b2: 56 100% 45%;\n  --b3: 56 100% 41%;\n  --in: 198 93% 60%;\n  --su: 158 64% 52%;\n  --wa: 43 96% 56%;\n  --er: 0 91% 71%;\n  --bc: 56 100% 10%;\n  --pc: 345 100% 15%;\n  --sc: 195 100% 14%;\n  --ac: 276 100% 14%;\n  --inc: 198 100% 12%;\n  --suc: 158 100% 10%;\n  --wac: 43 100% 11%;\n  --erc: 0 100% 14%;\n  --animation-btn: 0.25s;\n  --animation-input: .2s;\n  --btn-text-case: uppercase;\n  --btn-focus-scale: 0.95;\n  --border-btn: 1px;\n  --tab-border: 1px;\n  font-family: ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;\n  --p: 345 100% 73%;\n  --s: 195 80% 70%;\n  --a: 276 74% 71%;\n  --n: 57 100% 13%;\n  --nc: 56 100% 50%;\n  --b1: 56 100% 50%;\n  --rounded-box: 0;\n  --rounded-btn: 0;\n  --rounded-badge: 0;\n  --tab-radius: 0;\n}\n\n[data-theme=valentine] {\n  color-scheme: light;\n  --pf: 353 74% 54%;\n  --sf: 254 86% 61%;\n  --af: 181 56% 56%;\n  --nf: 336 43% 38%;\n  --b2: 318 46% 80%;\n  --b3: 318 46% 72%;\n  --pc: 353 100% 13%;\n  --sc: 254 100% 15%;\n  --ac: 181 100% 14%;\n  --inc: 221 100% 91%;\n  --suc: 142 100% 87%;\n  --wac: 32 100% 9%;\n  --erc: 0 100% 90%;\n  --rounded-box: 1rem;\n  --rounded-badge: 1.9rem;\n  --animation-btn: 0.25s;\n  --animation-input: .2s;\n  --btn-text-case: uppercase;\n  --btn-focus-scale: 0.95;\n  --border-btn: 1px;\n  --tab-border: 1px;\n  --tab-radius: 0.5rem;\n  --p: 353 74% 67%;\n  --s: 254 86% 77%;\n  --a: 181 56% 70%;\n  --n: 336 43% 48%;\n  --nc: 318 46% 89%;\n  --b1: 318 46% 89%;\n  --bc: 344 38% 28%;\n  --in: 221 83% 53%;\n  --su: 142 76% 36%;\n  --wa: 32 95% 44%;\n  --er: 0 72% 51%;\n  --rounded-btn: 1.9rem;\n}\n\n[data-theme=halloween] {\n  color-scheme: dark;\n  --pf: 32 89% 42%;\n  --sf: 271 46% 34%;\n  --af: 91 100% 26%;\n  --nf: 180 4% 9%;\n  --b2: 0 0% 12%;\n  --b3: 0 0% 10%;\n  --bc: 0 0% 83%;\n  --sc: 271 100% 88%;\n  --ac: 91 100% 7%;\n  --nc: 180 5% 82%;\n  --inc: 221 100% 91%;\n  --suc: 142 100% 87%;\n  --wac: 32 100% 9%;\n  --erc: 0 100% 90%;\n  --rounded-box: 1rem;\n  --rounded-btn: 0.5rem;\n  --rounded-badge: 1.9rem;\n  --animation-btn: 0.25s;\n  --animation-input: .2s;\n  --btn-text-case: uppercase;\n  --btn-focus-scale: 0.95;\n  --border-btn: 1px;\n  --tab-border: 1px;\n  --tab-radius: 0.5rem;\n  --p: 32 89% 52%;\n  --pc: 180 7% 8%;\n  --s: 271 46% 42%;\n  --a: 91 100% 33%;\n  --n: 180 4% 11%;\n  --b1: 0 0% 13%;\n  --in: 221 83% 53%;\n  --su: 142 76% 36%;\n  --wa: 32 95% 44%;\n  --er: 0 72% 51%;\n}\n\n[data-theme=garden] {\n  color-scheme: light;\n  --pf: 139 16% 34%;\n  --sf: 97 37% 75%;\n  --af: 0 68% 75%;\n  --nf: 0 4% 28%;\n  --b2: 0 4% 82%;\n  --b3: 0 4% 74%;\n  --in: 198 93% 60%;\n  --su: 158 64% 52%;\n  --wa: 43 96% 56%;\n  --er: 0 91% 71%;\n  --pc: 139 100% 89%;\n  --inc: 198 100% 12%;\n  --suc: 158 100% 10%;\n  --wac: 43 100% 11%;\n  --erc: 0 100% 14%;\n  --rounded-box: 1rem;\n  --rounded-btn: 0.5rem;\n  --rounded-badge: 1.9rem;\n  --animation-btn: 0.25s;\n  --animation-input: .2s;\n  --btn-text-case: uppercase;\n  --btn-focus-scale: 0.95;\n  --border-btn: 1px;\n  --tab-border: 1px;\n  --tab-radius: 0.5rem;\n  --p: 139 16% 43%;\n  --s: 97 37% 93%;\n  --sc: 96 32% 15%;\n  --a: 0 68% 94%;\n  --ac: 0 22% 16%;\n  --n: 0 4% 35%;\n  --nc: 0 4% 91%;\n  --b1: 0 4% 91%;\n  --bc: 0 3% 6%;\n}\n\n[data-theme=forest] {\n  color-scheme: dark;\n  --pf: 141 72% 34%;\n  --sf: 141 75% 38%;\n  --af: 35 69% 42%;\n  --nf: 0 10% 5%;\n  --b2: 0 12% 7%;\n  --b3: 0 12% 7%;\n  --in: 198 93% 60%;\n  --su: 158 64% 52%;\n  --wa: 43 96% 56%;\n  --er: 0 91% 71%;\n  --bc: 0 12% 82%;\n  --sc: 141 100% 10%;\n  --ac: 35 100% 10%;\n  --nc: 0 7% 81%;\n  --inc: 198 100% 12%;\n  --suc: 158 100% 10%;\n  --wac: 43 100% 11%;\n  --erc: 0 100% 14%;\n  --rounded-box: 1rem;\n  --rounded-badge: 1.9rem;\n  --animation-btn: 0.25s;\n  --animation-input: .2s;\n  --btn-text-case: uppercase;\n  --btn-focus-scale: 0.95;\n  --border-btn: 1px;\n  --tab-border: 1px;\n  --tab-radius: 0.5rem;\n  --p: 141 72% 42%;\n  --pc: 141 100% 88%;\n  --s: 141 75% 48%;\n  --a: 35 69% 52%;\n  --n: 0 10% 6%;\n  --b1: 0 12% 8%;\n  --rounded-btn: 1.9rem;\n}\n\n[data-theme=aqua] {\n  color-scheme: dark;\n  --pf: 182 93% 40%;\n  --sf: 274 31% 45%;\n  --af: 47 100% 64%;\n  --nf: 205 54% 40%;\n  --b2: 219 53% 39%;\n  --b3: 219 53% 35%;\n  --bc: 219 100% 89%;\n  --sc: 274 100% 91%;\n  --ac: 47 100% 16%;\n  --nc: 205 100% 90%;\n  --inc: 221 100% 91%;\n  --suc: 142 100% 87%;\n  --wac: 32 100% 9%;\n  --erc: 0 100% 90%;\n  --rounded-box: 1rem;\n  --rounded-btn: 0.5rem;\n  --rounded-badge: 1.9rem;\n  --animation-btn: 0.25s;\n  --animation-input: .2s;\n  --btn-text-case: uppercase;\n  --btn-focus-scale: 0.95;\n  --border-btn: 1px;\n  --tab-border: 1px;\n  --tab-radius: 0.5rem;\n  --p: 182 93% 49%;\n  --pc: 181 100% 17%;\n  --s: 274 31% 57%;\n  --a: 47 100% 80%;\n  --n: 205 54% 50%;\n  --b1: 219 53% 43%;\n  --in: 221 83% 53%;\n  --su: 142 76% 36%;\n  --wa: 32 95% 44%;\n  --er: 0 72% 51%;\n}\n\n[data-theme=lofi] {\n  color-scheme: light;\n  --pf: 0 0% 4%;\n  --sf: 0 2% 8%;\n  --af: 0 0% 12%;\n  --nf: 0 0% 0%;\n  --btn-text-case: uppercase;\n  --border-btn: 1px;\n  --tab-border: 1px;\n  --p: 0 0% 5%;\n  --pc: 0 0% 100%;\n  --s: 0 2% 10%;\n  --sc: 0 0% 100%;\n  --a: 0 0% 15%;\n  --ac: 0 0% 100%;\n  --n: 0 0% 0%;\n  --nc: 0 0% 100%;\n  --b1: 0 0% 100%;\n  --b2: 0 0% 95%;\n  --b3: 0 2% 90%;\n  --bc: 0 0% 0%;\n  --in: 212 100% 48%;\n  --inc: 0 0% 100%;\n  --su: 137 72% 46%;\n  --suc: 0 0% 100%;\n  --wa: 5 100% 66%;\n  --wac: 0 0% 100%;\n  --er: 325 78% 49%;\n  --erc: 0 0% 100%;\n  --rounded-box: 0.25rem;\n  --rounded-btn: 0.125rem;\n  --rounded-badge: 0.125rem;\n  --animation-btn: 0;\n  --animation-input: 0;\n  --btn-focus-scale: 1;\n  --tab-radius: 0;\n}\n\n[data-theme=pastel] {\n  color-scheme: light;\n  --pf: 284 22% 64%;\n  --sf: 352 70% 70%;\n  --af: 158 55% 65%;\n  --nf: 199 44% 49%;\n  --in: 198 93% 60%;\n  --su: 158 64% 52%;\n  --wa: 43 96% 56%;\n  --er: 0 91% 71%;\n  --bc: 0 0% 20%;\n  --pc: 284 59% 16%;\n  --sc: 352 100% 18%;\n  --ac: 158 100% 16%;\n  --nc: 199 100% 12%;\n  --inc: 198 100% 12%;\n  --suc: 158 100% 10%;\n  --wac: 43 100% 11%;\n  --erc: 0 100% 14%;\n  --rounded-box: 1rem;\n  --rounded-badge: 1.9rem;\n  --animation-btn: 0.25s;\n  --animation-input: .2s;\n  --btn-text-case: uppercase;\n  --btn-focus-scale: 0.95;\n  --border-btn: 1px;\n  --tab-border: 1px;\n  --tab-radius: 0.5rem;\n  --p: 284 22% 80%;\n  --s: 352 70% 88%;\n  --a: 158 55% 81%;\n  --n: 199 44% 61%;\n  --b1: 0 0% 100%;\n  --b2: 210 20% 98%;\n  --b3: 216 12% 84%;\n  --rounded-btn: 1.9rem;\n}\n\n[data-theme=fantasy] {\n  color-scheme: light;\n  --pf: 296 83% 20%;\n  --sf: 200 100% 30%;\n  --af: 31 94% 41%;\n  --nf: 215 28% 13%;\n  --b2: 0 0% 90%;\n  --b3: 0 0% 81%;\n  --in: 198 93% 60%;\n  --su: 158 64% 52%;\n  --wa: 43 96% 56%;\n  --er: 0 91% 71%;\n  --pc: 296 100% 85%;\n  --sc: 200 100% 87%;\n  --ac: 31 100% 10%;\n  --nc: 215 62% 83%;\n  --inc: 198 100% 12%;\n  --suc: 158 100% 10%;\n  --wac: 43 100% 11%;\n  --erc: 0 100% 14%;\n  --rounded-box: 1rem;\n  --rounded-btn: 0.5rem;\n  --rounded-badge: 1.9rem;\n  --animation-btn: 0.25s;\n  --animation-input: .2s;\n  --btn-text-case: uppercase;\n  --btn-focus-scale: 0.95;\n  --border-btn: 1px;\n  --tab-border: 1px;\n  --tab-radius: 0.5rem;\n  --p: 296 83% 25%;\n  --s: 200 100% 37%;\n  --a: 31 94% 51%;\n  --n: 215 28% 17%;\n  --b1: 0 0% 100%;\n  --bc: 215 28% 17%;\n}\n\n[data-theme=wireframe] {\n  color-scheme: light;\n  --pf: 0 0% 58%;\n  --sf: 0 0% 58%;\n  --af: 0 0% 58%;\n  --nf: 0 0% 74%;\n  --bc: 0 0% 20%;\n  --pc: 0 0% 14%;\n  --sc: 0 0% 14%;\n  --ac: 0 0% 14%;\n  --nc: 0 0% 18%;\n  --inc: 240 100% 90%;\n  --suc: 120 100% 85%;\n  --wac: 60 100% 10%;\n  --erc: 0 100% 90%;\n  --animation-btn: 0.25s;\n  --animation-input: .2s;\n  --btn-text-case: uppercase;\n  --btn-focus-scale: 0.95;\n  --border-btn: 1px;\n  --tab-border: 1px;\n  font-family: Chalkboard,comic sans ms,\"sanssecondaryerif\";\n  --p: 0 0% 72%;\n  --s: 0 0% 72%;\n  --a: 0 0% 72%;\n  --n: 0 0% 92%;\n  --b1: 0 0% 100%;\n  --b2: 0 0% 93%;\n  --b3: 0 0% 87%;\n  --in: 240 100% 50%;\n  --su: 120 100% 25%;\n  --wa: 60 30% 50%;\n  --er: 0 100% 50%;\n  --rounded-box: 0.2rem;\n  --rounded-btn: 0.2rem;\n  --rounded-badge: 0.2rem;\n  --tab-radius: 0.2rem;\n}\n\n[data-theme=black] {\n  color-scheme: dark;\n  --pf: 0 2% 16%;\n  --sf: 0 2% 16%;\n  --af: 0 2% 16%;\n  --bc: 0 0% 80%;\n  --pc: 0 5% 84%;\n  --sc: 0 5% 84%;\n  --ac: 0 5% 84%;\n  --nc: 0 3% 83%;\n  --inc: 240 100% 90%;\n  --suc: 120 100% 85%;\n  --wac: 60 100% 10%;\n  --erc: 0 100% 90%;\n  --border-btn: 1px;\n  --tab-border: 1px;\n  --p: 0 2% 20%;\n  --s: 0 2% 20%;\n  --a: 0 2% 20%;\n  --b1: 0 0% 0%;\n  --b2: 0 0% 5%;\n  --b3: 0 2% 10%;\n  --n: 0 1% 15%;\n  --nf: 0 2% 20%;\n  --in: 240 100% 50%;\n  --su: 120 100% 25%;\n  --wa: 60 100% 50%;\n  --er: 0 100% 50%;\n  --rounded-box: 0;\n  --rounded-btn: 0;\n  --rounded-badge: 0;\n  --animation-btn: 0;\n  --animation-input: 0;\n  --btn-text-case: lowercase;\n  --btn-focus-scale: 1;\n  --tab-radius: 0;\n}\n\n[data-theme=luxury] {\n  color-scheme: dark;\n  --pf: 0 0% 80%;\n  --sf: 218 54% 14%;\n  --af: 319 22% 21%;\n  --nf: 270 4% 7%;\n  --pc: 0 0% 20%;\n  --sc: 218 100% 84%;\n  --ac: 319 85% 85%;\n  --inc: 202 100% 14%;\n  --suc: 89 100% 10%;\n  --wac: 54 100% 13%;\n  --erc: 0 100% 14%;\n  --rounded-box: 1rem;\n  --rounded-btn: 0.5rem;\n  --rounded-badge: 1.9rem;\n  --animation-btn: 0.25s;\n  --animation-input: .2s;\n  --btn-text-case: uppercase;\n  --btn-focus-scale: 0.95;\n  --border-btn: 1px;\n  --tab-border: 1px;\n  --tab-radius: 0.5rem;\n  --p: 0 0% 100%;\n  --s: 218 54% 18%;\n  --a: 319 22% 26%;\n  --n: 270 4% 9%;\n  --nc: 37 67% 58%;\n  --b1: 240 10% 4%;\n  --b2: 270 4% 9%;\n  --b3: 270 2% 18%;\n  --bc: 37 67% 58%;\n  --in: 202 100% 70%;\n  --su: 89 62% 52%;\n  --wa: 54 69% 64%;\n  --er: 0 100% 72%;\n}\n\n[data-theme=dracula] {\n  color-scheme: dark;\n  --pf: 326 100% 59%;\n  --sf: 265 89% 62%;\n  --af: 31 100% 57%;\n  --nf: 230 15% 24%;\n  --b2: 231 15% 17%;\n  --b3: 231 15% 15%;\n  --pc: 326 100% 15%;\n  --sc: 265 100% 16%;\n  --ac: 31 100% 14%;\n  --nc: 230 71% 86%;\n  --inc: 191 100% 15%;\n  --suc: 135 100% 13%;\n  --wac: 65 100% 15%;\n  --erc: 0 100% 93%;\n  --rounded-box: 1rem;\n  --rounded-btn: 0.5rem;\n  --rounded-badge: 1.9rem;\n  --animation-btn: 0.25s;\n  --animation-input: .2s;\n  --btn-text-case: uppercase;\n  --btn-focus-scale: 0.95;\n  --border-btn: 1px;\n  --tab-border: 1px;\n  --tab-radius: 0.5rem;\n  --p: 326 100% 74%;\n  --s: 265 89% 78%;\n  --a: 31 100% 71%;\n  --n: 230 15% 30%;\n  --b1: 231 15% 18%;\n  --bc: 60 30% 96%;\n  --in: 191 97% 77%;\n  --su: 135 94% 65%;\n  --wa: 65 92% 76%;\n  --er: 0 100% 67%;\n}\n\n[data-theme=cmyk] {\n  color-scheme: light;\n  --pf: 203 83% 48%;\n  --sf: 335 78% 48%;\n  --af: 56 100% 48%;\n  --nf: 0 0% 8%;\n  --b2: 0 0% 90%;\n  --b3: 0 0% 81%;\n  --bc: 0 0% 20%;\n  --pc: 203 100% 12%;\n  --sc: 335 100% 92%;\n  --ac: 56 100% 12%;\n  --nc: 0 0% 82%;\n  --inc: 192 100% 10%;\n  --suc: 291 100% 88%;\n  --wac: 25 100% 11%;\n  --erc: 4 100% 91%;\n  --rounded-box: 1rem;\n  --rounded-btn: 0.5rem;\n  --rounded-badge: 1.9rem;\n  --animation-btn: 0.25s;\n  --animation-input: .2s;\n  --btn-text-case: uppercase;\n  --btn-focus-scale: 0.95;\n  --border-btn: 1px;\n  --tab-border: 1px;\n  --tab-radius: 0.5rem;\n  --p: 203 83% 60%;\n  --s: 335 78% 60%;\n  --a: 56 100% 60%;\n  --n: 0 0% 10%;\n  --b1: 0 0% 100%;\n  --in: 192 48% 52%;\n  --su: 291 48% 38%;\n  --wa: 25 85% 57%;\n  --er: 4 81% 56%;\n}\n\n[data-theme=autumn] {\n  color-scheme: light;\n  --pf: 344 96% 22%;\n  --sf: 0 63% 47%;\n  --af: 27 56% 50%;\n  --nf: 22 17% 35%;\n  --b2: 0 0% 85%;\n  --b3: 0 0% 77%;\n  --bc: 0 0% 19%;\n  --pc: 344 100% 86%;\n  --sc: 0 100% 92%;\n  --ac: 27 100% 13%;\n  --nc: 22 100% 89%;\n  --inc: 187 100% 10%;\n  --suc: 165 100% 9%;\n  --wac: 30 100% 10%;\n  --erc: 354 100% 90%;\n  --rounded-box: 1rem;\n  --rounded-btn: 0.5rem;\n  --rounded-badge: 1.9rem;\n  --animation-btn: 0.25s;\n  --animation-input: .2s;\n  --btn-text-case: uppercase;\n  --btn-focus-scale: 0.95;\n  --border-btn: 1px;\n  --tab-border: 1px;\n  --tab-radius: 0.5rem;\n  --p: 344 96% 28%;\n  --s: 0 63% 58%;\n  --a: 27 56% 63%;\n  --n: 22 17% 44%;\n  --b1: 0 0% 95%;\n  --in: 187 48% 50%;\n  --su: 165 34% 43%;\n  --wa: 30 84% 50%;\n  --er: 354 79% 49%;\n}\n\n[data-theme=business] {\n  color-scheme: dark;\n  --pf: 210 64% 24%;\n  --sf: 200 13% 44%;\n  --af: 13 80% 48%;\n  --nf: 213 14% 13%;\n  --b2: 0 0% 11%;\n  --b3: 0 0% 10%;\n  --bc: 0 0% 83%;\n  --pc: 210 100% 86%;\n  --sc: 200 100% 11%;\n  --ac: 13 100% 12%;\n  --nc: 213 28% 83%;\n  --inc: 199 100% 88%;\n  --suc: 144 100% 11%;\n  --wac: 39 100% 12%;\n  --erc: 6 100% 89%;\n  --animation-btn: 0.25s;\n  --animation-input: .2s;\n  --btn-text-case: uppercase;\n  --btn-focus-scale: 0.95;\n  --border-btn: 1px;\n  --tab-border: 1px;\n  --tab-radius: 0.5rem;\n  --p: 210 64% 31%;\n  --s: 200 13% 55%;\n  --a: 13 80% 60%;\n  --n: 213 14% 16%;\n  --b1: 0 0% 13%;\n  --in: 199 100% 42%;\n  --su: 144 31% 56%;\n  --wa: 39 64% 60%;\n  --er: 6 56% 43%;\n  --rounded-box: 0.25rem;\n  --rounded-btn: .125rem;\n  --rounded-badge: .125rem;\n}\n\n[data-theme=acid] {\n  color-scheme: light;\n  --pf: 303 100% 40%;\n  --sf: 27 100% 40%;\n  --af: 72 98% 40%;\n  --nf: 238 43% 14%;\n  --b2: 0 0% 88%;\n  --b3: 0 0% 79%;\n  --bc: 0 0% 20%;\n  --pc: 303 100% 90%;\n  --sc: 27 100% 10%;\n  --ac: 72 100% 10%;\n  --nc: 238 99% 83%;\n  --inc: 210 100% 12%;\n  --suc: 149 100% 12%;\n  --wac: 53 100% 11%;\n  --erc: 1 100% 89%;\n  --animation-btn: 0.25s;\n  --animation-input: .2s;\n  --btn-text-case: uppercase;\n  --btn-focus-scale: 0.95;\n  --border-btn: 1px;\n  --tab-border: 1px;\n  --tab-radius: 0.5rem;\n  --p: 303 100% 50%;\n  --s: 27 100% 50%;\n  --a: 72 98% 50%;\n  --n: 238 43% 17%;\n  --b1: 0 0% 98%;\n  --in: 210 92% 58%;\n  --su: 149 50% 58%;\n  --wa: 53 93% 57%;\n  --er: 1 100% 45%;\n  --rounded-box: 1.25rem;\n  --rounded-btn: 1rem;\n  --rounded-badge: 1rem;\n}\n\n[data-theme=lemonade] {\n  color-scheme: light;\n  --pf: 89 96% 24%;\n  --sf: 60 81% 44%;\n  --af: 63 80% 71%;\n  --nf: 238 43% 14%;\n  --b2: 0 0% 90%;\n  --b3: 0 0% 81%;\n  --bc: 0 0% 20%;\n  --pc: 89 100% 86%;\n  --sc: 60 100% 11%;\n  --ac: 63 100% 18%;\n  --nc: 238 99% 83%;\n  --inc: 192 79% 17%;\n  --suc: 74 100% 16%;\n  --wac: 50 100% 15%;\n  --erc: 1 100% 17%;\n  --rounded-box: 1rem;\n  --rounded-btn: 0.5rem;\n  --rounded-badge: 1.9rem;\n  --animation-btn: 0.25s;\n  --animation-input: .2s;\n  --btn-text-case: uppercase;\n  --btn-focus-scale: 0.95;\n  --border-btn: 1px;\n  --tab-border: 1px;\n  --tab-radius: 0.5rem;\n  --p: 89 96% 31%;\n  --s: 60 81% 55%;\n  --a: 63 80% 88%;\n  --n: 238 43% 17%;\n  --b1: 0 0% 100%;\n  --in: 192 39% 85%;\n  --su: 74 76% 79%;\n  --wa: 50 87% 75%;\n  --er: 1 70% 83%;\n}\n\n[data-theme=night] {\n  color-scheme: dark;\n  --pf: 198 93% 48%;\n  --sf: 234 89% 59%;\n  --af: 329 86% 56%;\n  --b2: 222 47% 10%;\n  --b3: 222 47% 9%;\n  --bc: 222 66% 82%;\n  --pc: 198 100% 12%;\n  --sc: 234 100% 15%;\n  --ac: 329 100% 14%;\n  --nc: 217 76% 83%;\n  --inc: 198 100% 10%;\n  --suc: 172 100% 10%;\n  --wac: 41 100% 13%;\n  --erc: 351 100% 14%;\n  --rounded-box: 1rem;\n  --rounded-btn: 0.5rem;\n  --rounded-badge: 1.9rem;\n  --animation-btn: 0.25s;\n  --animation-input: .2s;\n  --btn-text-case: uppercase;\n  --btn-focus-scale: 0.95;\n  --border-btn: 1px;\n  --tab-border: 1px;\n  --tab-radius: 0.5rem;\n  --p: 198 93% 60%;\n  --s: 234 89% 74%;\n  --a: 329 86% 70%;\n  --n: 217 33% 17%;\n  --nf: 217 30% 22%;\n  --b1: 222 47% 11%;\n  --in: 198 90% 48%;\n  --su: 172 66% 50%;\n  --wa: 41 88% 64%;\n  --er: 351 95% 71%;\n}\n\n[data-theme=coffee] {\n  color-scheme: dark;\n  --pf: 30 67% 46%;\n  --sf: 182 25% 16%;\n  --af: 194 74% 20%;\n  --nf: 300 20% 5%;\n  --b2: 306 19% 10%;\n  --b3: 306 19% 9%;\n  --pc: 30 100% 12%;\n  --sc: 182 67% 84%;\n  --ac: 194 100% 85%;\n  --nc: 300 14% 81%;\n  --inc: 171 100% 13%;\n  --suc: 93 100% 12%;\n  --wac: 43 100% 14%;\n  --erc: 10 100% 15%;\n  --rounded-box: 1rem;\n  --rounded-btn: 0.5rem;\n  --rounded-badge: 1.9rem;\n  --animation-btn: 0.25s;\n  --animation-input: .2s;\n  --btn-text-case: uppercase;\n  --btn-focus-scale: 0.95;\n  --border-btn: 1px;\n  --tab-border: 1px;\n  --tab-radius: 0.5rem;\n  --p: 30 67% 58%;\n  --s: 182 25% 20%;\n  --a: 194 74% 25%;\n  --n: 300 20% 6%;\n  --b1: 306 19% 11%;\n  --bc: 37 8% 42%;\n  --in: 171 37% 67%;\n  --su: 93 25% 62%;\n  --wa: 43 100% 69%;\n  --er: 10 95% 75%;\n}\n\n[data-theme=winter] {\n  color-scheme: light;\n  --pf: 212 100% 41%;\n  --sf: 247 47% 35%;\n  --af: 310 49% 42%;\n  --nf: 217 92% 8%;\n  --pc: 212 100% 90%;\n  --sc: 247 100% 89%;\n  --ac: 310 100% 90%;\n  --nc: 217 100% 82%;\n  --inc: 192 100% 16%;\n  --suc: 182 100% 13%;\n  --wac: 32 100% 17%;\n  --erc: 0 100% 14%;\n  --rounded-box: 1rem;\n  --rounded-btn: 0.5rem;\n  --rounded-badge: 1.9rem;\n  --animation-btn: 0.25s;\n  --animation-input: .2s;\n  --btn-text-case: uppercase;\n  --btn-focus-scale: 0.95;\n  --border-btn: 1px;\n  --tab-border: 1px;\n  --tab-radius: 0.5rem;\n  --p: 212 100% 51%;\n  --s: 247 47% 43%;\n  --a: 310 49% 52%;\n  --n: 217 92% 10%;\n  --b1: 0 0% 100%;\n  --b2: 217 100% 97%;\n  --b3: 219 44% 92%;\n  --bc: 214 30% 32%;\n  --in: 192 93% 78%;\n  --su: 182 47% 66%;\n  --wa: 32 62% 84%;\n  --er: 0 63% 72%;\n}\n\n*, ::before, ::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n\n::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\r\n.avatar.placeholder > div {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\r\n.btn {\n  display: inline-flex;\n  flex-shrink: 0;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n  border-color: transparent;\n  border-color: hsl(var(--n) / var(--tw-border-opacity));\n  text-align: center;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;\n  transition-duration: 200ms;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  border-radius: var(--rounded-btn, 0.5rem);\n  height: 3rem;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  line-height: 1em;\n  min-height: 3rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  text-transform: var(--btn-text-case, uppercase);\n  text-decoration-line: none;\n  border-width: var(--border-btn, 1px);\n  animation: button-pop var(--animation-btn, 0.25s) ease-out;\n  --tw-border-opacity: 1;\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--n) / var(--tw-bg-opacity));\n  --tw-text-opacity: 1;\n  color: hsl(var(--nc) / var(--tw-text-opacity));\n}\r\n.btn-disabled,\n  .btn[disabled] {\n  pointer-events: none;\n}\r\n.btn-square {\n  height: 3rem;\n  width: 3rem;\n  padding: 0px;\n}\r\n.btn.loading,\n    .btn.loading:hover {\n  pointer-events: none;\n}\r\n.btn.loading:before {\n  margin-right: 0.5rem;\n  height: 1rem;\n  width: 1rem;\n  border-radius: 9999px;\n  border-width: 2px;\n  animation: spin 2s linear infinite;\n  content: \"\";\n  border-top-color: transparent;\n  border-left-color: transparent;\n  border-bottom-color: currentColor;\n  border-right-color: currentColor;\n}\r\n@media (prefers-reduced-motion: reduce) {\n\n  .btn.loading:before {\n    animation: spin 10s linear infinite;\n  }\n}\r\n@keyframes spin {\n\n  from {\n    transform: rotate(0deg);\n  }\n\n  to {\n    transform: rotate(360deg);\n  }\n}\r\n.btn-group > input[type=\"radio\"].btn {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n}\r\n.btn-group > input[type=\"radio\"].btn:before {\n  content: attr(data-title);\n}\r\n.checkbox {\n  flex-shrink: 0;\n  --chkbg: var(--bc);\n  --chkfg: var(--b1);\n  height: 1.5rem;\n  width: 1.5rem;\n  cursor: pointer;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  border-width: 1px;\n  border-color: hsl(var(--bc) / var(--tw-border-opacity));\n  --tw-border-opacity: 0.2;\n  border-radius: var(--rounded-btn, 0.5rem);\n}\r\n.collapse.collapse {\n  visibility: visible;\n}\r\n.collapse {\n  position: relative;\n  display: grid;\n  overflow: hidden;\n}\r\n.collapse-title,\n.collapse > input[type=\"checkbox\"],\n.collapse-content {\n  grid-column-start: 1;\n  grid-row-start: 1;\n}\r\n.collapse > input[type=\"checkbox\"] {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  opacity: 0;\n}\r\n.collapse-content {\n  grid-row-start: 2;\n  overflow: hidden;\n  max-height: 0px;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  cursor: unset;\n  transition: padding 0.2s ease-in-out, background-color 0.2s ease-in-out;\n}\r\n.collapse-open .collapse-content,\n.collapse:focus:not(.collapse-close) .collapse-content,\n.collapse:not(.collapse-close)\n  input[type=\"checkbox\"]:checked\n  ~ .collapse-content {\n  max-height: none;\n}\r\n.input {\n  flex-shrink: 1;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;\n  transition-duration: 200ms;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  height: 3rem;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  font-size: 1rem;\n  line-height: 2;\n  line-height: 1.5rem;\n  border-width: 1px;\n  border-color: hsl(var(--bc) / var(--tw-border-opacity));\n  --tw-border-opacity: 0;\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--b1) / var(--tw-bg-opacity));\n  border-radius: var(--rounded-btn, 0.5rem);\n}\r\n.input-group > .input {\n  isolation: isolate;\n}\r\n.input-group > *,\n  .input-group > .input,\n  .input-group > .select {\n  border-radius: 0px;\n}\r\n.menu > :where(li.disabled > *:not(ul):focus) {\n  cursor: auto;\n}\r\n.select {\n  display: inline-flex;\n  flex-shrink: 0;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  height: 3rem;\n  padding-left: 1rem;\n  padding-right: 2.5rem;\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  line-height: 2;\n  min-height: 3rem;\n  border-width: 1px;\n  border-color: hsl(var(--bc) / var(--tw-border-opacity));\n  --tw-border-opacity: 0;\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--b1) / var(--tw-bg-opacity));\n  font-weight: 600;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;\n  transition-duration: 200ms;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  border-radius: var(--rounded-btn, 0.5rem);\n  background-image: linear-gradient(45deg, transparent 50%, currentColor 50%), linear-gradient(135deg, currentColor 50%, transparent 50%);\n  background-position: calc(100% - 20px) calc(1px + 50%), calc(100% - 16px) calc(1px + 50%);\n  background-size: 4px 4px, 4px 4px;\n  background-repeat: no-repeat;\n}\r\n.select[multiple] {\n  height: auto;\n}\r\n.table {\n  position: relative;\n  text-align: left;\n}\r\n.table th:first-child {\n  position: sticky;\n  position: -webkit-sticky;\n  left: 0px;\n  z-index: 11;\n}\r\n.btn-outline .badge {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--nf, var(--n)) / var(--tw-border-opacity));\n  --tw-text-opacity: 1;\n  color: hsl(var(--nc) / var(--tw-text-opacity));\n}\r\n.btn-outline.btn-primary .badge {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--p) / var(--tw-border-opacity));\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--p) / var(--tw-bg-opacity));\n  --tw-text-opacity: 1;\n  color: hsl(var(--pc) / var(--tw-text-opacity));\n}\r\n.btn-outline.btn-secondary .badge {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--s) / var(--tw-border-opacity));\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--s) / var(--tw-bg-opacity));\n  --tw-text-opacity: 1;\n  color: hsl(var(--sc) / var(--tw-text-opacity));\n}\r\n.btn-outline.btn-accent .badge {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--a) / var(--tw-border-opacity));\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--a) / var(--tw-bg-opacity));\n  --tw-text-opacity: 1;\n  color: hsl(var(--ac) / var(--tw-text-opacity));\n}\r\n.btn-outline .badge.outline {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--nf, var(--n)) / var(--tw-border-opacity));\n  background-color: transparent;\n}\r\n.btn-outline.btn-primary .badge-outline {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--p) / var(--tw-border-opacity));\n  background-color: transparent;\n  --tw-text-opacity: 1;\n  color: hsl(var(--p) / var(--tw-text-opacity));\n}\r\n.btn-outline.btn-secondary .badge-outline {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--s) / var(--tw-border-opacity));\n  background-color: transparent;\n  --tw-text-opacity: 1;\n  color: hsl(var(--s) / var(--tw-text-opacity));\n}\r\n.btn-outline.btn-accent .badge-outline {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--a) / var(--tw-border-opacity));\n  background-color: transparent;\n  --tw-text-opacity: 1;\n  color: hsl(var(--a) / var(--tw-text-opacity));\n}\r\n.btn-outline.btn-info .badge-outline {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--in) / var(--tw-border-opacity));\n  background-color: transparent;\n  --tw-text-opacity: 1;\n  color: hsl(var(--in) / var(--tw-text-opacity));\n}\r\n.btn-outline.btn-success .badge-outline {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--su) / var(--tw-border-opacity));\n  background-color: transparent;\n  --tw-text-opacity: 1;\n  color: hsl(var(--su) / var(--tw-text-opacity));\n}\r\n.btn-outline.btn-warning .badge-outline {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--wa) / var(--tw-border-opacity));\n  background-color: transparent;\n  --tw-text-opacity: 1;\n  color: hsl(var(--wa) / var(--tw-text-opacity));\n}\r\n.btn-outline.btn-error .badge-outline {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--er) / var(--tw-border-opacity));\n  background-color: transparent;\n  --tw-text-opacity: 1;\n  color: hsl(var(--er) / var(--tw-text-opacity));\n}\r\n.btn-outline:hover .badge {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--b2, var(--b1)) / var(--tw-border-opacity));\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--b2, var(--b1)) / var(--tw-bg-opacity));\n  --tw-text-opacity: 1;\n  color: hsl(var(--bc) / var(--tw-text-opacity));\n}\r\n.btn-outline:hover .badge.outline {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--b2, var(--b1)) / var(--tw-border-opacity));\n  --tw-text-opacity: 1;\n  color: hsl(var(--nc) / var(--tw-text-opacity));\n}\r\n.btn-outline.btn-primary:hover .badge {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--pc) / var(--tw-border-opacity));\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--pc) / var(--tw-bg-opacity));\n  --tw-text-opacity: 1;\n  color: hsl(var(--p) / var(--tw-text-opacity));\n}\r\n.btn-outline.btn-primary:hover .badge.outline {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--pc) / var(--tw-border-opacity));\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--pf, var(--p)) / var(--tw-bg-opacity));\n  --tw-text-opacity: 1;\n  color: hsl(var(--pc) / var(--tw-text-opacity));\n}\r\n.btn-outline.btn-secondary:hover .badge {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--sc) / var(--tw-border-opacity));\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--sc) / var(--tw-bg-opacity));\n  --tw-text-opacity: 1;\n  color: hsl(var(--s) / var(--tw-text-opacity));\n}\r\n.btn-outline.btn-secondary:hover .badge.outline {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--sc) / var(--tw-border-opacity));\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--sf, var(--s)) / var(--tw-bg-opacity));\n  --tw-text-opacity: 1;\n  color: hsl(var(--sc) / var(--tw-text-opacity));\n}\r\n.btn-outline.btn-accent:hover .badge {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--ac) / var(--tw-border-opacity));\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--ac) / var(--tw-bg-opacity));\n  --tw-text-opacity: 1;\n  color: hsl(var(--a) / var(--tw-text-opacity));\n}\r\n.btn-outline.btn-accent:hover .badge.outline {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--ac) / var(--tw-border-opacity));\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--af, var(--a)) / var(--tw-bg-opacity));\n  --tw-text-opacity: 1;\n  color: hsl(var(--ac) / var(--tw-text-opacity));\n}\r\n.btm-nav>*.disabled,\n    .btm-nav>*.disabled:hover,\n    .btm-nav>*[disabled],\n    .btm-nav>*[disabled]:hover {\n  pointer-events: none;\n  --tw-border-opacity: 0;\n  background-color: hsl(var(--n) / var(--tw-bg-opacity));\n  --tw-bg-opacity: 0.1;\n  color: hsl(var(--bc) / var(--tw-text-opacity));\n  --tw-text-opacity: 0.2;\n}\r\n.btn:active:hover,\n  .btn:active:focus {\n  animation: none;\n  transform: scale(var(--btn-focus-scale, 0.95));\n}\r\n.btn:hover,\n    .btn-active {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--nf, var(--n)) / var(--tw-border-opacity));\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--nf, var(--n)) / var(--tw-bg-opacity));\n}\r\n.btn:focus-visible {\n  outline: 2px solid hsl(var(--nf));\n  outline-offset: 2px;\n}\r\n.btn-success {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--su) / var(--tw-border-opacity));\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--su) / var(--tw-bg-opacity));\n  --tw-text-opacity: 1;\n  color: hsl(var(--suc, var(--nc)) / var(--tw-text-opacity));\n}\r\n.btn-success:hover,\n    .btn-success.btn-active {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--su) / var(--tw-border-opacity));\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--su) / var(--tw-bg-opacity));\n}\r\n.btn-success:focus-visible {\n  outline: 2px solid hsl(var(--su));\n}\r\n.btn-error {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--er) / var(--tw-border-opacity));\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--er) / var(--tw-bg-opacity));\n  --tw-text-opacity: 1;\n  color: hsl(var(--erc, var(--nc)) / var(--tw-text-opacity));\n}\r\n.btn-error:hover,\n    .btn-error.btn-active {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--er) / var(--tw-border-opacity));\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--er) / var(--tw-bg-opacity));\n}\r\n.btn-error:focus-visible {\n  outline: 2px solid hsl(var(--er));\n}\r\n.btn.glass:hover,\n    .btn.glass.btn-active {\n  --glass-opacity: 25%;\n  --glass-border-opacity: 15%;\n}\r\n.btn.glass:focus-visible {\n  outline: 2px solid currentColor;\n}\r\n.btn-ghost {\n  border-width: 1px;\n  border-color: transparent;\n  background-color: transparent;\n  color: currentColor;\n}\r\n.btn-ghost:hover,\n    .btn-ghost.btn-active {\n  --tw-border-opacity: 0;\n  background-color: hsl(var(--bc) / var(--tw-bg-opacity));\n  --tw-bg-opacity: 0.2;\n}\r\n.btn-ghost:focus-visible {\n  outline: 2px solid currentColor;\n}\r\n.btn-outline {\n  border-color: currentColor;\n  background-color: transparent;\n  --tw-text-opacity: 1;\n  color: hsl(var(--bc) / var(--tw-text-opacity));\n}\r\n.btn-outline:hover,\n    .btn-outline.btn-active {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--bc) / var(--tw-border-opacity));\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--bc) / var(--tw-bg-opacity));\n  --tw-text-opacity: 1;\n  color: hsl(var(--b1) / var(--tw-text-opacity));\n}\r\n.btn-outline.btn-primary {\n  --tw-text-opacity: 1;\n  color: hsl(var(--p) / var(--tw-text-opacity));\n}\r\n.btn-outline.btn-primary:hover,\n      .btn-outline.btn-primary.btn-active {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--pf, var(--p)) / var(--tw-border-opacity));\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--pf, var(--p)) / var(--tw-bg-opacity));\n  --tw-text-opacity: 1;\n  color: hsl(var(--pc) / var(--tw-text-opacity));\n}\r\n.btn-outline.btn-secondary {\n  --tw-text-opacity: 1;\n  color: hsl(var(--s) / var(--tw-text-opacity));\n}\r\n.btn-outline.btn-secondary:hover,\n      .btn-outline.btn-secondary.btn-active {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--sf, var(--s)) / var(--tw-border-opacity));\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--sf, var(--s)) / var(--tw-bg-opacity));\n  --tw-text-opacity: 1;\n  color: hsl(var(--sc) / var(--tw-text-opacity));\n}\r\n.btn-outline.btn-accent {\n  --tw-text-opacity: 1;\n  color: hsl(var(--a) / var(--tw-text-opacity));\n}\r\n.btn-outline.btn-accent:hover,\n      .btn-outline.btn-accent.btn-active {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--af, var(--a)) / var(--tw-border-opacity));\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--af, var(--a)) / var(--tw-bg-opacity));\n  --tw-text-opacity: 1;\n  color: hsl(var(--ac) / var(--tw-text-opacity));\n}\r\n.btn-outline.btn-success {\n  --tw-text-opacity: 1;\n  color: hsl(var(--su) / var(--tw-text-opacity));\n}\r\n.btn-outline.btn-success:hover,\n      .btn-outline.btn-success.btn-active {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--su) / var(--tw-border-opacity));\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--su) / var(--tw-bg-opacity));\n  --tw-text-opacity: 1;\n  color: hsl(var(--suc, var(--nc)) / var(--tw-text-opacity));\n}\r\n.btn-outline.btn-info {\n  --tw-text-opacity: 1;\n  color: hsl(var(--in) / var(--tw-text-opacity));\n}\r\n.btn-outline.btn-info:hover,\n      .btn-outline.btn-info.btn-active {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--in) / var(--tw-border-opacity));\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--in) / var(--tw-bg-opacity));\n  --tw-text-opacity: 1;\n  color: hsl(var(--inc, var(--nc)) / var(--tw-text-opacity));\n}\r\n.btn-outline.btn-warning {\n  --tw-text-opacity: 1;\n  color: hsl(var(--wa) / var(--tw-text-opacity));\n}\r\n.btn-outline.btn-warning:hover,\n      .btn-outline.btn-warning.btn-active {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--wa) / var(--tw-border-opacity));\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--wa) / var(--tw-bg-opacity));\n  --tw-text-opacity: 1;\n  color: hsl(var(--wac, var(--nc)) / var(--tw-text-opacity));\n}\r\n.btn-outline.btn-error {\n  --tw-text-opacity: 1;\n  color: hsl(var(--er) / var(--tw-text-opacity));\n}\r\n.btn-outline.btn-error:hover,\n      .btn-outline.btn-error.btn-active {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--er) / var(--tw-border-opacity));\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--er) / var(--tw-bg-opacity));\n  --tw-text-opacity: 1;\n  color: hsl(var(--erc, var(--nc)) / var(--tw-text-opacity));\n}\r\n.btn-disabled,\n  .btn-disabled:hover,\n  .btn[disabled],\n  .btn[disabled]:hover {\n  --tw-border-opacity: 0;\n  background-color: hsl(var(--n) / var(--tw-bg-opacity));\n  --tw-bg-opacity: 0.2;\n  color: hsl(var(--bc) / var(--tw-text-opacity));\n  --tw-text-opacity: 0.2;\n}\r\n.btn.loading.btn-square:before,\n    .btn.loading.btn-circle:before {\n  margin-right: 0px;\n}\r\n.btn.loading.btn-xl:before,\n    .btn.loading.btn-lg:before {\n  height: 1.25rem;\n  width: 1.25rem;\n}\r\n.btn.loading.btn-sm:before,\n    .btn.loading.btn-xs:before {\n  height: 0.75rem;\n  width: 0.75rem;\n}\r\n.btn-group > input[type=\"radio\"]:checked.btn,\n  .btn-group > .btn-active {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--p) / var(--tw-border-opacity));\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--p) / var(--tw-bg-opacity));\n  --tw-text-opacity: 1;\n  color: hsl(var(--pc) / var(--tw-text-opacity));\n}\r\n.btn-group > input[type=\"radio\"]:checked.btn:focus-visible, .btn-group > .btn-active:focus-visible {\n  outline: 2px solid hsl(var(--p));\n}\r\n@keyframes button-pop {\n\n  0% {\n    transform: scale(var(--btn-focus-scale, 0.95));\n  }\n\n  40% {\n    transform: scale(1.02);\n  }\n\n  100% {\n    transform: scale(1);\n  }\n}\r\n.checkbox:focus-visible {\n  outline: 2px solid hsl(var(--bc));\n  outline-offset: 2px;\n}\r\n.checkbox:checked,\n  .checkbox[checked=\"true\"],\n  .checkbox[aria-checked=\"true\"] {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--bc) / var(--tw-bg-opacity));\n  background-repeat: no-repeat;\n  animation: checkmark var(--animation-input, 0.2s) ease-in-out;\n  background-image: linear-gradient(-45deg, transparent 65%, hsl(var(--chkbg)) 65.99%), linear-gradient(45deg, transparent 75%, hsl(var(--chkbg)) 75.99%), linear-gradient(-45deg, hsl(var(--chkbg)) 40%, transparent 40.99%), linear-gradient(45deg, hsl(var(--chkbg)) 30%, hsl(var(--chkfg)) 30.99%, hsl(var(--chkfg)) 40%, transparent 40.99%), linear-gradient(-45deg, hsl(var(--chkfg)) 50%, hsl(var(--chkbg)) 50.99%);\n}\r\n.checkbox:indeterminate {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--bc) / var(--tw-bg-opacity));\n  background-repeat: no-repeat;\n  animation: checkmark var(--animation-input, 0.2s) ease-in-out;\n  background-image: linear-gradient(90deg, transparent 80%, hsl(var(--chkbg)) 80%), linear-gradient(-90deg, transparent 80%, hsl(var(--chkbg)) 80%), linear-gradient(0deg, hsl(var(--chkbg)) 43%, hsl(var(--chkfg)) 43%, hsl(var(--chkfg)) 57%, hsl(var(--chkbg)) 57%);\n}\r\n.checkbox:disabled {\n  cursor: not-allowed;\n  border-color: transparent;\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--bc) / var(--tw-bg-opacity));\n  opacity: 0.2;\n}\r\n@keyframes checkmark {\n\n  0% {\n    background-position-y: 5px;\n  }\n\n  50% {\n    background-position-y: -2px;\n  }\n\n  100% {\n    background-position-y: 0;\n  }\n}\r\n[dir=\"rtl\"] .checkbox:checked,\n    [dir=\"rtl\"] .checkbox[checked=\"true\"],\n    [dir=\"rtl\"] .checkbox[aria-checked=\"true\"] {\n  background-image: linear-gradient(45deg, transparent 65%, hsl(var(--chkbg)) 65.99%), linear-gradient(-45deg, transparent 75%, hsl(var(--chkbg)) 75.99%), linear-gradient(45deg, hsl(var(--chkbg)) 40%, transparent 40.99%), linear-gradient(-45deg, hsl(var(--chkbg)) 30%, hsl(var(--chkfg)) 30.99%, hsl(var(--chkfg)) 40%, transparent 40.99%), linear-gradient(45deg, hsl(var(--chkfg)) 50%, hsl(var(--chkbg)) 50.99%);\n}\r\n.collapse:focus-visible {\n  outline: 2px solid hsl(var(--nf));\n  outline-offset: 2px;\n}\r\n.collapse-arrow .collapse-title:after {\n  position: absolute;\n  display: block;\n  height: 0.5rem;\n  width: 0.5rem;\n  --tw-translate-y: -100%;\n  --tw-rotate: 45deg;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  transition-property: all;\n  transition-duration: 150ms;\n  transition-duration: 0.2s;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  top: 50%;\n  right: 1.4rem;\n  content: \"\";\n  transform-origin: 75% 75%;\n  box-shadow: 2px 2px;\n  pointer-events: none;\n}\r\n.collapse-plus .collapse-title:after {\n  position: absolute;\n  display: block;\n  height: 0.5rem;\n  width: 0.5rem;\n  transition-property: all;\n  transition-duration: 300ms;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  top: 0.9rem;\n  right: 1.4rem;\n  content: \"+\";\n  pointer-events: none;\n}\r\n.collapse:not(.collapse-open):not(.collapse-close) input[type=\"checkbox\"],\n.collapse:not(.collapse-open):not(.collapse-close) .collapse-title {\n  cursor: pointer;\n}\r\n.collapse:focus:not(.collapse-open):not(.collapse-close) .collapse-title {\n  cursor: unset;\n}\r\n.collapse-title {\n  position: relative;\n}\r\n:where(.collapse > input[type=\"checkbox\"]) {\n  z-index: 1;\n}\r\n.collapse-title,\n:where(.collapse > input[type=\"checkbox\"]) {\n  width: 100%;\n  padding: 1rem;\n  padding-right: 3rem;\n  min-height: 3.75rem;\n  transition: background-color 0.2s ease-in-out;\n}\r\n.collapse-open :where(.collapse-content),\n.collapse:focus:not(.collapse-close) :where(.collapse-content),\n.collapse:not(.collapse-close) :where(input[type=\"checkbox\"]:checked ~ .collapse-content) {\n  padding-bottom: 1rem;\n  transition: padding 0.2s ease-in-out, background-color 0.2s ease-in-out;\n}\r\n.collapse-open.collapse-arrow .collapse-title:after,\n.collapse-arrow:focus:not(.collapse-close) .collapse-title:after,\n.collapse-arrow:not(.collapse-close) input[type=\"checkbox\"]:checked ~ .collapse-title:after {\n  --tw-translate-y: -50%;\n  --tw-rotate: 225deg;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\r\n.collapse-open.collapse-plus .collapse-title:after,\n.collapse-plus:focus:not(.collapse-close) .collapse-title:after,\n.collapse-plus:not(.collapse-close) input[type=\"checkbox\"]:checked ~ .collapse-title:after {\n  content: \"−\";\n}\r\n.drawer-toggle:focus-visible ~ .drawer-content .drawer-button.btn-success {\n  outline: 2px solid hsl(var(--su));\n}\r\n.drawer-toggle:focus-visible ~ .drawer-content .drawer-button.btn-error {\n  outline: 2px solid hsl(var(--er));\n}\r\n.drawer-toggle:focus-visible ~ .drawer-content .drawer-button.btn-ghost {\n  outline: 2px solid currentColor;\n}\r\n.input[list]::-webkit-calendar-picker-indicator {\n  line-height: 1em;\n}\r\n.input-bordered {\n  --tw-border-opacity: 0.2;\n}\r\n.input:focus {\n  outline: 2px solid hsla(var(--bc) / 0.2);\n  outline-offset: 2px;\n}\r\n.input-disabled,\n  .input[disabled] {\n  cursor: not-allowed;\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--b2, var(--b1)) / var(--tw-border-opacity));\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--b2, var(--b1)) / var(--tw-bg-opacity));\n  --tw-text-opacity: 0.2;\n}\r\n.input-disabled::-moz-placeholder, .input[disabled]::-moz-placeholder {\n  color: hsl(var(--bc) / var(--tw-placeholder-opacity));\n  --tw-placeholder-opacity: 0.2;\n}\r\n.input-disabled::placeholder,\n  .input[disabled]::placeholder {\n  color: hsl(var(--bc) / var(--tw-placeholder-opacity));\n  --tw-placeholder-opacity: 0.2;\n}\r\n.menu li.disabled > * {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  color: hsl(var(--bc) / var(--tw-text-opacity));\n  --tw-text-opacity: 0.2;\n}\r\n.menu li.disabled > *:hover {\n  background-color: transparent;\n}\r\n.mockup-phone .display {\n  overflow: hidden;\n  border-radius: 40px;\n  margin-top: -25px;\n}\r\n@keyframes progress-loading {\n\n  50% {\n    left: 107%;\n  }\n}\r\n@keyframes radiomark {\n\n  0% {\n    box-shadow: 0 0 0 12px hsl(var(--b1)) inset, 0 0 0 12px hsl(var(--b1)) inset;\n  }\n\n  50% {\n    box-shadow: 0 0 0 3px hsl(var(--b1)) inset, 0 0 0 3px hsl(var(--b1)) inset;\n  }\n\n  100% {\n    box-shadow: 0 0 0 4px hsl(var(--b1)) inset, 0 0 0 4px hsl(var(--b1)) inset;\n  }\n}\r\n@keyframes rating-pop {\n\n  0% {\n    transform: translateY(-0.125em);\n  }\n\n  40% {\n    transform: translateY(-0.125em);\n  }\n\n  100% {\n    transform: translateY(0);\n  }\n}\r\n.select:focus {\n  outline: 2px solid hsla(var(--bc) / 0.2);\n  outline-offset: 2px;\n}\r\n.select-disabled,\n  .select[disabled] {\n  cursor: not-allowed;\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--b2, var(--b1)) / var(--tw-border-opacity));\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--b2, var(--b1)) / var(--tw-bg-opacity));\n  --tw-text-opacity: 0.2;\n}\r\n.select-disabled::-moz-placeholder, .select[disabled]::-moz-placeholder {\n  color: hsl(var(--bc) / var(--tw-placeholder-opacity));\n  --tw-placeholder-opacity: 0.2;\n}\r\n.select-disabled::placeholder,\n  .select[disabled]::placeholder {\n  color: hsl(var(--bc) / var(--tw-placeholder-opacity));\n  --tw-placeholder-opacity: 0.2;\n}\r\n.select-multiple,\n  .select[multiple],\n  .select[size].select:not([size=\"1\"]) {\n  background-image: none;\n  padding-right: 1rem;\n}\r\n.table :where(th, td) {\n  white-space: nowrap;\n  padding: 1rem;\n  vertical-align: middle;\n}\r\n.table tr.active th,\n    .table tr.active td,\n    .table tr.active:nth-child(even) th,\n    .table tr.active:nth-child(even) td {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--b3, var(--b2)) / var(--tw-bg-opacity));\n}\r\n.table tr.hover:hover th,\n    .table tr.hover:hover td,\n    .table tr.hover:nth-child(even):hover th,\n    .table tr.hover:nth-child(even):hover td {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--b3, var(--b2)) / var(--tw-bg-opacity));\n}\r\n.table:where(:not(.table-zebra)) :where(thead, tbody, tfoot) :where(tr:not(:last-child) :where(th, td)) {\n  border-bottom-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--b2, var(--b1)) / var(--tw-border-opacity));\n}\r\n.table :where(thead, tfoot) :where(th, td) {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--b2, var(--b1)) / var(--tw-bg-opacity));\n  font-size: 0.75rem;\n  line-height: 1rem;\n  font-weight: 700;\n  text-transform: uppercase;\n}\r\n.table :where(tbody th, tbody td) {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--b1) / var(--tw-bg-opacity));\n}\r\n:where(.table *:first-child) :where(*:first-child) :where(th, td):first-child {\n  border-top-left-radius: 0.5rem;\n}\r\n:where(.table *:first-child) :where(*:first-child) :where(th, td):last-child {\n  border-top-right-radius: 0.5rem;\n}\r\n:where(.table *:last-child) :where(*:last-child) :where(th, td):first-child {\n  border-bottom-left-radius: 0.5rem;\n}\r\n:where(.table *:last-child) :where(*:last-child) :where(th, td):last-child {\n  border-bottom-right-radius: 0.5rem;\n}\r\n@keyframes toast-pop {\n\n  0% {\n    transform: scale(0.9);\n    opacity: 0;\n  }\n\n  100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\r\n.rounded-box {\n  border-radius: var(--rounded-box, 1rem);\n}\r\n.btn-xs {\n  height: 1.5rem;\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n  min-height: 1.5rem;\n  font-size: 0.75rem;\n}\r\n.btn-sm {\n  height: 2rem;\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n  min-height: 2rem;\n  font-size: 0.875rem;\n}\r\n.btn-square:where(.btn-xs) {\n  height: 1.5rem;\n  width: 1.5rem;\n  padding: 0px;\n}\r\n.btn-square:where(.btn-sm) {\n  height: 2rem;\n  width: 2rem;\n  padding: 0px;\n}\r\n.btn-square:where(.btn-md) {\n  height: 3rem;\n  width: 3rem;\n  padding: 0px;\n}\r\n.btn-square:where(.btn-lg) {\n  height: 4rem;\n  width: 4rem;\n  padding: 0px;\n}\r\n.btn-circle:where(.btn-xs) {\n  height: 1.5rem;\n  width: 1.5rem;\n  border-radius: 9999px;\n  padding: 0px;\n}\r\n.btn-circle:where(.btn-sm) {\n  height: 2rem;\n  width: 2rem;\n  border-radius: 9999px;\n  padding: 0px;\n}\r\n.input-xs {\n  height: 1.5rem;\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n  font-size: 0.75rem;\n  line-height: 1rem;\n  line-height: 1.625;\n}\r\n.input-sm {\n  height: 2rem;\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n  font-size: 0.875rem;\n  line-height: 2rem;\n}\r\n.select-xs {\n  height: 1.5rem;\n  padding-left: 0.5rem;\n  padding-right: 2rem;\n  font-size: 0.75rem;\n  line-height: 1rem;\n  line-height: 1.625;\n  min-height: 1.5rem;\n}\r\n[dir=\"rtl\"] .select-xs {\n  padding-right: 0.5rem;\n  padding-left: 2rem;\n}\r\n.btn-group .btn:not(:first-child):not(:last-child), .btn-group.btn-group-horizontal .btn:not(:first-child):not(:last-child) {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\r\n.btn-group .btn:first-child:not(:last-child), .btn-group.btn-group-horizontal .btn:first-child:not(:last-child) {\n  margin-left: -1px;\n  margin-top: -0px;\n  border-top-left-radius: var(--rounded-btn, 0.5rem);\n  border-top-right-radius: 0;\n  border-bottom-left-radius: var(--rounded-btn, 0.5rem);\n  border-bottom-right-radius: 0;\n}\r\n.btn-group .btn:last-child:not(:first-child), .btn-group.btn-group-horizontal .btn:last-child:not(:first-child) {\n  border-top-left-radius: 0;\n  border-top-right-radius: var(--rounded-btn, 0.5rem);\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: var(--rounded-btn, 0.5rem);\n}\r\n.btn-group.btn-group-vertical .btn:first-child:not(:last-child) {\n  margin-left: -0px;\n  margin-top: -1px;\n  border-top-left-radius: var(--rounded-btn, 0.5rem);\n  border-top-right-radius: var(--rounded-btn, 0.5rem);\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\r\n.btn-group.btn-group-vertical .btn:last-child:not(:first-child) {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  border-bottom-left-radius: var(--rounded-btn, 0.5rem);\n  border-bottom-right-radius: var(--rounded-btn, 0.5rem);\n}\r\n.collapse {\n  visibility: collapse;\n}\r\n.ml-1 {\n  margin-left: 0.25rem;\n}\r\n.mt-1 {\n  margin-top: 0.25rem;\n}\r\n.flex {\n  display: flex;\n}\r\n.table {\n  display: table;\n}\r\n.grid {\n  display: grid;\n}\r\n.h-full {\n  height: 100%;\n}\r\n.w-full {\n  width: 100%;\n}\r\n.max-w-xs {\n  max-width: 20rem;\n}\r\n.flex-grow {\n  flex-grow: 1;\n}\r\n.place-content-center {\n  place-content: center;\n}\r\n.border {\n  border-width: 1px;\n}\r\n.border-base-300 {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--b3, var(--b2)) / var(--tw-border-opacity));\n}\r\n.bg-red-500 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(239 68 68 / var(--tw-bg-opacity));\n}\r\n.bg-green-500 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(34 197 94 / var(--tw-bg-opacity));\n}\r\n.bg-base-100 {\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--b1) / var(--tw-bg-opacity));\n}\r\n.p-2 {\n  padding: 0.5rem;\n}\r\n.px-4 {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\r\n.py-1 {\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n}\r\n.text-center {\n  text-align: center;\n}\r\n.text-xl {\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n}\r\n.font-medium {\n  font-weight: 500;\n}\r\n.text-white {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}\r\n.filter {\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\r\n\r\n:root,\r\nbody {\r\n\tmargin: 0;\r\n}";
styleInject(css_248z);

const user = store.writable({});
const authorized = store.writable(false);

const mfcList = store.writable([]);
let $mfcList;
mfcList.subscribe(value => {
	$mfcList = value;
});
const urmList = store.writable([]);
let $urmList;
urmList.subscribe(value => {
	$urmList = value;
});

const offices = store.derived([mfcList, urmList], () => [...$mfcList, ...$urmList]);

const localOffices = JSON.parse(localStorage.getItem('my-offices') || '[]');
const myOffices = store.writable(localOffices);
let $myOffices;
myOffices.subscribe(value => {
	localStorage.setItem('my-offices', JSON.stringify(value));
	$myOffices = value;
});
const addOffice = (id) => {
	myOffices.set([...$myOffices, id]);
};
const removeOffice = (id) => {
	myOffices.set($myOffices.filter(office => office.id !== id));
};

let $user;
user.subscribe(value => {
	$user = value;
});

const checkAuth = () => {
	fetch("https://моидокументы.рф/mfc/ws/auth/current", {
		credentials: "same-origin",
	})
		.then((response) => {
			response.json().then(function (data) {
				user.update(() => data);
				authorized.update(() => true);
			});
		})
		.catch((error) => {
			authorized.update(() => false);
			throw new Error(error);
		});
};

const logout = () => {
	fetch("https://моидокументы.рф/mfc/ws/auth/logout", {
		credentials: "same-origin"
	})
		.then(response => {
			if (!response.ok) {
				throw new Error("Network response was not ok");
			}
			response.json().then(function (data) {
				authorized.update(() => false);
				user.update(() => { });
			});
		})
		.catch(error => {
			throw new Error(error);
		});
};

const fetchOffices = () => {
	for (const type of ['mfc', 'urm']) {
		fetch(
			encodeURI(
				`https://моидокументы.рф/mfc/ws/dictionary/unicombo/?collection=amm_sys_${type}_card_form&fields=["_id","common_data.address","common_data.full_name","common_data.status","common_data.profile","common_data.wnd_count","common_data.start_date","common_data.finish_date"]&additionalFilter={"common_data.rf_subject":${$user.rfSubjectRoleIds[0]},"common_data.status":"\u0434\u0435\u0439\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0439","$or":[{"common_data.hidden":{"$exists":false}},{"common_data.hidden":{"$in":[0,false]}}]}&sort={"common_data.address":1}&page=1&start=0`
			),
			{
				credentials: "same-origin",
			}
		).then((response) => {
			if (!response.ok) {
				throw new Error("Network response was not ok");
			}
			response.json().then(function (data) {
				let list = data.items.map(office => {
					return {
						id: office._id,
						type: type,
						...office.common_data
					}
				});
				if (type === 'mfc') {
					mfcList.update(() => list);
				} else if (type === 'urm') {
					urmList.update(() => list);
				}
			});
		});
	}
};

const fetchData = async (url) => {
	return new Promise((resolve, reject) => {
		fetch(url, {
			credentials: "same-origin",
			headers: {
				"Content-type":
					"application/x-www-form-urlencoded; charset=UTF-8"
			}
		})
			.then(response => {
				if (!response.ok) {
					throw new Error("Network response was not ok");
				}
				response.json().then(function(data) {
					resolve(data);
				});
			})
			.catch(error => {
				reject(error);
			});
	})
};

/* content-src\my-documents-mfc-plus\components\Header.svelte generated by Svelte v3.53.1 */

function add_css$1(target) {
	internal.append_styles(target, "svelte-1k7uld5", "header.svelte-1k7uld5{height:48px;width:100%;background-color:#16f;color:#fff;box-shadow:0 1px 0;display:flex;align-items:center;padding:0 8px}.toolbar.svelte-1k7uld5{margin-right:auto}");
}

// (10:2) {#if $authorized}
function create_if_block_1(ctx) {
	let a;

	return {
		c() {
			a = internal.element("a");
			a.textContent = "Шаблоны";
			internal.attr(a, "href", "#templates");
			internal.attr(a, "class", "btn btn-sm btn-ghost");
		},
		m(target, anchor) {
			internal.insert(target, a, anchor);
		},
		d(detaching) {
			if (detaching) internal.detach(a);
		}
	};
}

// (21:1) {:else}
function create_else_block(ctx) {
	let button;
	let mounted;
	let dispose;

	return {
		c() {
			button = internal.element("button");
			button.textContent = "Войти через ЕСИА";
			internal.attr(button, "class", "btn btn-sm btn-ghost");
		},
		m(target, anchor) {
			internal.insert(target, button, anchor);

			if (!mounted) {
				dispose = internal.listen(button, "click", /*click_handler_1*/ ctx[3]);
				mounted = true;
			}
		},
		p: internal.noop,
		d(detaching) {
			if (detaching) internal.detach(button);
			mounted = false;
			dispose();
		}
	};
}

// (14:1) {#if $authorized}
function create_if_block$3(ctx) {
	let a0;
	let t0_value = /*$user*/ ctx[1].fio + "";
	let t0;
	let t1;
	let a1;

	return {
		c() {
			a0 = internal.element("a");
			t0 = internal.text(t0_value);
			t1 = internal.space();
			a1 = internal.element("a");
			a1.innerHTML = `<svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="currentColor" d="M3,17V19H9V17H3M3,5V7H13V5H3M13,21V19H21V17H13V15H11V21H13M7,9V11H3V13H7V15H9V9H7M21,13V11H11V13H21M15,9H17V7H21V5H17V3H15V9Z"></path></svg>`;
			internal.attr(a0, "href", "#user");
			internal.attr(a0, "class", "btn btn-sm btn-ghost");
			internal.attr(a1, "href", "#settings");
			internal.attr(a1, "class", "ml-1 btn btn-ghost btn-sm btn-square");
		},
		m(target, anchor) {
			internal.insert(target, a0, anchor);
			internal.append(a0, t0);
			internal.insert(target, t1, anchor);
			internal.insert(target, a1, anchor);
		},
		p(ctx, dirty) {
			if (dirty & /*$user*/ 2 && t0_value !== (t0_value = /*$user*/ ctx[1].fio + "")) internal.set_data(t0, t0_value);
		},
		d(detaching) {
			if (detaching) internal.detach(a0);
			if (detaching) internal.detach(t1);
			if (detaching) internal.detach(a1);
		}
	};
}

function create_fragment$8(ctx) {
	let header;
	let ul;
	let a;
	let t1;
	let t2;
	let mounted;
	let dispose;
	let if_block0 = /*$authorized*/ ctx[0] && create_if_block_1();

	function select_block_type(ctx, dirty) {
		if (/*$authorized*/ ctx[0]) return create_if_block$3;
		return create_else_block;
	}

	let current_block_type = select_block_type(ctx);
	let if_block1 = current_block_type(ctx);

	return {
		c() {
			header = internal.element("header");
			ul = internal.element("ul");
			a = internal.element("a");
			a.textContent = "МРС МФЦ+";
			t1 = internal.space();
			if (if_block0) if_block0.c();
			t2 = internal.space();
			if_block1.c();
			internal.attr(a, "href", "/mfc-plus");
			internal.attr(a, "class", "btn btn-sm btn-ghost");
			internal.attr(ul, "class", "toolbar svelte-1k7uld5");
			internal.attr(header, "class", "svelte-1k7uld5");
		},
		m(target, anchor) {
			internal.insert(target, header, anchor);
			internal.append(header, ul);
			internal.append(ul, a);
			internal.append(ul, t1);
			if (if_block0) if_block0.m(ul, null);
			internal.append(header, t2);
			if_block1.m(header, null);

			if (!mounted) {
				dispose = internal.listen(a, "click", internal.prevent_default(/*click_handler*/ ctx[2]));
				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (/*$authorized*/ ctx[0]) {
				if (if_block0) ; else {
					if_block0 = create_if_block_1();
					if_block0.c();
					if_block0.m(ul, null);
				}
			} else if (if_block0) {
				if_block0.d(1);
				if_block0 = null;
			}

			if (current_block_type === (current_block_type = select_block_type(ctx)) && if_block1) {
				if_block1.p(ctx, dirty);
			} else {
				if_block1.d(1);
				if_block1 = current_block_type(ctx);

				if (if_block1) {
					if_block1.c();
					if_block1.m(header, null);
				}
			}
		},
		i: internal.noop,
		o: internal.noop,
		d(detaching) {
			if (detaching) internal.detach(header);
			if (if_block0) if_block0.d();
			if_block1.d();
			mounted = false;
			dispose();
		}
	};
}

function instance$8($$self, $$props, $$invalidate) {
	let $authorized;
	let $user;
	internal.component_subscribe($$self, authorized, $$value => $$invalidate(0, $authorized = $$value));
	internal.component_subscribe($$self, user, $$value => $$invalidate(1, $user = $$value));

	const click_handler = () => {
		location.hash = '';
	};

	const click_handler_1 = () => {
		window.open('https://xn--d1achjhdicc8bh4h.xn--p1ai/mfc/esia/Login', '_blank', 'popup');
	};

	return [$authorized, $user, click_handler, click_handler_1];
}

class Header extends internal.SvelteComponent {
	constructor(options) {
		super();
		internal.init(this, options, instance$8, create_fragment$8, internal.safe_not_equal, {}, add_css$1);
	}
}

/* content-src\my-documents-mfc-plus\components\Home.svelte generated by Svelte v3.53.1 */

class Home extends internal.SvelteComponent {
	constructor(options) {
		super();
		internal.init(this, options, null, null, internal.safe_not_equal, {});
	}
}

/* content-src\my-documents-mfc-plus\components\TemplateButton.svelte generated by Svelte v3.53.1 */

function create_fragment$7(ctx) {
	let button;
	let t_value = /*templates*/ ctx[2][/*type*/ ctx[0]].letter + "";
	let t;
	let button_title_value;

	return {
		c() {
			button = internal.element("button");
			t = internal.text(t_value);
			internal.attr(button, "class", "btn btn-xs btn-outline");
			internal.attr(button, "title", button_title_value = /*templates*/ ctx[2][/*type*/ ctx[0]].title);
			internal.toggle_class(button, "btn-error", /*errors*/ ctx[1]);
			internal.toggle_class(button, "btn-success", /*errors*/ ctx[1] === 0);
		},
		m(target, anchor) {
			internal.insert(target, button, anchor);
			internal.append(button, t);
		},
		p(ctx, [dirty]) {
			if (dirty & /*type*/ 1 && t_value !== (t_value = /*templates*/ ctx[2][/*type*/ ctx[0]].letter + "")) internal.set_data(t, t_value);

			if (dirty & /*type*/ 1 && button_title_value !== (button_title_value = /*templates*/ ctx[2][/*type*/ ctx[0]].title)) {
				internal.attr(button, "title", button_title_value);
			}

			if (dirty & /*errors*/ 2) {
				internal.toggle_class(button, "btn-error", /*errors*/ ctx[1]);
			}

			if (dirty & /*errors*/ 2) {
				internal.toggle_class(button, "btn-success", /*errors*/ ctx[1] === 0);
			}
		},
		i: internal.noop,
		o: internal.noop,
		d(detaching) {
			if (detaching) internal.detach(button);
		}
	};
}

function instance$7($$self, $$props, $$invalidate) {
	let errors;
	let $user;
	internal.component_subscribe($$self, user, $$value => $$invalidate(7, $user = $$value));
	let { year, month, type, office } = $$props;

	let templates = {
		federal: { title: "Федеральные услуги", letter: 'Ф' },
		regional: {
			title: "Региональные услуги",
			letter: 'Р'
		},
		municipal: {
			title: "Муниципальные услуги",
			letter: 'М'
		},
		otherServices: {
			title: "Услуги иных организаций",
			letter: 'И'
		},
		windowsAndEmployee: { title: "Окна и сотрудники", letter: 'О' }
	};

	let uploads;

	async function fetchUploads() {
		$$invalidate(6, uploads = await fetchData(`https://моидокументы.рф/mfc/ws/quarterDataExcel/getTemplatesList?rf_subject=${$user.rfSubjectRoleIds[0]}&year=${year}&month=${month}&formType=${type}&importType=mou&mouType=${office.type}&mouId=${office.id}`));
		console.log('uploads ', uploads);
	}

	svelte.onMount(() => {
		
	});

	$$self.$$set = $$props => {
		if ('year' in $$props) $$invalidate(3, year = $$props.year);
		if ('month' in $$props) $$invalidate(4, month = $$props.month);
		if ('type' in $$props) $$invalidate(0, type = $$props.type);
		if ('office' in $$props) $$invalidate(5, office = $$props.office);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*uploads*/ 64) {
			$$invalidate(1, errors = uploads?.items[0]?.uploadFile?.countErrors);
		}

		if ($$self.$$.dirty & /*errors*/ 2) {
			console.log('errors ', errors);
		}

		if ($$self.$$.dirty & /*year, month, type, office*/ 57) {
			fetchUploads();
		}
	};

	return [type, errors, templates, year, month, office, uploads];
}

class TemplateButton extends internal.SvelteComponent {
	constructor(options) {
		super();
		internal.init(this, options, instance$7, create_fragment$7, internal.safe_not_equal, { year: 3, month: 4, type: 0, office: 5 });
	}
}

/* content-src\my-documents-mfc-plus\components\Templates.svelte generated by Svelte v3.53.1 */

function get_each_context$3(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[6] = list[i];
	return child_ctx;
}

function get_each_context_1(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[9] = list[i];
	return child_ctx;
}

function get_each_context_2(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[12] = list[i];
	child_ctx[14] = i;
	return child_ctx;
}

// (32:1) {#each months as monthName, monthNumber}
function create_each_block_2(ctx) {
	let option;
	let t_value = /*monthName*/ ctx[12] + "";
	let t;

	return {
		c() {
			option = internal.element("option");
			t = internal.text(t_value);
			option.__value = /*monthNumber*/ ctx[14] + 1;
			option.value = option.__value;
		},
		m(target, anchor) {
			internal.insert(target, option, anchor);
			internal.append(option, t);
		},
		p: internal.noop,
		d(detaching) {
			if (detaching) internal.detach(option);
		}
	};
}

// (36:0) {#if $myOffices.length > 0}
function create_if_block$2(ctx) {
	let table;
	let tr;
	let t3;
	let current;
	let each_value = /*$myOffices*/ ctx[2];
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block$3(get_each_context$3(ctx, each_value, i));
	}

	const out = i => internal.transition_out(each_blocks[i], 1, 1, () => {
		each_blocks[i] = null;
	});

	return {
		c() {
			table = internal.element("table");
			tr = internal.element("tr");

			tr.innerHTML = `<th>Офис</th> 
			<th>Шаблоны</th>`;

			t3 = internal.space();

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			internal.attr(table, "class", "");
		},
		m(target, anchor) {
			internal.insert(target, table, anchor);
			internal.append(table, tr);
			internal.append(table, t3);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(table, null);
			}

			current = true;
		},
		p(ctx, dirty) {
			if (dirty & /*$myOffices, year, month*/ 7) {
				each_value = /*$myOffices*/ ctx[2];
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context$3(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
						internal.transition_in(each_blocks[i], 1);
					} else {
						each_blocks[i] = create_each_block$3(child_ctx);
						each_blocks[i].c();
						internal.transition_in(each_blocks[i], 1);
						each_blocks[i].m(table, null);
					}
				}

				internal.group_outros();

				for (i = each_value.length; i < each_blocks.length; i += 1) {
					out(i);
				}

				internal.check_outros();
			}
		},
		i(local) {
			if (current) return;

			for (let i = 0; i < each_value.length; i += 1) {
				internal.transition_in(each_blocks[i]);
			}

			current = true;
		},
		o(local) {
			each_blocks = each_blocks.filter(Boolean);

			for (let i = 0; i < each_blocks.length; i += 1) {
				internal.transition_out(each_blocks[i]);
			}

			current = false;
		},
		d(detaching) {
			if (detaching) internal.detach(table);
			internal.destroy_each(each_blocks, detaching);
		}
	};
}

// (46:5) {#each office.type === "mfc" ? ["federal", "municipal", "regional", "otherServices", "windowsAndEmployee"] : ["federal", "otherServices", "windowsAndEmployee"] as template}
function create_each_block_1(ctx) {
	let templatebutton;
	let current;

	templatebutton = new TemplateButton({
			props: {
				year: /*year*/ ctx[1],
				month: /*month*/ ctx[0],
				office: {
					id: /*office*/ ctx[6].id,
					type: /*office*/ ctx[6].type
				},
				type: /*template*/ ctx[9]
			}
		});

	return {
		c() {
			internal.create_component(templatebutton.$$.fragment);
		},
		m(target, anchor) {
			internal.mount_component(templatebutton, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const templatebutton_changes = {};
			if (dirty & /*year*/ 2) templatebutton_changes.year = /*year*/ ctx[1];
			if (dirty & /*month*/ 1) templatebutton_changes.month = /*month*/ ctx[0];

			if (dirty & /*$myOffices*/ 4) templatebutton_changes.office = {
				id: /*office*/ ctx[6].id,
				type: /*office*/ ctx[6].type
			};

			if (dirty & /*$myOffices*/ 4) templatebutton_changes.type = /*template*/ ctx[9];
			templatebutton.$set(templatebutton_changes);
		},
		i(local) {
			if (current) return;
			internal.transition_in(templatebutton.$$.fragment, local);
			current = true;
		},
		o(local) {
			internal.transition_out(templatebutton.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			internal.destroy_component(templatebutton, detaching);
		}
	};
}

// (42:2) {#each $myOffices as office}
function create_each_block$3(ctx) {
	let tr;
	let td0;
	let t0_value = (/*office*/ ctx[6].short_name || /*office*/ ctx[6].address) + "";
	let t0;
	let t1;
	let td1;
	let t2;
	let current;

	let each_value_1 = /*office*/ ctx[6].type === "mfc"
	? ["federal", "municipal", "regional", "otherServices", "windowsAndEmployee"]
	: ["federal", "otherServices", "windowsAndEmployee"];

	let each_blocks = [];

	for (let i = 0; i < each_value_1.length; i += 1) {
		each_blocks[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
	}

	const out = i => internal.transition_out(each_blocks[i], 1, 1, () => {
		each_blocks[i] = null;
	});

	return {
		c() {
			tr = internal.element("tr");
			td0 = internal.element("td");
			t0 = internal.text(t0_value);
			t1 = internal.space();
			td1 = internal.element("td");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t2 = internal.space();
		},
		m(target, anchor) {
			internal.insert(target, tr, anchor);
			internal.append(tr, td0);
			internal.append(td0, t0);
			internal.append(tr, t1);
			internal.append(tr, td1);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(td1, null);
			}

			internal.append(tr, t2);
			current = true;
		},
		p(ctx, dirty) {
			if ((!current || dirty & /*$myOffices*/ 4) && t0_value !== (t0_value = (/*office*/ ctx[6].short_name || /*office*/ ctx[6].address) + "")) internal.set_data(t0, t0_value);

			if (dirty & /*year, month, $myOffices*/ 7) {
				each_value_1 = /*office*/ ctx[6].type === "mfc"
				? [
						"federal",
						"municipal",
						"regional",
						"otherServices",
						"windowsAndEmployee"
					]
				: ["federal", "otherServices", "windowsAndEmployee"];

				let i;

				for (i = 0; i < each_value_1.length; i += 1) {
					const child_ctx = get_each_context_1(ctx, each_value_1, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
						internal.transition_in(each_blocks[i], 1);
					} else {
						each_blocks[i] = create_each_block_1(child_ctx);
						each_blocks[i].c();
						internal.transition_in(each_blocks[i], 1);
						each_blocks[i].m(td1, null);
					}
				}

				internal.group_outros();

				for (i = each_value_1.length; i < each_blocks.length; i += 1) {
					out(i);
				}

				internal.check_outros();
			}
		},
		i(local) {
			if (current) return;

			for (let i = 0; i < each_value_1.length; i += 1) {
				internal.transition_in(each_blocks[i]);
			}

			current = true;
		},
		o(local) {
			each_blocks = each_blocks.filter(Boolean);

			for (let i = 0; i < each_blocks.length; i += 1) {
				internal.transition_out(each_blocks[i]);
			}

			current = false;
		},
		d(detaching) {
			if (detaching) internal.detach(tr);
			internal.destroy_each(each_blocks, detaching);
		}
	};
}

function create_fragment$6(ctx) {
	let input;
	let t0;
	let select;
	let option;
	let t2;
	let if_block_anchor;
	let current;
	let mounted;
	let dispose;
	let each_value_2 = /*months*/ ctx[3];
	let each_blocks = [];

	for (let i = 0; i < each_value_2.length; i += 1) {
		each_blocks[i] = create_each_block_2(get_each_context_2(ctx, each_value_2, i));
	}

	let if_block = /*$myOffices*/ ctx[2].length > 0 && create_if_block$2(ctx);

	return {
		c() {
			input = internal.element("input");
			t0 = internal.space();
			select = internal.element("select");
			option = internal.element("option");
			option.textContent = "Месяц";

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t2 = internal.space();
			if (if_block) if_block.c();
			if_block_anchor = internal.empty();
			internal.attr(input, "type", "text");
			internal.attr(input, "class", "input input-xs");
			option.disabled = true;
			option.__value = "Месяц";
			option.value = option.__value;
			internal.attr(select, "class", "select select-xs");
			if (/*month*/ ctx[0] === void 0) internal.add_render_callback(() => /*select_change_handler*/ ctx[5].call(select));
		},
		m(target, anchor) {
			internal.insert(target, input, anchor);
			internal.set_input_value(input, /*year*/ ctx[1]);
			internal.insert(target, t0, anchor);
			internal.insert(target, select, anchor);
			internal.append(select, option);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(select, null);
			}

			internal.select_option(select, /*month*/ ctx[0]);
			internal.insert(target, t2, anchor);
			if (if_block) if_block.m(target, anchor);
			internal.insert(target, if_block_anchor, anchor);
			current = true;

			if (!mounted) {
				dispose = [
					internal.listen(input, "input", /*input_input_handler*/ ctx[4]),
					internal.listen(select, "change", /*select_change_handler*/ ctx[5])
				];

				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (dirty & /*year*/ 2 && input.value !== /*year*/ ctx[1]) {
				internal.set_input_value(input, /*year*/ ctx[1]);
			}

			if (dirty & /*months*/ 8) {
				each_value_2 = /*months*/ ctx[3];
				let i;

				for (i = 0; i < each_value_2.length; i += 1) {
					const child_ctx = get_each_context_2(ctx, each_value_2, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block_2(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(select, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value_2.length;
			}

			if (dirty & /*month*/ 1) {
				internal.select_option(select, /*month*/ ctx[0]);
			}

			if (/*$myOffices*/ ctx[2].length > 0) {
				if (if_block) {
					if_block.p(ctx, dirty);

					if (dirty & /*$myOffices*/ 4) {
						internal.transition_in(if_block, 1);
					}
				} else {
					if_block = create_if_block$2(ctx);
					if_block.c();
					internal.transition_in(if_block, 1);
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				internal.group_outros();

				internal.transition_out(if_block, 1, 1, () => {
					if_block = null;
				});

				internal.check_outros();
			}
		},
		i(local) {
			if (current) return;
			internal.transition_in(if_block);
			current = true;
		},
		o(local) {
			internal.transition_out(if_block);
			current = false;
		},
		d(detaching) {
			if (detaching) internal.detach(input);
			if (detaching) internal.detach(t0);
			if (detaching) internal.detach(select);
			internal.destroy_each(each_blocks, detaching);
			if (detaching) internal.detach(t2);
			if (if_block) if_block.d(detaching);
			if (detaching) internal.detach(if_block_anchor);
			mounted = false;
			internal.run_all(dispose);
		}
	};
}

function instance$6($$self, $$props, $$invalidate) {
	let $myOffices;
	internal.component_subscribe($$self, myOffices, $$value => $$invalidate(2, $myOffices = $$value));
	let month, year;
	month = new Date().getMonth() || 12;

	if (month == 12) {
		year = new Date().getFullYear() - 1;
	} else {
		year = new Date().getFullYear();
	}

	const months = [
		"Январь",
		"Февраль",
		"Март",
		"Апрель",
		"Май",
		"Июнь",
		"Июль",
		"Август",
		"Сентябрь",
		"Октябрь",
		"Ноябрь",
		"Декабрь"
	];

	svelte.onMount(() => {
		
	});

	function input_input_handler() {
		year = this.value;
		$$invalidate(1, year);
	}

	function select_change_handler() {
		month = internal.select_value(this);
		$$invalidate(0, month);
	}

	return [month, year, $myOffices, months, input_input_handler, select_change_handler];
}

class Templates extends internal.SvelteComponent {
	constructor(options) {
		super();
		internal.init(this, options, instance$6, create_fragment$6, internal.safe_not_equal, {});
	}
}

/* content-src\my-documents-mfc-plus\components\SelectOffices.svelte generated by Svelte v3.53.1 */

function get_each_context$2(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[6] = list[i];
	return child_ctx;
}

// (9:0) {#each filteredOffices as office}
function create_each_block$2(ctx) {
	let p;
	let button;
	let t1;
	let t2_value = /*office*/ ctx[6].address + "";
	let t2;
	let t3;
	let mounted;
	let dispose;

	function click_handler() {
		return /*click_handler*/ ctx[5](/*office*/ ctx[6]);
	}

	return {
		c() {
			p = internal.element("p");
			button = internal.element("button");
			button.textContent = "+";
			t1 = internal.space();
			t2 = internal.text(t2_value);
			t3 = internal.space();
			internal.attr(button, "class", "btn btn-xs btn-square");
			internal.attr(p, "class", "");
		},
		m(target, anchor) {
			internal.insert(target, p, anchor);
			internal.append(p, button);
			internal.append(p, t1);
			internal.append(p, t2);
			internal.append(p, t3);

			if (!mounted) {
				dispose = internal.listen(button, "click", click_handler);
				mounted = true;
			}
		},
		p(new_ctx, dirty) {
			ctx = new_ctx;
			if (dirty & /*filteredOffices*/ 2 && t2_value !== (t2_value = /*office*/ ctx[6].address + "")) internal.set_data(t2, t2_value);
		},
		d(detaching) {
			if (detaching) internal.detach(p);
			mounted = false;
			dispose();
		}
	};
}

function create_fragment$5(ctx) {
	let input;
	let t;
	let each_1_anchor;
	let mounted;
	let dispose;
	let each_value = /*filteredOffices*/ ctx[1];
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block$2(get_each_context$2(ctx, each_value, i));
	}

	return {
		c() {
			input = internal.element("input");
			t = internal.space();

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			each_1_anchor = internal.empty();
			internal.attr(input, "type", "text");
			internal.attr(input, "class", "w-full max-w-xs mt-1 input-sm input input-bordered");
			internal.attr(input, "placeholder", "Поиск...");
		},
		m(target, anchor) {
			internal.insert(target, input, anchor);
			internal.set_input_value(input, /*query*/ ctx[0]);
			internal.insert(target, t, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(target, anchor);
			}

			internal.insert(target, each_1_anchor, anchor);

			if (!mounted) {
				dispose = internal.listen(input, "input", /*input_input_handler*/ ctx[4]);
				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (dirty & /*query*/ 1 && input.value !== /*query*/ ctx[0]) {
				internal.set_input_value(input, /*query*/ ctx[0]);
			}

			if (dirty & /*filteredOffices, addOffice*/ 2) {
				each_value = /*filteredOffices*/ ctx[1];
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context$2(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block$2(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}
		},
		i: internal.noop,
		o: internal.noop,
		d(detaching) {
			if (detaching) internal.detach(input);
			if (detaching) internal.detach(t);
			internal.destroy_each(each_blocks, detaching);
			if (detaching) internal.detach(each_1_anchor);
			mounted = false;
			dispose();
		}
	};
}

function instance$5($$self, $$props, $$invalidate) {
	let filteredOffices;
	let $myOffices;
	let $offices;
	internal.component_subscribe($$self, myOffices, $$value => $$invalidate(2, $myOffices = $$value));
	internal.component_subscribe($$self, offices, $$value => $$invalidate(3, $offices = $$value));
	let query = '';

	function input_input_handler() {
		query = this.value;
		$$invalidate(0, query);
	}

	const click_handler = office => {
		addOffice(office);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*$offices, query, $myOffices*/ 13) {
			$$invalidate(1, filteredOffices = $offices.filter(office => office.address.toLowerCase().includes(query.toLowerCase()) && !$myOffices.some(myOffice => office.id === myOffice.id)));
		}
	};

	return [
		query,
		filteredOffices,
		$myOffices,
		$offices,
		input_input_handler,
		click_handler
	];
}

class SelectOffices extends internal.SvelteComponent {
	constructor(options) {
		super();
		internal.init(this, options, instance$5, create_fragment$5, internal.safe_not_equal, {});
	}
}

/* content-src\my-documents-mfc-plus\components\MyOffices.svelte generated by Svelte v3.53.1 */

function get_each_context$1(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[3] = list[i];
	child_ctx[4] = list;
	child_ctx[5] = i;
	return child_ctx;
}

// (5:0) {#if $myOffices.length > 0}
function create_if_block$1(ctx) {
	let table;
	let tr;
	let t4;
	let each_value = /*$myOffices*/ ctx[0];
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block$1(get_each_context$1(ctx, each_value, i));
	}

	return {
		c() {
			table = internal.element("table");
			tr = internal.element("tr");

			tr.innerHTML = `<th>Адрес</th> 
			<th>Псевдоним</th> 
			<th></th>`;

			t4 = internal.space();

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}
		},
		m(target, anchor) {
			internal.insert(target, table, anchor);
			internal.append(table, tr);
			internal.append(table, t4);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(table, null);
			}
		},
		p(ctx, dirty) {
			if (dirty & /*removeOffice, $myOffices*/ 1) {
				each_value = /*$myOffices*/ ctx[0];
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context$1(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block$1(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(table, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}
		},
		d(detaching) {
			if (detaching) internal.detach(table);
			internal.destroy_each(each_blocks, detaching);
		}
	};
}

// (12:2) {#each $myOffices as office}
function create_each_block$1(ctx) {
	let tr;
	let td0;
	let t0_value = /*office*/ ctx[3].address + "";
	let t0;
	let t1;
	let td1;
	let input;
	let t2;
	let td2;
	let button;
	let t4;
	let mounted;
	let dispose;

	function input_input_handler() {
		/*input_input_handler*/ ctx[1].call(input, /*each_value*/ ctx[4], /*office_index*/ ctx[5]);
	}

	function click_handler() {
		return /*click_handler*/ ctx[2](/*office*/ ctx[3]);
	}

	return {
		c() {
			tr = internal.element("tr");
			td0 = internal.element("td");
			t0 = internal.text(t0_value);
			t1 = internal.space();
			td1 = internal.element("td");
			input = internal.element("input");
			t2 = internal.space();
			td2 = internal.element("td");
			button = internal.element("button");
			button.textContent = "x";
			t4 = internal.space();
			internal.attr(input, "type", "text");
			internal.attr(input, "class", "input input-bordered input-xs");
			internal.attr(button, "class", "btn btn-xs btn-square");
		},
		m(target, anchor) {
			internal.insert(target, tr, anchor);
			internal.append(tr, td0);
			internal.append(td0, t0);
			internal.append(tr, t1);
			internal.append(tr, td1);
			internal.append(td1, input);
			internal.set_input_value(input, /*office*/ ctx[3].short_name);
			internal.append(tr, t2);
			internal.append(tr, td2);
			internal.append(td2, button);
			internal.append(tr, t4);

			if (!mounted) {
				dispose = [
					internal.listen(input, "input", input_input_handler),
					internal.listen(button, "click", click_handler)
				];

				mounted = true;
			}
		},
		p(new_ctx, dirty) {
			ctx = new_ctx;
			if (dirty & /*$myOffices*/ 1 && t0_value !== (t0_value = /*office*/ ctx[3].address + "")) internal.set_data(t0, t0_value);

			if (dirty & /*$myOffices*/ 1 && input.value !== /*office*/ ctx[3].short_name) {
				internal.set_input_value(input, /*office*/ ctx[3].short_name);
			}
		},
		d(detaching) {
			if (detaching) internal.detach(tr);
			mounted = false;
			internal.run_all(dispose);
		}
	};
}

function create_fragment$4(ctx) {
	let if_block_anchor;
	let if_block = /*$myOffices*/ ctx[0].length > 0 && create_if_block$1(ctx);

	return {
		c() {
			if (if_block) if_block.c();
			if_block_anchor = internal.empty();
		},
		m(target, anchor) {
			if (if_block) if_block.m(target, anchor);
			internal.insert(target, if_block_anchor, anchor);
		},
		p(ctx, [dirty]) {
			if (/*$myOffices*/ ctx[0].length > 0) {
				if (if_block) {
					if_block.p(ctx, dirty);
				} else {
					if_block = create_if_block$1(ctx);
					if_block.c();
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}
		},
		i: internal.noop,
		o: internal.noop,
		d(detaching) {
			if (if_block) if_block.d(detaching);
			if (detaching) internal.detach(if_block_anchor);
		}
	};
}

function instance$4($$self, $$props, $$invalidate) {
	let $myOffices;
	internal.component_subscribe($$self, myOffices, $$value => $$invalidate(0, $myOffices = $$value));

	function input_input_handler(each_value, office_index) {
		each_value[office_index].short_name = this.value;
		myOffices.set($myOffices);
	}

	const click_handler = office => {
		removeOffice(office.id);
	};

	return [$myOffices, input_input_handler, click_handler];
}

class MyOffices extends internal.SvelteComponent {
	constructor(options) {
		super();
		internal.init(this, options, instance$4, create_fragment$4, internal.safe_not_equal, {});
	}
}

/* content-src\my-documents-mfc-plus\components\Settings.svelte generated by Svelte v3.53.1 */

function create_if_block(ctx) {
	let selectoffices;
	let current;
	selectoffices = new SelectOffices({});

	return {
		c() {
			internal.create_component(selectoffices.$$.fragment);
		},
		m(target, anchor) {
			internal.mount_component(selectoffices, target, anchor);
			current = true;
		},
		i(local) {
			if (current) return;
			internal.transition_in(selectoffices.$$.fragment, local);
			current = true;
		},
		o(local) {
			internal.transition_out(selectoffices.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			internal.destroy_component(selectoffices, detaching);
		}
	};
}

function create_fragment$3(ctx) {
	let div2;
	let input0;
	let t0;
	let div0;
	let t2;
	let div1;
	let t3;
	let div5;
	let input1;
	let t4;
	let div3;
	let t6;
	let div4;
	let myoffices;
	let current;
	let if_block = /*$offices*/ ctx[0] && create_if_block();
	myoffices = new MyOffices({});

	return {
		c() {
			div2 = internal.element("div");
			input0 = internal.element("input");
			t0 = internal.space();
			div0 = internal.element("div");
			div0.textContent = "Добавить отделы";
			t2 = internal.space();
			div1 = internal.element("div");
			if (if_block) if_block.c();
			t3 = internal.space();
			div5 = internal.element("div");
			input1 = internal.element("input");
			t4 = internal.space();
			div3 = internal.element("div");
			div3.textContent = "Мои отделы";
			t6 = internal.space();
			div4 = internal.element("div");
			internal.create_component(myoffices.$$.fragment);
			internal.attr(input0, "type", "checkbox");
			internal.attr(input0, "class", "peer");
			internal.attr(div0, "class", "text-xl font-medium collapse-title");
			internal.attr(div1, "class", "collapse-content");
			internal.attr(div2, "class", "border collapse collapse-arrow border-base-300 bg-base-100 rounded-box");
			internal.attr(input1, "type", "checkbox");
			internal.attr(input1, "class", "peer");
			internal.attr(div3, "class", "text-xl font-medium collapse-title");
			internal.attr(div4, "class", "collapse-content");
			internal.attr(div5, "class", "border collapse collapse-arrow border-base-300 bg-base-100 rounded-box");
		},
		m(target, anchor) {
			internal.insert(target, div2, anchor);
			internal.append(div2, input0);
			internal.append(div2, t0);
			internal.append(div2, div0);
			internal.append(div2, t2);
			internal.append(div2, div1);
			if (if_block) if_block.m(div1, null);
			internal.insert(target, t3, anchor);
			internal.insert(target, div5, anchor);
			internal.append(div5, input1);
			internal.append(div5, t4);
			internal.append(div5, div3);
			internal.append(div5, t6);
			internal.append(div5, div4);
			internal.mount_component(myoffices, div4, null);
			current = true;
		},
		p(ctx, [dirty]) {
			if (/*$offices*/ ctx[0]) {
				if (if_block) {
					if (dirty & /*$offices*/ 1) {
						internal.transition_in(if_block, 1);
					}
				} else {
					if_block = create_if_block();
					if_block.c();
					internal.transition_in(if_block, 1);
					if_block.m(div1, null);
				}
			} else if (if_block) {
				internal.group_outros();

				internal.transition_out(if_block, 1, 1, () => {
					if_block = null;
				});

				internal.check_outros();
			}
		},
		i(local) {
			if (current) return;
			internal.transition_in(if_block);
			internal.transition_in(myoffices.$$.fragment, local);
			current = true;
		},
		o(local) {
			internal.transition_out(if_block);
			internal.transition_out(myoffices.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) internal.detach(div2);
			if (if_block) if_block.d();
			if (detaching) internal.detach(t3);
			if (detaching) internal.detach(div5);
			internal.destroy_component(myoffices);
		}
	};
}

function instance$3($$self, $$props, $$invalidate) {
	let $offices;
	internal.component_subscribe($$self, offices, $$value => $$invalidate(0, $offices = $$value));

	svelte.onMount(() => {
		fetchOffices();
	});

	return [$offices];
}

class Settings extends internal.SvelteComponent {
	constructor(options) {
		super();
		internal.init(this, options, instance$3, create_fragment$3, internal.safe_not_equal, {});
	}
}

/* content-src\my-documents-mfc-plus\components\User.svelte generated by Svelte v3.53.1 */

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[1] = list[i];
	return child_ctx;
}

// (11:1) {#each Object.keys($user) as param}
function create_each_block(ctx) {
	let tr;
	let td0;
	let t0_value = /*param*/ ctx[1] + "";
	let t0;
	let t1;
	let td1;
	let t2_value = /*$user*/ ctx[0][/*param*/ ctx[1]] + "";
	let t2;
	let t3;

	return {
		c() {
			tr = internal.element("tr");
			td0 = internal.element("td");
			t0 = internal.text(t0_value);
			t1 = internal.space();
			td1 = internal.element("td");
			t2 = internal.text(t2_value);
			t3 = internal.space();
		},
		m(target, anchor) {
			internal.insert(target, tr, anchor);
			internal.append(tr, td0);
			internal.append(td0, t0);
			internal.append(tr, t1);
			internal.append(tr, td1);
			internal.append(td1, t2);
			internal.append(tr, t3);
		},
		p(ctx, dirty) {
			if (dirty & /*$user*/ 1 && t0_value !== (t0_value = /*param*/ ctx[1] + "")) internal.set_data(t0, t0_value);
			if (dirty & /*$user*/ 1 && t2_value !== (t2_value = /*$user*/ ctx[0][/*param*/ ctx[1]] + "")) internal.set_data(t2, t2_value);
		},
		d(detaching) {
			if (detaching) internal.detach(tr);
		}
	};
}

function create_fragment$2(ctx) {
	let table;
	let tr;
	let t3;
	let t4;
	let button;
	let mounted;
	let dispose;
	let each_value = Object.keys(/*$user*/ ctx[0]);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	return {
		c() {
			table = internal.element("table");
			tr = internal.element("tr");

			tr.innerHTML = `<th>Параметр</th> 
		<th>Значение</th>`;

			t3 = internal.space();

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t4 = internal.space();
			button = internal.element("button");
			button.textContent = "Выйти";
			internal.attr(button, "class", "btn btn-sm");
		},
		m(target, anchor) {
			internal.insert(target, table, anchor);
			internal.append(table, tr);
			internal.append(table, t3);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(table, null);
			}

			internal.insert(target, t4, anchor);
			internal.insert(target, button, anchor);

			if (!mounted) {
				dispose = internal.listen(button, "click", logout);
				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (dirty & /*$user, Object*/ 1) {
				each_value = Object.keys(/*$user*/ ctx[0]);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(table, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}
		},
		i: internal.noop,
		o: internal.noop,
		d(detaching) {
			if (detaching) internal.detach(table);
			internal.destroy_each(each_blocks, detaching);
			if (detaching) internal.detach(t4);
			if (detaching) internal.detach(button);
			mounted = false;
			dispose();
		}
	};
}

function instance$2($$self, $$props, $$invalidate) {
	let $user;
	internal.component_subscribe($$self, user, $$value => $$invalidate(0, $user = $$value));
	return [$user];
}

class User extends internal.SvelteComponent {
	constructor(options) {
		super();
		internal.init(this, options, instance$2, create_fragment$2, internal.safe_not_equal, {});
	}
}

/* content-src\my-documents-mfc-plus\components\Unauthorized.svelte generated by Svelte v3.53.1 */

function create_fragment$1(ctx) {
	let div;
	let button;
	let mounted;
	let dispose;

	return {
		c() {
			div = internal.element("div");
			button = internal.element("button");
			button.textContent = "Войти через ЕСИА";
			internal.attr(button, "class", "btn btn-ghost");
			internal.attr(div, "class", "grid h-full place-content-center");
		},
		m(target, anchor) {
			internal.insert(target, div, anchor);
			internal.append(div, button);

			if (!mounted) {
				dispose = internal.listen(button, "click", /*click_handler*/ ctx[0]);
				mounted = true;
			}
		},
		p: internal.noop,
		i: internal.noop,
		o: internal.noop,
		d(detaching) {
			if (detaching) internal.detach(div);
			mounted = false;
			dispose();
		}
	};
}

function instance$1($$self) {
	const click_handler = () => {
		window.open('https://xn--d1achjhdicc8bh4h.xn--p1ai/mfc/esia/Login', '_blank', 'popup');
	};

	return [click_handler];
}

class Unauthorized extends internal.SvelteComponent {
	constructor(options) {
		super();
		internal.init(this, options, instance$1, create_fragment$1, internal.safe_not_equal, {});
	}
}

let $authorized;
authorized.subscribe(value => {
	$authorized = value;
});

const navigate = () => {
	checkAuth();
	let hash = location.hash;
	let newPath;
	if (hash === '' || hash === '#') {
		newPath = '/';
	} else {
		if ($authorized) {
			newPath = `/${hash.substring('1')}`;
		} else {
			newPath = '/unauthorized';
		}
	}
	path.update(() => newPath);
};

const routes = {
	'/': {
		path: '/',
		title: 'МРС МФЦ+',
		component: Home
	},
	'/templates': {
		path: '/templates',
		title: 'Шаблоны',
		component: Templates
	},
	'/settings': {
		path: '/settings',
		title: 'Настройки',
		component: Settings
	},
	'/user': {
		path: '/user',
		title: 'Информация о пользователе',
		component: User
	},
	'/unauthorized': {
		path: '/unauthorized',
		title: 'Требуется войти в аккаунт',
		component: Unauthorized
	}
};

const path = store.writable('/');

/* content-src\my-documents-mfc-plus\App.svelte generated by Svelte v3.53.1 */

function add_css(target) {
	internal.append_styles(target, "svelte-1jts59z", "body{display:flex;flex-flow:column nowrap}.main.svelte-1jts59z{flex-grow:1;height:calc(100% - 48px);padding:8px 16px}");
}

function create_fragment(ctx) {
	let header;
	let t;
	let div;
	let switch_instance;
	let current;
	let mounted;
	let dispose;
	header = new Header({});
	var switch_value = routes[/*$path*/ ctx[0]].component;

	function switch_props(ctx) {
		return {};
	}

	if (switch_value) {
		switch_instance = internal.construct_svelte_component(switch_value, switch_props());
	}

	return {
		c() {
			internal.create_component(header.$$.fragment);
			t = internal.space();
			div = internal.element("div");
			if (switch_instance) internal.create_component(switch_instance.$$.fragment);
			internal.attr(div, "class", "main svelte-1jts59z");
		},
		m(target, anchor) {
			internal.mount_component(header, target, anchor);
			internal.insert(target, t, anchor);
			internal.insert(target, div, anchor);
			if (switch_instance) internal.mount_component(switch_instance, div, null);
			current = true;

			if (!mounted) {
				dispose = internal.listen(window, "hashchange", navigate);
				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (switch_value !== (switch_value = routes[/*$path*/ ctx[0]].component)) {
				if (switch_instance) {
					internal.group_outros();
					const old_component = switch_instance;

					internal.transition_out(old_component.$$.fragment, 1, 0, () => {
						internal.destroy_component(old_component, 1);
					});

					internal.check_outros();
				}

				if (switch_value) {
					switch_instance = internal.construct_svelte_component(switch_value, switch_props());
					internal.create_component(switch_instance.$$.fragment);
					internal.transition_in(switch_instance.$$.fragment, 1);
					internal.mount_component(switch_instance, div, null);
				} else {
					switch_instance = null;
				}
			}
		},
		i(local) {
			if (current) return;
			internal.transition_in(header.$$.fragment, local);
			if (switch_instance) internal.transition_in(switch_instance.$$.fragment, local);
			current = true;
		},
		o(local) {
			internal.transition_out(header.$$.fragment, local);
			if (switch_instance) internal.transition_out(switch_instance.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			internal.destroy_component(header, detaching);
			if (detaching) internal.detach(t);
			if (detaching) internal.detach(div);
			if (switch_instance) internal.destroy_component(switch_instance);
			mounted = false;
			dispose();
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let $authorized;
	let $path;
	internal.component_subscribe($$self, authorized, $$value => $$invalidate(1, $authorized = $$value));
	internal.component_subscribe($$self, path, $$value => $$invalidate(0, $path = $$value));

	svelte.onMount(() => {
		
	});

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*$path, $authorized*/ 3) {
			navigate();
		}
	};

	return [$path, $authorized];
}

class App extends internal.SvelteComponent {
	constructor(options) {
		super();
		internal.init(this, options, instance, create_fragment, internal.safe_not_equal, {}, add_css);
	}
}

document.body.innerHTML = '';

const app = new App({
	target: document.body
});

module.exports = app;
