// Generated by Haxe 4.0.3
(function ($global) { "use strict";
var SourceMapSupport = require("source-map-support");
var Test = function() { };
Test.main = function() {
	SourceMapSupport.install();
	var transportsArr = [];
	var loggerOptions = { level : "info", format : logform_Format_$.json(), defaultMeta : { service : "user-service"}};
	var logger = Winston.createLogger(loggerOptions);
	logger.log("info","This is an info log.");
	logger.log("error","hi, i'm error");
	console.dir("FUNCTION CALLS MADE");
	setTimeout(function() {
		console.log("Forced Wait.");
		return;
	},1500);
};
var Winston = require("winston");
var js_node_stream__$Writable_WritableNewOptionsAdapter_$Impl_$ = {};
js_node_stream__$Writable_WritableNewOptionsAdapter_$Impl_$.from = function(options) {
	if(!Object.prototype.hasOwnProperty.call(options,"final")) {
		Object.defineProperty(options,"final",{ get : function() {
			return options.final_;
		}});
	}
	return options;
};
var js_node_url__$URLSearchParams_URLSearchParamsEntry_$Impl_$ = {};
js_node_url__$URLSearchParams_URLSearchParamsEntry_$Impl_$._new = function(name,value) {
	var this1 = [name,value];
	return this1;
};
js_node_url__$URLSearchParams_URLSearchParamsEntry_$Impl_$.get_name = function(this1) {
	return this1[0];
};
js_node_url__$URLSearchParams_URLSearchParamsEntry_$Impl_$.get_value = function(this1) {
	return this1[1];
};
var logform_Format_$ = require("logform").format;
Test.main();
})({});

//# sourceMappingURL=main.js.map