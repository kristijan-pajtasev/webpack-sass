module.exports = function(source) {

    var css = "body { background: black; color: white; }";
    var styleTag = `'<style type="text/css">${css}</style>'`;

    //var link = document.createElement("link")
    //undefined
    //link.innerText
    //""

    //var head = document.querySelector("head");
    //var style = document.createElement("style");
    //style.innerText = css;
    //style.type = "text/javascript";
    //head.appendChild(style);

    //  var style = document.createElement("style"); style.innerText = ${css}; style.type = "text/javascript"; head.appendChild(style);

    return `(function() { console.log("22");` +
        `var head = document.querySelector("head"); ` +
            `var style = document.createElement("style"); ` +
            `style.innerText="${css}";` +
            `head.appendChild(style);` +
            `})()`;
};