const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const fileinclude = require('gulp-file-include');
const less = require('gulp-less');
const csso = require('gulp-csso');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');

//html文件代码压缩
//抽取公共代码
gulp.task('htmlmin', () => {
    gulp.src('../*.html')
    //抽取
        .pipe(fileinclude())
        //压缩
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('dist/'));

});
//css任务
//less转换
//css压缩
gulp.task('cssmin', () => {
    gulp.src(['../css/*.less', './src/css/*.css'])
    //将less转化为css
        .pipe(less())
        // 压缩css
        .pipe(csso())
        .pipe(gulp.dest('dist/css'));
});


//js任务
//1.es6代码转换
//2.代码压缩
gulp.task('jsmin', () => {
    gulp.src('*.js')
        .pipe(babel({
            //它可以判断当前代码的运行环境 将代码转换为当前运行环境支持的代码
            presets: ['@babel/preset-env']
        }))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
});
//
// // 复制文件夹
// gulp.task('copy', () => {
//     gulp.src('./src/image/*')
//         .pipe(gulp.dest('dist/image'));
//     // gulp.src('.src/lib/*')
//     //   .pipe(gulp.dest('dist/lib'))
// });

//构建任务
gulp.task('default', gulp.series('htmlmin', 'cssmin', 'jsmin',   done => done()));