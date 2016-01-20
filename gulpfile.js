var gulp = require('gulp');
var gulpSequence = require('gulp-sequence');
var del = require('del');
var eslint = require('gulp-eslint');
var jsonServer = require('gulp-json-srv');



// serve json-server
gulp.task('json-server', function () {
    jsonServer.start();
});


// serve website
gulp.task('serve', function () {
    var webserver = require('gulp-webserver');

    gulp.src('httpdocs')
        .pipe(webserver({
            port: 8080,
            fallback: 'index.html',
            open: true
        }));
});

// move src to httpdocs folder
gulp.task('build',['clean:build'],function () {
    return gulp.src(['src/**/*.js', 'src/**/*.html'])
        .pipe(gulp.dest('httpdocs/js/'));
});

gulp.task('clean:build', function (cb) {
    var files = [
        'httpdocs/js/**/*.js',
        'httpdocs/js/**/*.html',
        '!httpdocs/js/jspm/**/*.js',
        '!httpdocs/js/config.js'
        ];
    del(files, cb);
});

// run karma test suite
gulp.task('test', function (cb) {
    var karma = require('karma').server;
    var options = {
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    };
    // Be sure to return the stream
    karma.start(options, cb);
});

// Watch Files For Changes
gulp.task('watch', function () {
    gulp.watch(['src/**/*.js','src/**/*.html'], ['build']);
});

gulp.task('watch:test', function () {
    gulp.watch(['src/**/*.js', 'tests/**/*Spec.js'], ['test']);
});

gulp.task('test:auto', function (cb) {
    gulpSequence('test', 'watch:test', cb);
});

gulp.task('lint', function() {
  return gulp.src('src/**/*.js')
    .pipe(eslint())
    .pipe(eslint.format())
    // Brick on failure to be super strict
    .pipe(eslint.failOnError());
});

// default task
gulp.task('default', function (cb) {
    gulpSequence('lint', 'build', 'json-server', 'serve', 'watch', cb);
});