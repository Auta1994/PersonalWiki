function getScript(src) {
    var scriptObj = document.createElement('script');
    scriptObj.src = src;
    scriptObj.type = 'text/javascript';
    document.getElementByClassName('book').appendChild(scriptObj);
}

window.onload = function () {
    getScript('src/jquety-2.1.4.min.js');
    getScript('src/application.js');
};