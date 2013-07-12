#!/usr/bin/env node

// my restler test 

var rest = require("restler"),
    fs = require('fs'),
    cheerio = require('cheerio'),
    Program = require('commander'),
    TARGET_URL = "http://still-wildwood-7260.herokuapp.com";

rest.get(TARGET_URL).on("complete", function(results) {
 console.log(results.toString()); 
 var x = cheerio.load(results.toString());

});

console.log("Working?");
