const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { dependencies } = require("./package.json");
const { hostname } = require("os");
const { Output } = require("@mui/icons-material");
require('dotenv').config()
const Dotenv = require('dotenv-webpack');
        
        module.exports = {
          plugins: [
            new HtmlWebpackPlugin({
              template: "./public/index.html",
            }),
            new Dotenv(),
            new ModuleFederationPlugin({
              name: "EyesFood", // Aqui se define el nombre de la aplicación
              remotes: {
                MFACC: `mf_accounts@http://localhost:8081/mf-accounts/remoteEntry.js`, // Nombre de la aplicación hijo + @http://ip-MF-Hijo:puerto-MF-Hijo/RemoteEntry.js
                MFFOOD: "mf_food_profile@http://localhost:8081/mf-food-profile/remoteEntry.js",
                MFUSER: "mf_user_profile@http://localhost:8081/mf-user-profile/remoteEntry.js",
                MFEDIT: "mf_food_edits@http://localhost:8081/mf-food-edits/remoteEntry.js",
                MFDIARY: "mf_food_diary@http://localhost:8081/mf-diary/remoteEntry.js",
                MFEXPERT: "mf_expert_profile@http://localhost:8081/mf-expert-profile/remoteEntry.js",
                MFSTORE: "mf_store_profile@http://localhost:8081/mf-store-profile/remoteEntry.js",
                MFNOTIF: "mf_notification@http://localhost:8081/mf-notification/remoteEntry.js",
                MFSTATS: "mf_stats@http://localhost:8081/mf-stats/remoteEntry.js",
              },
              shared: {
                ...dependencies, // other dependencies
                react: {
                  singleton: true,
                  requiredVersion: dependencies["react"],
                },
                "react-dom": {
                  singleton: true,
                  requiredVersion: dependencies["react-dom"],
                },
                'react-router-dom': {
                  singleton: true,
                },
              },
            }),
          ],
          output: {
            publicPath: "http://localhost:" + process.env.REACT_APP_PORT + "/", // Necesario para rutas anidadas (/path/nested-path)
          },
          entry: "./src/entry",
          mode: "development",
          devServer: {
            port: process.env.REACT_APP_PORT, // Puerto donde se levanta la app
            host: "0.0.0.0",
            historyApiFallback: true, // Necesario para que funcione React Router
            allowedHosts: 'all',
            headers: {
              "Access-Control-Allow-Origin": "*",
              'Cache-Control': 'no-cache, no-store, must-revalidate',
            }
          },
          module: {
            rules: [
              {
                test: /\.svg$/,
                use: ['@svgr/webpack'],
              },
              {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
              },
              {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: [
                  {
                    loader: "babel-loader",
                    options: {
                      presets: [
                        "@babel/preset-env",
                        "@babel/preset-react",
                        "@babel/preset-typescript",
                      ],
                    },
                  },
                ],
              },
              {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ["@babel/preset-env", "@babel/preset-react"],
                  },
                },
              },
              {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
              },
            ],
          },
          
          resolve: {
            extensions: [".js", ".jsx", ".ts", ".tsx"],
          },
          target: "web",
        };

console.log('REACT_APP_PORT:', process.env.REACT_APP_PORT);
console.log('REACT_APP_BASE_URL:', process.env.REACT_APP_BASE_URL);