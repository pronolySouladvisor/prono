const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
const displayError = (error, stdout, stderr, type) => {
    if (error) {
        console.log('Errors occurred')
    }
    if (stdout) {
        console.log('output: ', stdout)
    }
    if (stderr) {
        console.log('stderr: ', stderr)
    }

    if (! error && ! stdout && ! stderr) {
        console.log(type + ' compiled finished without any errors.')
    }
}

const runEslint = () => {
    var exec = require('child_process').exec
    exec('eslint ./resources/js', (error, stdout, stderr) => displayError(error, stdout, stderr, 'Eslint'))
}

const runStylelint = () => {
    var exec = require('child_process').exec
    exec('stylelint ./resources/sass', (error, stdout, stderr) => displayError(error, stdout, stderr, 'Stylelint'))
}



mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css')
    .react('resources/js/react/correntLocation.js', 'public/js');
