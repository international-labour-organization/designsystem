import gulp from "gulp";
import gulpSass from "gulp-sass";
import dartSass from "sass";
import rename from "gulp-rename";
import cleanCSS from "gulp-clean-css";
import { deleteAsync } from "del";
import cssnano from "gulp-cssnano";
import postcss from "gulp-postcss";
import sourcemaps from "gulp-sourcemaps";

const sass = gulpSass(dartSass);

const SRC = "scss";
const TEMP = "temp";
const BUILD = "css";
const COMPILABLE_COMPONENTS = `${TEMP}/compilable_components`;
const COMPILED_COMPONENTS = `${BUILD}/components`;

// Copy all files in the scss folder into a temp folder that's safe to work in
gulp.task("create temp dir", function () {
  return gulp.src(`${SRC}/**/*`).pipe(gulp.dest(TEMP));
});

// Create stand-alone scss files for each of the components so they can be compiled individually
gulp.task("create temp components", function () {
  return gulp
    .src(`${TEMP}/components/_*.scss`)
    .pipe(
      rename(function (path) {
        path.basename = path.basename.replace(/^_/, "");
      })
    )
    .pipe(gulp.dest(COMPILABLE_COMPONENTS));
});

// Compile the component partials into stand-alone css files
gulp.task("compile components into css", function () {
  return gulp
    .src(`${COMPILABLE_COMPONENTS}/*.scss`)
    .pipe(sass({ includePaths: ["node_modules"] }).on("error", sass.logError))
    .pipe(cleanCSS())
    .pipe(
      rename(function (path) {
        path.basename = path.basename.replace(/\.scss$/, "css");
      })
    )
    .pipe(gulp.dest(COMPILED_COMPONENTS));
});

// Minify compiled css components
gulp.task("minify css components", function () {
  return gulp
    .src(`${COMPILED_COMPONENTS}/*.css`)
    .pipe(postcss())
    .pipe(cssnano())
    .pipe(gulp.dest(COMPILED_COMPONENTS));
});

gulp.task("clean temp components", function () {
  return deleteAsync([TEMP]);
});

// Bundle the main scss file into a single css file
gulp.task("bundle main css", function () {
  return gulp
    .src(`${SRC}/*.scss`)
    .pipe(sourcemaps.init()) // Initialize source maps
    .pipe(sass({ includePaths: ["node_modules"] }).on("error", sass.logError))
    .pipe(cleanCSS())
    .pipe(
      rename(function (path) {
        path.basename = path.basename.replace(/\.scss$/, "css");
      })
    )
    .pipe(sourcemaps.write(".")) // Write source maps
    .pipe(gulp.dest(BUILD));
});

// Minify compiled css files
gulp.task("minify main css bundle", function () {
  return gulp
    .src(`${SRC}/*.css`)
    .pipe(postcss())
    .pipe(cssnano())
    .pipe(gulp.dest(BUILD));
});

gulp.task(
  "default",
  gulp.series(
    "create temp dir",
    "create temp components",
    "compile components into css",
    "minify css components",
    "clean temp components",
    "bundle main css",
    "minify main css bundle"
  )
);
