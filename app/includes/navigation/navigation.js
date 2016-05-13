require("./navigation.css");
var Module = require("theme_module_loader");
var JSContext = require("../../js/common/jscontext.js");
var htmlTemplate = require("./navigation.html");
var callback = require("./navigation-callback.js");
module.exports = {
    load: function(data) {
        var args = {
            id: "navigation",
            /* the div id to which the module will be appended */
            htmlTemplate: htmlTemplate,
            /* the Underscore template that will be used by the module */
            data: data,
            /* the data available in the module */
            callback: callback /* a function to execute after the module has been rendered. Wrap there any javascript for the module */
        };

        return new Module(args);
    }
}