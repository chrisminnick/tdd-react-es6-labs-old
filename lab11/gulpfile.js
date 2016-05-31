'use strict';

const gulp          = require('gulp');
const eslint        = require('gulp-eslint');
const jasmine       = require('gulp-jasmine');
const jshint        = require('gulp-jshint');
const karma         = require('gulp-karma-runner');
const reporters     = require('jasmine-reporters');
const semver        = require('semver');
const webserver     = require('gulp-webserver');



//eslint
gulp.task('eslint', function () {
    return gulp.src(['**/*.js','!node_modules/**'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

//Run unit tests
gulp.task('jasmine', function(done) {
    gulp.src('spec/*.js')
        .pipe(jasmine({
            reporter: new reporters.TerminalReporter({
                verbosity: 3,
                color: true
            })
        }));
    done();
});

//start karma server
gulp.task('karma', function() {
    return gulp.src([
        'src/**/*.js',
        'spec/**/*.js'
    ],
        {'read': false}).pipe(
        karma.server({
            configFile: __dirname + '/karma.conf.js',
            'singleRun': false
        })
    );
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

//run
gulp.task('run', function() {
    gulp.src('src')
        .pipe(webserver({
            livereload: true,
            open: true
        }));
});

//Run tests in Karma
gulp.task('test', function () {
    return gulp.src(['spec/**/*.js'],
        {'read': false}).pipe(
        karma.runner({
            configFile: __dirname + '/karma.conf.js',
            'singleRun': false
        })
    );
});


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

//default task
gulp.task('default',
    gulp.series(
        gulp.parallel('version','eslint'),
        'test',
        function(done) {
            console.log('BUILD OK');
            done();
        }
    )
);