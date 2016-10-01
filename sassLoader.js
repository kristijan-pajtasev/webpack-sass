module.exports = function(source) {

    var sass = require('node-sass');
    var res = sass.renderSync({
        file: this.resourcePath
    }).css.toString().replace(/\n/gi, "");

    return `(function() { console.log("22");` +
        `var head = document.querySelector("head"); ` +
            `var style = document.createElement("style"); ` +
            `style.innerText="${res}";` +
            `head.appendChild(style);` +
            `})()`;
};