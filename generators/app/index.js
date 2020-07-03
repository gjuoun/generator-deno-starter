"use strict";
const Generator = require("yeoman-generator");
const path = require("path");
const chalk = require("chalk");
module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this.log("Initializing...");
  }

  writing() {
    // copy all files to target
    this.fs.copyTpl(__dirname, ".");
    // copy all *.env files to target
    // this.fs.copyTpl(path.join(__dirname, ".*"), ".");
    this.fs.copyTpl(path.join(__dirname, "./.vscode"), "./.vscode");
    this.fs.delete("index.js");
  }

  install() {
    // install denon
    this.spawnCommandSync("deno", "install", "-A", "-f", "--unstable", "https://deno.land/x/denon@v2.2.0/denon.ts")
    // install vscode extension
    this.spawnCommand("code", ["--install-extension", "denoland.vscode-deno"]);
  }

  end() {
    this.log(`
--------------------------------------------------
               ┌▄▌▀█████████████▌▄┌               
           ┌▄█████████████████████████╓           
        ┌█████▌██████████████████████████╓        
      ┌█████████████▐██╪████▌██▌█████▌█████▄      
    ┌██████████▀████ ██▐██▀██████████▌██▀████╖    
   ▄███▌███████▐███████▐██▐█████████████▀█████▌   
  ███▌████▐████▌███████═████████████████▀███████  
 ▀████████▌█████████████████████████████▀████████ 
┌█████████▌███████▀▀└   ╘▀▀██████████▌██▀██▀█████▄
██████▀████████   ┌           ▀██████▌█████▐██████
████▌█▌████▀     ▐▀             ███████████▐██████
██████████▌                      █████████████████
██████████▌                       ████████████████
▀████████████▄┌     ┌▄▄███        ▀███████████████
 ███████████████████████           ██████████████ 
 ▐██████████████████████           █████████████▀ 
  ▐█████████████████████           ████████▀███▀  
   └█████████████▌██████           ▀██████████╩   
     ▀██████████████████           ▐█▌██████▀     
       ▀████████████████           ▐███████       
         ▐██████████████          ┌▄███▀▀         
            └▀▀█████████▄▄▄▄▄███████▀└            
                 └▀▀█████████▀▀▀└                 
--------------------------------------------------
    `);

    console.log(`${chalk.bgWhite.black("Welcome to Deno world!")}`)
    console.log(`${chalk.green("Type '> denon start' to watch ./src/app.ts and restart automatically!")}`)
  }
};
