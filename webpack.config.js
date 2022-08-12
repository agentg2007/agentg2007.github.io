const path = require("path")

const common = {
    devtool: "eval-source-map",
    mode: "development",
    plugins: [],
    module: {
        rules: [
            {
                test: /\.(?:ts|tsx)$/,
                loader: "ts-loader",
                exclude: /node_modules/,
            }
        ]
    },
    resolve: {
        extensions: [".js", ".ts", ".tsx"],
        alias: {
            'react': path.resolve(__dirname, './node_modules/react'),
        },
    },
    node: {
        __filename: false,
        __dirname: false,
    },
}
module.exports = [{
    ...common,
    target: "web",
    entry: {
        app: {
            import: "./src/ui/index.tsx",
            dependOn: [
                "react"
            ]
        },
        react: ["react", "react-dom"],
    },
    output: {
        path: path.join(__dirname, "public"),
        filename: "[name].js"
    },
    optimization: {
        runtimeChunk: {
            name: "runtime"
        }
    },
}]