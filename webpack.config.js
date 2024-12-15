const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { dependencies } = require("./package.json");
const { hostname } = require("os");
const { Output } = require("@mui/icons-material");
const dotenv = require("dotenv")
const webpack = require("webpack")
dotenv.config()
console.log(process.env.REACT_APP_GATEWAY_URL)
        module.exports = {
          plugins: [
            new webpack.DefinePlugin({
              "process.env.REACT_APP_GATEWAY_URL": JSON.stringify(process.env.REACT_APP_GATEWAY_URL),
              "process.env.REACT_APP_GOOGLE_CLIENT_ID": JSON.stringify(process.env.REACT_APP_GOOGLE_CLIENT_ID),
              "process.env.REACT_APP_SCANNER_URL": JSON.stringify(process.env.REACT_APP_SCANNER_URL)
            }),
            new HtmlWebpackPlugin({
              template: "./public/index.html",
            }),
            new ModuleFederationPlugin({
              name: "EyesFood", // Aqui se define el nombre de la aplicación
              remotes: {
                MFACC: `mf_accounts@${process.env.MF_ACCOUNTS_URL}/remoteEntry.js`, // Nombre de la aplicación hijo + @http://ip-MF-Hijo:puerto-MF-Hijo/RemoteEntry.js
                MFFOOD: `mf_food_profile@${process.env.MF_FOOD_PROFILE_URL}/remoteEntry.js`,
                MFUSER: `mf_user_profile@${process.env.MF_USER_PROFILE_URL}/remoteEntry.js`,
                MFEDIT: `mf_food_edits@${process.env.MF_FOOD_EDITS_URL}/remoteEntry.js`,
                MFDIARY: `mf_food_diary@${process.env.MF_FOOD_DIARY_URL}/remoteEntry.js`,
                MFEXPERT: `mf_expert_profile@${process.env.MF_EXPERTS_URL}/remoteEntry.js`,
                MFSTORE: `mf_store_profile@${process.env.MF_STORES_URL}/remoteEntry.js`,
                MFNOTIF: `mf_notification@${process.env.MF_NOTIFICATIONS_URL}/remoteEntry.js`,
                MFSTATS: `mf_stats@${process.env.MF_STATS_URL}/remoteEntry.js`,
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
            publicPath: process.env.REACT_APP_PUBLIC_PATH || '/', // Necesario para rutas anidadas (/path/nested-path)
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