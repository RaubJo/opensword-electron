const {app, BrowserWindow} = require('electron');
var nedb = require('nedb');
var mainWin;
var data = [];
var $ = require('jquery');


app.on("ready", function() {
  mainWin = new BrowserWindow({width:1024, height: 640, show: false});
  mainWin.loadURL("file://"+__dirname+"/BRSCG/index.html");

  mainWin.once('ready-to-show', ()=> {mainWin.show()});
});
