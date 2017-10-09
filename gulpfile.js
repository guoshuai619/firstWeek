var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var minify = require('gulp-minify-css');
gulp.task('go',function(){
   gulp.src('js/*.js')
       .pipe(concat('min.js'))//合并
       .pipe(uglify())//压缩
       .pipe(gulp.dest('js'))//保存位置
});
gulp.task('minicss',function(){
    gulp.src('css/*.css')
        .pipe(concat('mincss.css'))
        .pipe(minify())
        .pipe(gulp.dest('css'))
});