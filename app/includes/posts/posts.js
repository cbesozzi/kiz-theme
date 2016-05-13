var $ = require("jquery");
var Module = require("theme_module_loader");
var JSContext = require("../../js/common/jscontext.js");
var htmlTemplate = require("./posts.html");
var callback = function() {
     $(".hs-post .message").dotdotdot({});
};
var data = window.JSContext;
var imageAndMessage = require("./posts-image-and-message.html");
var textOnly = require("./posts-text-only.html");
var linkOnly = require("./posts-link-only.html");
var imageOnly = require("./posts-image-only.html");
var linkAndMessage = require("./posts-link-and-message.html");

var templates = {
    textOnly: textOnly,
    imageOnly: imageOnly,
    linkOnly: linkOnly,
    imageAndMessage: imageAndMessage,
    linkAndMessage: linkAndMessage
};

var renderPostType = function(post, templates) {
    var postType;
    if (post.link && post.message) {
        postType = "linkAndMessage";
    } else if (post.link && !post.message) {
        postType = "linkOnly";
    } else if (post.image && !post.message) {
        postType = "imageOnly";
    } else if (post.image && post.message) {
        postType = "imageAndMessage";
    } else if (post.message && !post.image && !post.link) {
        postType = "textOnly";
    }
    var postTemplate = _.template(templates[postType]);
    return postTemplate(post);
};

module.exports = {
    load: function() {
        var args = {
            id: "posts",
            /* the div id to which the module will be appended */
            htmlTemplate: htmlTemplate,
            /* the Underscore template that will be used by the module */
            data: data,
            /* the data available in the module */
            callback: callback, /* a function to execute after the module has been rendered. Wrap there any javascript for the module */
            helpers: {
                renderPostType: renderPostType,
                templates: templates
            }
        };

        return new Module(args);
    }
}