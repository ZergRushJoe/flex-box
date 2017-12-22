const gulp = require('gulp');
const sass = require('gulp-sass');
const clean = require('gulp-clean');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify-es').default;
const sourcemaps = require('gulp-sourcemaps');

gulp.task('default',['build'],function(){});
gulp.task('build',['build scss','build js'],function(){});

gulp.task('clean',function()
{
    gulp.src('./public', {read: false})
        .pipe(clean());
});
gulp.task('build scss',function()
{
    gulp.src(['./src/scss/main.scss'])
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(cleanCSS())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./public/css/'))
});
gulp.task('build js',function()
{
    gulp.src(['./src/js/*.js'])
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .on('error',(err)=> console.log(err))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./public/js/'))
});