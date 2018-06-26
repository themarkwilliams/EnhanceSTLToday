// ==UserScript==
// @name "Enhance STLToday"
// @version 1.1
// @description "A user script to automatically bypass the paywall by marking the content as free."
// @match http*://*.stltoday.com/*
// @run-at document-start
// @require  https://gist.github.com/raw/2625891/waitForKeyElements.js
// @require  http://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js
// @grant GM_addStyle
// ==/UserScript==

GM_addStyle('.redacted-overlay { display:none !important; }'); // 4/11/18
GM_addStyle('.subscription-required { display:none !important; }'); // 4/11/18
GM_addStyle('.meter message { display:none !important; }'); // 4/11/18

// Reference: https://stackoverflow.com/questions/39884983/change-class-value-using-greasemonkey
waitForKeyElements (".subscriber-only", swapClass);

function swapClass (jNode) {
    jNode.removeClass ("hide").addClass ("show");
    console.log("cleaned node : ", jNode);
}
