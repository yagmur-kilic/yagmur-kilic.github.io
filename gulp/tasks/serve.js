var gulp        = require('gulp')
var browserSync = require('browser-sync').create()

// Static Server + watching scss/html files
gulp.task('serve', function() {

    browserSync.init({
        server: {
          baseDir: './'
        },
        reloadDelay: 1000
    });

    gulp.watch("*.html").on('change', browserSync.reload)
});
