"use strict";
require("./common/data-loader.js").init("optimal");
var $ = require("jquery");
var JSContext = require("./common/jscontext.js");
var navigation = require("../includes/navigation/navigation.js").load();
var events = require("../includes/events/events.js").load();
var footer = require("../includes/footer/footer.js").load();
var css = require("./common/dynamic-css-loader.js");
var hero = require("../includes/hero/hero.js").load();
var contactForm = require("../includes/contact-form/contact-form.js").load();

var getEventsData = function () {
    var events = JSContext.getEvents();
    return {
        events: events,
        baseLink: JSContext.getBaseLink(),
        truncated: false
    };
};

var initializeTemplates = function () {
    var themeData = JSContext.getThemeData();
    navigation.init(window.JSContext);
    hero.init({
        title: window.JSContext.theme_data.events_header_text,
        tagline: window.JSContext.theme_data.events_tagline_text,
        background_picture: themeData.events_hero_background_picture
    });
    if(themeData.show_events_contact_form) {
        contactForm.init(window.JSContext);
    }
    events.init(getEventsData());
    footer.init(window.JSContext);
};

$(document).ready(function () {
    css.loadDynamicCss();
    initializeTemplates();
});