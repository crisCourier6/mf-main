const HtmlWebpackPlugin = require("html-webpack-plugin");
        const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
        const { dependencies } = require("./package.json");
const { hostname } = require("os");
const { Output } = require("@mui/icons-material");
require("dotenv").config()
        
        module.exports = {
          output: {
            publicPath: "http://" + process.env.REACT_APP_BASE_URL + ":" + process.env.REACT_APP_PORT + "/", // Necesario para rutas anidadas (/path/nested-path)
          },
          entry: "./src/entry",
          mode: "development",
          devServer: {
            port: process.env.REACT_APP_PORT, // Puerto donde se levanta la app
            host: process.env.REACT_APP_BASE_URL,
            historyApiFallback: true, // Necesario para que funcione React Router
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
          plugins: [
            new HtmlWebpackPlugin({
              template: "./public/index.html",
            }),
            new ModuleFederationPlugin({
              name: "EyesFood", // Aqui se define el nombre de la aplicación
              remotes: {
                MFACC: "mf_accounts@http://192.168.100.6:4001/remoteEntry.js", // Nombre de la aplicación hijo + @http://ip-MF-Hijo:puerto-MF-Hijo/RemoteEntry.js
                MFFOOD: "mf_food_profile@http://192.168.100.6:4003/remoteEntry.js",
                MFUSER: "mf_user_profile@http://192.168.100.6:4004/remoteEntry.js"
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
          resolve: {
            extensions: [".js", ".jsx", ".ts", ".tsx"],
          },
          target: "web",
        };