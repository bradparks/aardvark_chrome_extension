var showHtml = function (elem) {
};

var aardvark = {
  isBookmarklet: true,
  oldresourcePrefix: "http://karmatics.com/aardvark/",
  resourcePrefix: "https://dl.dropbox.com/u/274922/aardvark/",
  srcFiles: [
    'aardvarkStrings.js',
    'aardvarkUtils.js',
    'aardvarkDBox.js',
    'aardvarkCommands.js',
    'aardvarkMain.js'  
  ],

  doStart: function()
  {
    console.log('starting...');
    console.log('this:' + this);
      this.showHelpTip(0);
      this.start();
  },

  //------------------------------------------------
  // onload function for script elements
  loadObject: function  (obj) {
    console.log('loading object:' + obj);
    var c = 0;
    
    for (var x in obj) {
      if (aardvark[x] == undefined)
        aardvark[x] = obj[x];
       c++;
      }
    }
};

aardvark.window = window;
aardvark.doc = window.document;


