"use strict";

const gulp      = require("gulp");
const semver    = require("semver");

//check node version
gulp.task('version', function(done) {

    console.log("Checking node version: ");

    var packageJson 		= require("./package.json");
    var expectedVersion	= packageJson.engines.node;
    var actualVersion	= process.version;

    if (semver.neq(expectedVersion,actualVersion)){
        console.log("Incorrect node version. Expected " +
            expectedVersion + ". Actual: " + actualVersion);
        process.exit(1);
    }

    done();
});


//default task
gulp.task('default', gulp.series('version', function(done) {
    console.log('BUILD OK');
    done();
}));