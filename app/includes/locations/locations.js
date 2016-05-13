var Module = require("theme_module_loader");
var JSContext = require("../../js/common/jscontext.js");
var viewHelpers = require("../../js/common/view-helpers.js");
var imageResizerHelpers = require("../../js/common/image-resizing.js");
var htmlTemplate = require("./locations.html");
var mapWidget = require("../../js/common/map-tools.js");

var show = function(el) {
    console.log("showing map");
    var address = $(el).find(".address-text").text().trim();
    var container = $(el).find(".mapbox-map")[0];
    mapWidget.showSwappableMap(address, container.id, {});
};

var callback = function() {
    var initialPanel = $('.active.office-link').find('a').attr('href');
    if (initialPanel) {
        show(initialPanel);
    }

    $('a[data-toggle="tab"]').on('shown.bs.tab', function(e) {
        show(e.target.hash);
    });
};

module.exports = {
    load: function(data) {
        var args = {
            id: "locations",
            /* the div id to which the module will be appended */
            htmlTemplate: htmlTemplate,
            /* the Underscore template that will be used by the module */
            callback: callback,
            /* a function to execute after the module has been rendered. Wrap there any javascript for the module */
            helpers: {
                view: viewHelpers,
                imageResizer: imageResizerHelpers
            }
        };

        return new Module(args);
    }
}