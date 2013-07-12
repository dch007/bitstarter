#!/usr/bin/env node

// my restler test 

var rest = require("restler"),
    fs = require('fs'),
    program = require('commander'),
    TARGET_URL = "http://www.spiegel.de";

rest.get(TARGET_URL).on("complete", function(results) {
 console.log(results.toString()); 
});

console.log("Working?");
