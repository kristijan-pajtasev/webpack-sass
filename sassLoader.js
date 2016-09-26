module.exports = function(source) {

    var css = "body { background: black;  }";
    var styleTag = `'<style type="text/css">${css}</style>'`;

    //var link = document.createElement("link")
    //undefined
    //link.innerText
    //""

    return `(function() { ${styleTag} })()`;
};