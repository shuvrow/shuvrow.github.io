var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('sass', function(){
    return gulp.src('css/sass/main.scss')
        .pipe(sass()) // Using gulp-sass
        .pipe(gulp.dest('css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: ''
        }
    })
});

gulp.task('watch',['browserSync','sass'], function(){
    gulp.watch('css/sass/main.scss', ['sass']);
    // Other watchers
});