const path = require("path")

const common = {
    devtool: "eval-source-map",
    mode: "production",
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
            "styled-components": path.resolve(__dirname, "./node_modules/styled-components"),
            "@components": path.resolve(__dirname, "./src/components/index.ts"),
            "@mui-components": path.resolve(__dirname, "./src/components/mui-components/index.ts"),
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
            import: "./src/index.tsx",
            dependOn: [
                "react", "mui"
            ]
        },
        mui: ["@mui/material", "@emotion/react", "@emotion/styled"],
        react: ["react", "react-dom"],
    },
    output: {
        path: path.join(__dirname, "scripts"),
        filename: "[name].js"
    },
    optimization: {
        runtimeChunk: {
            name: "runtime"
        }
    },
}]