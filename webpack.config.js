// Import node modules
const path = require( "path" );
const HtmlWebpackPlugin = require( "html-webpack-plugin" );

// Set Webpack configuration module
module.exports = {
    mode: "development", // 'production',
    entry: {
        main: path.resolve( __dirname, "src/app.js" ) // Set starting point of project (multiple entries are supported)
    },
    output: {
        path: path.resolve( __dirname, "dist" ), // Set distribution folder of project
        filename: "[name].[contenthash].js", // Get default entry name and add a unique hash for version control
        assetModuleFilename: "[name][ext]", // Use default filename of assets in output files
        clean: true // Empty cache (dist folder)
    },
    devtool: "inline-source-map", // Show's the browser where errors came from
    devServer: { // Settings for our server
        static: path.resolve( __dirname, "dist" ), // Set root folder of our server
        port: 5001, // Default is 8080
        open: true, // Launches webbrowser on build
        hot: true // Enables reload browser on save
    },
    // Set loaders (Webpack understands JS and Json by default, but for all other files we need loaders)
    module: {
        rules: [
            // CSS loader
            { test: /\.css$/, use: [ "style-loader", "css-loader" ] }, // Reads from right to left: Css-loader looks for file and turns it into a loader, Style-loader takes the file and inject it into html file.
            // Image loader
            { test: /\.(svg|ico|png|webp|jpg|gif|jpeg)$/, type: "asset/resource" },
            // JS for Babel loader (make your exports backward compatible to ES5)
            {
                test: /\..js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    // Set plugins (Injects our main app directly in our index.html)
    plugins: [ new HtmlWebpackPlugin( {
        title: "Boilerplate Webpack App",
        filename: "index.html",
        template: path.resolve( __dirname, "src/template.html" ) // Set a template that will be injected in index.html
    } ) ]
};