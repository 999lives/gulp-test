var gulp = require('gulp'),
minifyCSS = require('gulp-minify-css');
gulp.task('minify-css', function() {
gulp.src('./assets/css/*.css')
.pipe(minifyCSS({keepBreaks:false}))
.pipe(gulp.dest('./dist/'))
});
// Default Task
gulp.task('default', ['minify-css']);