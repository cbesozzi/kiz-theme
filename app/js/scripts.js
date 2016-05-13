"use strict";
require("./common/data-loader.js").init("optimal");
var $ = require("jquery");
var JSContext = require("./common/jscontext.js");
var navigation = require("../includes/navigation/navigation.js").load();
var profile = require("../includes/profile/profile.js").load();
var posts = require("../includes/posts/posts.js").load();
var events = require("../includes/events/events.js").load();
var products = require("../includes/products/products.js").load();
var locations = require("../includes/locations/locations.js").load();
var footer = require("../includes/footer/footer.js").load();
var header = require("../includes/header/header.js").load();
var css = require("./common/dynamic-css-loader.js");
var contactForm = require("../includes/contact-form/contact-form.js").load();

var getPostsData = function (n) {
    return {
        posts: JSContext.getPosts(n),
        baseLink: JSContext.getBaseLink(),
        truncated: false
    };
};

var getEventsData = function (n) {
    var events = JSContext.getEvents(n);
    return {
        events: events,
        baseLink: JSContext.getBaseLink(),
        truncated: false
    };
};

var getHeaderData = function () {
    var themeData = JSContext.getThemeData();
    return {
        baseLink: JSContext.getBaseLink(),
        logo: themeData.logo_header,
        links: {
            corporateLink: themeData.corp_header_link_1,
            careersLink: themeData.corp_header_link_2,
            customerLoginLink: themeData.customer_login_link
        }
    };
};



var initializeTemplates = function () {
    var themeData = JSContext.getThemeData();
    navigation.init(window.JSContext);
    profile.init(window.JSContext);
    contactForm.init(window.JSContext);

    if (themeData.show_events) {
        events.init($.extend({theme_data : themeData}, getEventsData(3)));
        /* The module loader takes a second parameter which over-write the default ID in which the module is injected */
        header.init({
            title: themeData.events_header_text,
            link: "/events.html",
            condition: window.JSContext.events.length
        }, "events-header");
    }

    if (themeData.show_products) {
        products.init(window.JSContext);
        /* The module loader takes a second parameter which over-write the default ID in which the module is injected */
        header.init({
            title: themeData.products_header_text,
            link: "/products.html",
            condition: themeData.products.length
        }, "products-header");
    }

    if (themeData.show_news) {
        posts.init($.extend({theme_data : themeData}, getPostsData(3)));
        /* The module loader takes a second parameter which over-write the default ID in which the module is injected */
        header.init({
            title: themeData.news_header_text,
            link: "/news.html",
            condition: window.JSContext.posts.length
        }, "posts-header");
    }

    locations.init(window.JSContext);
    footer.init(window.JSContext);
};

$(document).ready(function () {
    css.loadDynamicCss();
    initializeTemplates();
});