// ==UserScript==
// @name Enhance STLToday
// @version 1.4
// @description "A user script to automatically bypass the paywall by marking the content as free."
// @match http*://*.stltoday.com/*
// @run-at document-start
// @require  https://gist.github.com/raw/2625891/waitForKeyElements.js
// @require  http://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js
// @grant GM_addStyle
// ==/UserScript==
/*
1.2 - Hide most elements required to show content
1.3 - Attempt to remove the need to click to view the article. Also hide additional modal dialogs about Ad-Blocker - 5/9/19
1.4 - Some articles have an overflow:hidden element that prevents scrolling. This attempts to fix that - 5/13/19
*/

GM_addStyle('.redacted-overlay { display:none !important; }'); // 4/11/18
GM_addStyle('.subscription-required { display:none !important; }'); // 4/11/18
GM_addStyle('.meter message { display:none !important; }'); // 4/11/18
GM_addStyle('.fc-ab-root {display:none !important;}'); //5/9/19
GM_addStyle('.modal-backdrop {display:none !important;}'); //5/9/19
(function() { //5/13/19 - Get rid of Overflow:hidden on body
    'use strict';
    // Credits: https://stackoverflow.com/questions/51330252/how-to-remove-the-css-rule-body-overflowhidden-automatically
    document.body.style.overflow = "visible !important";
})();

// Reference: https://stackoverflow.com/questions/39884983/change-class-value-using-greasemonkey
waitForKeyElements (".subscriber-only", swapClass);
waitForKeyElements (".modal-open", removeModal); //5/9/19

function swapClass (jNode) {
    jNode.removeClass ("hide").addClass ("show");
    console.log("cleaned node : ", jNode);
}

function removeModal (jNode) {  //5/9/19
    //Reference: https://www.w3schools.com/howto/howto_js_remove_class.asp
    console.log('Taking a break...');
    sleep(5000);
    console.log('Five  seconds later, ...');

    var element = document.body;
    element.classList.remove("modal-open");
    element.style
    console.log("modal removed : ", jNode);

    element = document.getElementById("lee-subscription-modal");
    element.classList.remove("modal");
    element.classList.remove("fade");
    element.classList.remove("in");
    GM_addStyle('.lee-subscription {display:none !important;}'); //5/9/19
    GM_addStyle('.lee-subscription-modal {display:none !important;}'); //5/9/19
}

function sleep(ms) {  //5/9/19
  return new Promise(resolve => setTimeout(resolve, ms));
}
