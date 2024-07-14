const HtmlWebpackPlugin = require("html-webpack-plugin");
        const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
        const { dependencies } = require("./package.json");
const { hostname } = require("os");
const { Output } = require("@mui/icons-material");
        
        module.exports = {
          output: {
            publicPath: "http://192.168.100.6:4000/", // Necesario para rutas anidadas (/path/nested-path)
          },
          entry: "./src/entry",
          mode: "development",
          devServer: {
            port: 4000, // Puerto donde se levanta la app
            host: "192.168.100.6",
            historyApiFallback: true, // Necesario para que funcione React Router
          },
          module: {
            rules: [
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
                MFFOOD: "mf_food_profile@http://192.168.100.6:4003/remoteEntry.js"
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