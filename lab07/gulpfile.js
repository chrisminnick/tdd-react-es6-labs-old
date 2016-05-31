'use strict';

const gulp      = require('gulp');
const eslint    = require('gulp-eslint');
const jshint    = require('gulp-jshint');
const semver    = require('semver');

//check node version
gulp.task('version', function(done) {

    console.log('Checking node version: ');

    var packageJson 		= require('./package.json');
    var expectedVersion	= packageJson.engines.node;
    var actualVersion	= process.version;

    if (semver.gt(expectedVersion,actualVersion)){
        console.log('Incorrect node version. Expected ' +
            expectedVersion + '. Actual: ' + actualVersion);
        process.exit(1);
    }

    done();
});

//lint JavaScript
gulp.task('lint', function() {
    console.log('Linting JavaScript: ');
    return gulp.src(['gulpfile.js','src/**/*.js'])
        .pipe(jshint({
            esversion: 6,
            bitwise: true, // no bitwise operators, they're probably mistakes
            curly: true, // curly braces required around blocks
            eqeqeq: true, // require strict comparison
            forin: true, // require for in loops to filter object's items
            freeze: true, // prohibit overwriting native objects
            latedef: 'nofunc', // trying to use variables before defining, not functions
            nonbsp: true, // no nonbreaking white space
            nonew: true, // no calling constructor that doesn't return an object
            undef: true, // variables must be defined
            // set environments
            node: true,
            browser: true,
            globals: []
        }))
        .pipe(jshint.reporter('default'))
        .pipe(jshint.reporter('fail'));

});

//eslint
gulp.task('eslint', function () {
    return gulp.src(['**/*.js','!node_modules/**'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

//default task
gulp.task('default', gulp.series(gulp.parallel('version','eslint'),
    function(done) {
    console.log('BUILD OK');
    done();
}));