/*juntando todas os icones
em apenas um arquivo (imagem)*/
var gulp = require('gulp');
svgSprite = require('gulp-svg-sprite'),
rename = require('gulp-rename'),
del = require('del');
//object literal
var config = {
	mode:{
		css:{
			sprite: 'sprite.svg',
			render: {
				css: {
					template: './gulp/templates/sprite.css'
				}
			}
		}
	}
}

//pacote necessario npm install del --save-dev
gulp.task('beginClean', function(){
	return del(['./app/temp/sprite', './app/assets/images/sprites']);
});

gulp.task('createSprite', ['beginClean'] ,function(){
	return gulp.src('./app/assets/images/icons/**/*.svg')
			.pipe(svgSprite(config) )
			.pipe(gulp.dest('./app/temp/sprite') );
});


gulp.task('copySpriteGraphic',['createSprite'] ,function() {
	return gulp.src('./app/temp/sprite/css/**/*.svg')
			.pipe(gulp.dest('./app/assets/images/sprites'));
});

//nome da tarefa, dependencia, funcao
gulp.task('copySpriteCSS', ['createSprite'] ,function() {
	return gulp.src('./app/temp/sprite/css/*.css')
			.pipe(rename('_sprite.css'))
			.pipe(gulp.dest('./app/assets/styles/modules'));
});

gulp.task('endClean', ['copySpriteGraphic', 'copySpriteCSS'] ,function(){
	return del(['./app/temp/sprite']);
});

gulp.task('icons', ['beginClean', 'createSprite', 'copySpriteGraphic','copySpriteCSS', 'endClean']);