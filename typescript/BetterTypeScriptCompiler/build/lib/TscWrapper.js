"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var child_process_1 = require("child_process");
var TscWrapper = /** @class */ (function () {
    function TscWrapper() {
        this.todoOnClose = function () { };
    }
    TscWrapper.prototype.setLogger = function (logger) {
        this.logger = logger;
    };
    TscWrapper.prototype.start = function () {
        var _this = this;
        this.logger.log("-- Tsc Starting --");
        this.childTsc = child_process_1.spawn("tsc", ["-p", "tsconfig.json", "-w"]);
        this.childTsc.stdout.on("data", function (data) {
            _this.logger.log(data);
        });
        this.childTsc.stderr.on("data", function (data) {
            _this.logger.log(data);
        });
        this.childTsc.on("close", function (code) {
            _this.logger.log("-- Tsc Closed --");
            _this.todoOnClose();
        });
    };
    TscWrapper.prototype.stop = function () {
        var _this = this;
        this.logger.log("-- Tsc Stopping --");
        this.childTsc.kill();
        return {
            onComplete: function (todoOnClose) {
                _this.todoOnClose = todoOnClose;
            },
        };
    };
    return TscWrapper;
}());
exports.TscWrapper = TscWrapper;
