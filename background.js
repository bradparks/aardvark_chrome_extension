// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

function executeScripts(tabId, injectDetailsArray)
{
    function createCallback(tabId, injectDetails, innerCallback) {
        return function () {
            chrome.tabs.executeScript(tabId, injectDetails, innerCallback);
        };
    }

    var callback = null;

    for (var i = injectDetailsArray.length - 1; i >= 0; --i)
        callback = createCallback(tabId, injectDetailsArray[i], callback);

    if (callback !== null)
        callback();   // execute outermost function
}

chrome.browserAction.onClicked.addListener(function (tab) {
    executeScripts(null, [ 
        {file: "init.js"},
        {file: "aardvarkStrings.js"},
        {file: "aardvarkUtils.js"},
        {file: "aardvarkDBox.js"},
        {file: "aardvarkCommands.js"},
        {file: "aardvarkMain.js"},
        {file: "startup.js"}
    ])
        //{ code: "transformPage();" }
});
