"use strict";
exports.__esModule = true;
var url = require("url");
var Request = /** @class */ (function () {
    function Request(req) {
        this.req = req;
    }
    Object.defineProperty(Request.prototype, "query", {
        get: function () {
            return url.parse(this.req.url, true).query;
        },
        enumerable: true,
        configurable: true
    });
    return Request;
}());
exports["default"] = Request;
