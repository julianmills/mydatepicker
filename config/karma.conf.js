var webpackConfig = require('./webpack.test');

module.exports = function (config) {
    config.set({
        basePath: '',

        frameworks: ['jasmine'],

        files: [
            {pattern: './karma-test-shim.js', watched: false},
            '../src/my-date-picker/my-date-picker.component.css'
        ],

        preprocessors: {
            './karma-test-shim.js': ['webpack', 'sourcemap']
        },

        webpack: webpackConfig,

        webpackMiddleware: {
            stats: 'errors-only'
        },

        webpackServer: {
            noInfo: true
        },

        htmlReporter: {
            outputFile: '../test-output/tests.html'
        },

        coverageReporter: {
            dir: '../test-output/coverage',
            reporters: [
                {type: 'html', subdir: 'html'},
                {type: 'json', subdir: 'json'}
            ]
        },

        reporters: ['progress', 'coverage', 'html'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        browsers: ['PhantomJS'],
        singleRun: true,
        browserNoActivityTimeout: 30000
    });
};