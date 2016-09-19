var _    = require('lodash'),
    gulp = require('gulp')
    gutil= require('gulp-util');

gulp.task('copy-assets', function() {
    var assets = {
        js: [
            './node_modules/angular/angular.js'
        ],
        css: ['./node_modules/normalize.css/normalize.css']
    };
    _(assets).forEach(function (assets, type) {
       gulp.src(assets).pipe(gulp.dest('./public/'+type));
    });
});

gulp.task('default', function () {
  return gutil.log('Gulp is running');
})
