var gulp  = require('gulp');
var sass  = require('gulp-sass');

gulp.task('sassTocss', function(){
   gulp.src('css/style.scss')
   .pipe(sass())
   .pipe(gulp.dest('destination'))
})

gulp.task('filewatcher', function(){
    gulp.watch('css/style.scss',['sassTocss'] )
})