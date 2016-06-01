/*
eslint-disable no-var, func-names, padded-blocks, object-shorthand, space-before-function-paren
*/
var webpack = require('webpack');
var path = require('path');

var webpackConf = require('./webpack.config.dev');

module.exports = function (config) {

    var runCoverage = process.env.COVERAGE === 'true';

    var coverageLoaders = [];
    var coverageReporters = [];

    // set upthe coverage loader and reporter, specifying the path you want to record coverage on
    if (runCoverage) {
        coverageLoaders.push({
            test: /\.jsx?/,
            include: path.resolve(__dirname, 'app/js/src'),
            loader: 'isparta'
        });

        coverageReporters.push('coverage');
    }

    config.set({
        browsers: ['PhantomJS'],
        frameworks: ['mocha'],

        files: [
            'node_modules/babel-polyfill/dist/polyfill.js',
            'tests.webpack.js'
        ],

        preprocessors: {
            'app/js/src/**/*.js': ['babel'],
            'tests.webpack.js': ['webpack', 'sourcemap']
        },

        // add the coverage reporter
        reporters: ['mocha'].concat(coverageReporters),

        webpack: {
            devtool: 'inline-source-map',
            module: {
                // add the coverage loader to the usuals
                loaders: [
                    { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['babel'] }
                ].concat(coverageLoaders)
            },
            // set the node environment to test
            plugins: [
                new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify('test') })
            ],
            // borrow the resolvers from the webpack config
            resolve: webpackConf.resolve,
            // this is for enzyme to work properly on react 14/15
            externals: {
                cheerio: 'window',
                'react/lib/ExecutionEnvironment': true,
                'react/lib/ReactContext': true,
                'react/addons': true
            }
        },

        webpackServer: {
            noInfo: true
        },

        coverageReporter: {
            reporters: [
                { type: 'html', subdir: 'html' },
                { type: 'lcovonly', subdir: '.' }
            ]
        },

        singleRun: true
    });
};

/* eslint-enable */
