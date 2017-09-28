const gulp = require('gulp');
const cli = require('gulp-uglify');
const connect = require('gulp-connect');
const sass = require('gulp-sass');
const browser = require('gulp-browserify');

gulp.task('com',function () {
    gulp.src('a.js')
    .pipe(cli())
    .pipe(gulp.dest('dest'))
})

gulp.task('server',function () {
    connect.server({
        root:'',
        port:3030,
        livereload:true
    })
    gulp.watch(['index.html','index.js','css/style.css'],['html']);
    gulp.watch(['index.html','a.js','css/style.css'],['html'])
})
gulp.task('html',function () {
    gulp.src(['index.html','a.js','css/style.css']).pipe(connect.reload());
})
// gulp.task('listen',function () {
//     gulp.watch('index.js',['com'])
// })


// gulp.task('sass',function () {
//     gulp.src(['index.html','a.js']).pipe(connect.reload())
// })