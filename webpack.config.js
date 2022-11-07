const path = require("path")

const common = {
    devtool: "eval-source-map",
    mode: process.env.NODE_ENV,
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
            // 'react': path.resolve(__dirname, './node_modules/react'),
            // "styled-components": path.resolve(__dirname, "./node_modules/styled-components"),
            "@components": path.resolve(__dirname, "./src/components/index.ts"),
            "@hooks": path.resolve(__dirname, "./src/hooks/index.ts"),
            "@mui-components": path.resolve(__dirname, "./src/mui/components/index.ts"),
            "@mui-icons": path.resolve(__dirname, "./src/mui/icons/index.ts"),
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
                "mui",
                "react",
                "router",
            ]
        },
        mui: ["@mui/material", "@mui/icons-material", "@emotion/react", "@emotion/styled"],
        react: ["react", "react-dom",],
        router: ["react-router-dom"],
        //TODO: Remove "@nthity/react-menu", will cause large compile file,
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