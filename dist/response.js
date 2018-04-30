"use strict";
exports.__esModule = true;
var Response = /** @class */ (function () {
    function Response(res) {
        this.res = res;
    }
    Object.defineProperty(Response.prototype, "body", {
        get: function () {
            return this._body;
        },
        set: function (data) {
            this._body = data;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Response.prototype, "status", {
        get: function () {
            return this.res.statusCode;
        },
        set: function (statusCode) {
            if (typeof statusCode !== 'number') {
                throw new Error('statusCode must be a number!');
            }
            this.res.statusCode = statusCode;
        },
        enumerable: true,
        configurable: true
    });
    return Response;
}());
exports["default"] = Response;
