// ==UserScript==
// @name Enhance STLToday
// @version 1.10
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
1.5 - Overflow function was causing rest of script to fail. commented out - 5/22/19
1.6 - Take 2 of removing Overflow via function - 5/22/19
1.7 - Unscribbled the redacted font family
1.8 - Removed ad bars from UI
1.9 - Unscribbled a few more classes.
1.10 - One unscribbled class
*/

GM_addStyle('.redacted-overlay { display:none !important; }'); // 4/11/18
GM_addStyle('.subscription-required { display:none !important; }'); // 4/11/18
GM_addStyle('.meter message { display:none !important; }'); // 4/11/18
GM_addStyle('.fc-ab-root {display:none !important;}'); //5/9/19
GM_addStyle('.modal-backdrop {display:none !important;}'); //5/9/19
GM_addStyle("p {font-family: Georgia, serif !important;}"); //1/17/20
GM_addStyle("a {font-family: Georgia, serif !important;}"); //1/23/20
GM_addStyle("em {font-family: Georgia, serif !important;}"); //1/23/20
GM_addStyle('.subscriber-ad { display:none !important;'); //1/19/20
GM_addStyle("h2 {font-family: Georgia, serif !important;}"); //7/20/20
//GM_addStyle('.modal-content { display:none !important;'); //1/23/20

// Reference: https://stackoverflow.com/questions/39884983/change-class-value-using-greasemonkey
waitForKeyElements (".subscriber-only", swapClass);
waitForKeyElements (".modal-open", removeModal); //5/9/19
waitForKeyElements ("body", removeOverflow); //5/22/19

function swapClass (jNode) {
    console.log('Swap Class break...');
    sleep(1000);
    console.log('One seconds later, ...');

    jNode.removeClass("hide");
    jNode.addClass ("show");
    console.log("cleaned node : ", jNode);
}

function removeModal (jNode) { //5/9/19
    //Reference: https://www.w3schools.com/howto/howto_js_remove_class.asp
    console.log('Taking a break...');
    sleep(5000);
    console.log('Five  seconds later, ...');

    var element = document.body;
    element.classList.remove("modal-open");
    element.style;
    console.log("modal removed : ", jNode);

    element = document.getElementById("lee-subscription-modal");
    element.classList.remove("modal");
    element.classList.remove("fade");
    element.classList.remove("in");
    GM_addStyle('.lee-subscription {display:none !important;}'); //5/9/19
    GM_addStyle('.lee-subscription-modal {display:none !important;}'); //5/9/19
}

function removeOverflow (jNode) { //5/22/19
    console.log('Overflow Class break...');
    sleep(10000);
    console.log('Ten seconds later, ...');

    jNode.removeClass("style");
    console.log("cleaned node : ", jNode);
}

function sleep(ms) { //5/9/19
  return new Promise(resolve => setTimeout(resolve, ms));
}
