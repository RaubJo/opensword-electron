const {app, BrowserWindow, Menu} = require('electron');
var path = require('path');
var mainWin;
var aboutWin;

const menuTemplate = [
  {
    label: 'File',
    submenu: [
      {
        label: 'Quit',
        role: 'quit'
      }
    ]
  },
  {
    label: 'Bible',
    submenu: [
      {
        label: 'Search',
        click: () => {console.log("Search clicked")}
      },
      {
        label: 'Previous Chapter'
      },
      {
        label: 'Next Chapter'
      },
      {
        label: 'Previous Verse'
      },
      {
        label: 'Next Verse'
      }
    ]
  },
  {
    label: 'Commentary',
    submenu: [
      {
        label: 'PH'
      }
    ]
  },
  {
    label: 'Dictionary',
    submenu: [
      {
        label: 'PH'
      }
    ]
  },
  {
    label: 'Journal',
    submenu: [
      {
        label: 'PH'
      }
    ]
  },
  {
    label: 'Help',
    submenu: [
      {
        label: 'About ...',
        click: () => {aboutWin.setMenu(null);aboutWin.show()}
      }
    ]

  }
];




app.on("ready", function() {
  mainWin = new BrowserWindow({width: 1024, height: 640, backgroundColor: '#65B3D7', center: true, show: false, icon: path.join(__dirname, 'assets/icons/png/64x64.png')});
  aboutWin = new BrowserWindow({width: 800, height: 600, backgroundColor: '#fef5b9', center: true, show: false});
  aboutWin.loadURL("file://"+__dirname+"/assets/interface/menuBar/about.html");
  mainWin.loadURL("file://"+__dirname+"/assets/html/index.html");



  var menu = Menu.buildFromTemplate(menuTemplate);
  Menu.setApplicationMenu(menu);
  mainWin.once('ready-to-show', ()=> {mainWin.show()});


});
