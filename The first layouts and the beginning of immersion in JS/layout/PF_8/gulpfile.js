const {src , dest , series , watch} = require('gulp');
const concat = require('gulp-concat')
const htmlMin = require('gulp-htmlmin')
const prefixer = require('gulp-autoprefixer')
const cleancss = require('gulp-clean-css');
const svgSprite = require('gulp-svg-sprite')
const image = require('gulp-image')
const babel = require('gulp-babel');
const notify = require('gulp-notify');
const souceMaps = require('gulp-sourcemaps')
const del = require('del')
const uglify = require('gulp-uglify-es').default
const browserSync = require('browser-sync').create();

const clean = () => {
  return del(['dest'])
} 

const font = () => {
  return src(['src/fonts/**'])
    .pipe(dest('dest/fonts'))
}

const styles = () => {
  return src('src/styles/**/*.css')
  .pipe(souceMaps.init())
  .pipe(concat('main.css'))
  .pipe(prefixer({
    cascade:false
  }))
  .pipe(cleancss({
    level:2,
  }))
  .pipe(souceMaps.write())
  .pipe(dest('dest'))
  .pipe(browserSync.stream())
}

const htmlMinify = () => {
  return src('src/**/*.html')
    .pipe(htmlMin({
      collapseWhitespace: true,
    }))
    .pipe(dest('dest'))
    .pipe(browserSync.stream())
}

const svgSprites = () => {
  return src('src/images/svg/**/*.svg')
    .pipe(svgSprite({
      mode:{
        stack:{
          sprite:'../sprite.svg'
        }
      }
    }))
    .pipe(dest('dest/images'))
}

const images = () => {
  return src(['src/images/**/*.jpg', 'src/images/**/*.jpeg' , 'src/images/**/*.png' , 'src/images/*.svg'])
    .pipe(image())
    .pipe(dest('dest/images'))
}

const scripts = () => {
  return src([
    'src/js/**/*.js'
  ])
    .pipe(souceMaps.init())
    .pipe(babel({
      presets:['@babel/env']
    }))
    .pipe(concat('app.js'))
    .pipe(uglify().on('error' , notify.onError()))
    .pipe(souceMaps.write())
    .pipe(dest('dest'))
    .pipe(browserSync.stream())
}

const browserSyn = () => {
  browserSync.init({
    server: {
      baseDir: 'dest'
    }
  })
}

watch('src/**/*.html' , htmlMinify)
watch('src/styles/**/*.css' , styles)
watch('src/images/svg/**/*.svg' , svgSprites)
watch('src/js/**/*.js' , scripts)
watch('src/fonts/**' , font)
exports.clean = clean
exports.styles = styles
exports.scripts = scripts
exports.htmlMinify = htmlMinify
exports.images = images
exports.default = series(clean ,font, htmlMinify , scripts ,styles ,svgSprites ,images ,browserSyn)