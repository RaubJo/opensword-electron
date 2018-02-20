//electron-db test

const db = require('electron-db');
const electron = require('electron');
 
const app = electron.app || electron.remote.app;
 
db.createTable('customers', (succ, msg) => {
  // succ - boolean, tells if the call is successful
  console.log("Success: " + succ);
  console.log("Message: " + msg);
})