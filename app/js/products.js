"use strict";
require("./common/data-loader.js").init("optimal");
var $ = require("jquery");
var JSContext = require("./common/jscontext.js");
var navigation = require("../includes/navigation/navigation.js").load();
var products = require("../includes/products/products.js").load();
var footer = require("../includes/footer/footer.js").load();
var css = require("./common/dynamic-css-loader.js");
var hero = require("../includes/hero/hero.js").load();
var contactForm = require("../includes/contact-form/contact-form.js").load();

var initializeTemplates = function () {
    var themeData = JSContext.getThemeData();
    navigation.init(window.JSContext);
    hero.init({
        title: themeData.products_header_text,
        tagline: themeData.products_tagline_text,
        background_picture: themeData.products_hero_background_picture
    });
    products.init(window.JSContext);
    if(themeData.show_products_contact_form) {
        contactForm.init(window.JSContext);
    };
    footer.init(window.JSContext);
};

$(document).ready(function () {
    css.loadDynamicCss();
    initializeTemplates();
});