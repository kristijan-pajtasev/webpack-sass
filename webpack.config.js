module.exports = {
    entry: "./entry",
    output: {
        filename: "out.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: "./sassLoader"
            }
        ]
    }
}