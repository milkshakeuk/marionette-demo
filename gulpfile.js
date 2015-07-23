var gulp = require('gulp');
var gulpSequence = require('gulp-sequence');
var del = require('del');


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
gulp.task('build', function () {
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
    gulp.watch('src/**/*.js', ['clean:build', 'build']);
});

gulp.task('watch:test', function () {
    gulp.watch(['src/**/*.js', 'tests/**/*Spec.js'], ['test']);
});

gulp.task('test:auto', function (cb) {
    gulpSequence('test', 'watch:test', cb);
});

// default task
gulp.task('default', function (cb) {
    gulpSequence('clean:build', 'build', 'serve', cb);
});