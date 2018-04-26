var gulp = require('gulp');
var ts = require('gulp-typescript');

gulp.task('transpile', function () {
    return gulp.src('src/**/*.ts')
        .pipe(ts({
            noImplicitAny: true,
        }))
        .pipe(gulp.dest('.'));
});

gulp.task('watch', function () {
    gulp.watch(['./src/**/*.ts'], ['transpile']);
});

gulp.task('default', ['transpile', 'watch'], function () { });