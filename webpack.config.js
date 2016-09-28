module.exports = {
    entry: "./test.scss",
    output: {
        filename: "out.js"
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loader: "./sassLoader"
            }
        ]
    }
}