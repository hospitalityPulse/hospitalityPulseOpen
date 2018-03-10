"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var Logger = /** @class */ (function () {
    function Logger() {
    }
    Logger.createWithFile = function (file) {
        var logger = new Logger();
        logger.useFile(file);
        return logger;
    };
    Logger.prototype.useFile = function (file) {
        var _this = this;
        this.queue = [];
        this.queueFlushable = false;
        fs.open(file, "a+", 438, function (err, fd) {
            _this.fd = fd;
            _this.queueFlushable = true;
            _this.writeQueue();
        });
    };
    Logger.prototype.writeQueue = function () {
        if (this.queue.length > 0) {
            this.writeNextFromQueue();
        }
    };
    Logger.prototype.log = function (line) {
        this.queue.push({
            line: line,
            requested: new Date(),
        });
        this.writeQueueIfFlushable();
    };
    Logger.prototype.writeQueueIfFlushable = function () {
        if (this.queueFlushable) {
            this.writeQueue();
        }
    };
    Logger.prototype.writeNextFromQueue = function () {
        var _this = this;
        this.queueFlushable = false;
        var log = this.queue.shift();
        var message = "[" + log.requested.toUTCString() + "] " + log.line + "\n";
        fs.write(this.fd, message, null, "utf8", function (err, written, string) {
            _this.queueFlushable = true;
            _this.writeQueue();
        });
    };
    return Logger;
}());
exports.Logger = Logger;
