var gulp = require('gulp'),
	sass = require('gulp-sass'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	connect = require('gulp-connect');

gulp.task('server', function() {
	connect.server({
		root: 'app',
		port: 1337,
		livereload: true
	});
});

gulp.task('styles', function () {
	gulp.src('./app/src/styles/*.scss')
		.pipe(concat('bundle.scss'))
		.pipe(sass())
		.pipe(concat('main.css'))
		.pipe(gulp.dest('./app/dist/css'))
		.pipe(connect.reload());
});

gulp.task('views', function () {
	gulp.src('./app/src/views/*.html')
		.pipe(gulp.dest('./app/dist'))
		.pipe(connect.reload());
});

gulp.task('js', function () {
	gulp.src('./app/src/js/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('./app/dist/js'))
		.pipe(connect.reload());
});

gulp.task('images', function () {
	gulp.src('./app/src/img/**/*.*')
		.pipe(gulp.dest('./app/dist/img'))
		.pipe(connect.reload());
});

gulp.task('fonts', function () {
	gulp.src('./app/src/fonts/*.*')
		.pipe(gulp.dest('./app/dist/fonts'))
		.pipe(connect.reload());
});

gulp.task('watch', function () {
	gulp.watch('./app/src/styles/*.scss', ['styles']);
	gulp.watch('./app/src/views/*.html', ['views']);
	gulp.watch('./app/src/js/*.js', ['js']);
	gulp.watch('./app/src/img/*.*', ['images']);
	gulp.watch('./app/src/fonts/*.*', ['fonts']);
});

gulp.task('default', ['server', 'styles', 'views', 'js', 'images', 'fonts', 'watch']);