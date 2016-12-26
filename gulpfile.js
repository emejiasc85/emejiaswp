var gulp 	= require('gulp'),
	stylus 	= require('gulp-stylus'),
	nib		= require('nib'),
	watch	= require('gulp-watch'),
	cssnano	= require('gulp-cssnano'),
	gulpif	= require('gulp-if'),
	concat	= require('gulp-concat'),
	uglify	= require('gulp-uglify'),
	argv	= require('yargs').argv,
	del		= require('del'),
	sync	= require('browser-sync').create(),
	imagemin	= require('gulp-imagemin'),
	sourcemaps	= require('gulp-sourcemaps');

var isProduction;
if (argv.prod) {
	isProduction = true;
}
else{
	isProduction = false;
}

var config 	= {
	stylDir : './assets/styl',
	cssDir 	: './assets/css',
	jsDir 	: './assets/js',
	imgDir 	: './assets/images'
};

gulp.task('style', function () {
    return gulp.src(config.stylDir + '/*.styl')
    .pipe(stylus({ use:nib()}))
    .pipe(gulpif(isProduction, cssnano(), sourcemaps.write('maps')))
    .pipe(gulp.dest(config.cssDir))
    .pipe(sync.stream());
});

gulp.task('imagemin', function(){
	return gulp.src(config.imgDir+'/*.{png,jpg,jpeg}')
	.pipe(imagemin())
	.pipe(gulp.dest(config.imgDir + '/'));
});

gulp.task('cleanup', function(){
	del(config.cssDir+'/maps/*');
	del(config.cssDir+'/maps/');
});

gulp.task('browsersync', ['style', 'imagemin'], function(){
	sync.init({
		proxy:"emejias.dev",
		browser: "google chrome"
	});
	gulp.watch('./*.html').on('change', sync.reload);
	gulp.watch(config.stylDir + '/**/*.styl', ['style']);
});


//gulp.task('watch', function(){
//	watch(config.stylDir + '/**/*.styl', function(){
//		gulp.start('style');
//	});
//});




