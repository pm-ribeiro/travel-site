var gulp = require('gulp'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import'),
mixins = require('postcss-mixins'),
hexrgba = require('postcss-hexrgba');

gulp.task('styles', function() {
  return gulp.src('./app/assets/styles/styles.css')
    //postcss filters
    .pipe(postcss([cssImport, mixins, cssvars, nested, hexrgba, autoprefixer])) 
    .on('error', function(errorInfo) { //se um erro ocorrer 
    	console.log(errorInfo.toString()); //mostrando o erro
    	this.emit('end');
    })
    .pipe(gulp.dest('./app/temp/styles'));
});