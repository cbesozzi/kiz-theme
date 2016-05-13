var Module = require("theme_module_loader");
var JSContext = require("../../js/common/jscontext.js");
var htmlTemplate = require("./css-block.html");
var callback = function(){};
module.exports = {
    load: function() {
        var args = {
            htmlTemplate: htmlTemplate,
        };

        return new Module(args);
    }
}