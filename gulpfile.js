var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', mysass);
function mysass() {
    return gulp.src('./*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./css'));
  }
gulp.task('watch', function () {
  gulp.watch('./*.scss', mysass);
});