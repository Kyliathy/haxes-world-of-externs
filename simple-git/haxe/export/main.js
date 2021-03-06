// Generated by Haxe 4.0.3
(function ($global) { "use strict";
var SimpleGit = require("simple-git");
var SourceMapSupport = require("source-map-support");
var Test = function() { };
Test.checkIsRepoCallback = function(err,data) {
	console.dir(err);
	console.dir(data);
};
Test.tagResultCallback = function(err,data) {
	console.dir(err);
	console.dir(data);
};
Test.statusResultCallback = function(err,data) {
	console.dir(err);
	console.dir(data);
};
Test.main = function() {
	SourceMapSupport.install();
	var funcCheckIsRepoCallback = Test.checkIsRepoCallback;
	var funcTagResultCallback = Test.tagResultCallback;
	var funcStatusResultCallback = Test.statusResultCallback;
	var options = { baseDir : "../../../haxes-world-of-externs/", maxConcurrentProcesses : 6, binary : "git"};
	var simpleGit = SimpleGit.default(null,options);
	simpleGit.checkIsRepo(simple_$git__$CheckRepoActions_CheckRepoActions_$Impl_$.IS_REPO_ROOT,funcCheckIsRepoCallback);
	simpleGit.tags(null,funcTagResultCallback);
	simpleGit.status(null,funcStatusResultCallback);
	console.dir("FUNCTION CALLS MADE");
	setTimeout(function() {
		console.log("Forced wait.");
		return;
	},4000);
};
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
var simple_$git__$CheckRepoActions_CheckRepoActions_$Impl_$ = require("simple-git").CheckRepoActions;
Test.main();
})({});

//# sourceMappingURL=main.js.map