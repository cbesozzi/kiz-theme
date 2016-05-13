var Module = require("theme_module_loader");
var JSContext = require("../../js/common/jscontext.js");
var htmlTemplate = require("./events.html");
var defaultEvent = require("./event-default.html");
var templates = {
    defaultEvent: defaultEvent,
}

/* Even if we have only one template we follow the same convention for the posts module */
var callback = function(){};

var renderEventTemplate = function(event, templates) {
    var eventType = "defaultEvent";
    var eventTemplate = _.template(templates[eventType]);
    return eventTemplate(_.extend(event));
};

module.exports = {
    load: function(data) {
        var args = {
            id: "events",
            /* the div id to which the module will be appended */
            htmlTemplate: htmlTemplate,
            /* the Underscore template that will be used by the module */
            callback: callback, /* a function to execute after the module has been rendered. Wrap there any javascript for the module */
            helpers: {
                renderEventTemplate: renderEventTemplate,
                templates: templates
            }
        };
        return new Module(args);
    }
}