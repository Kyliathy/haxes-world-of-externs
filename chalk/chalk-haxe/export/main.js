// Generated by Haxe 4.0.3
(function ($global) { "use strict";
function $extend(from, fields) {
	var proto = Object.create(from);
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
var Chalk = require("chalk");
Math.__name__ = true;
var SourceMapSupport = require("source-map-support");
var Std = function() { };
Std.__name__ = true;
Std.string = function(s) {
	return js_Boot.__string_rec(s,"");
};
var Test = function() { };
Test.__name__ = true;
Test.main = function() {
	SourceMapSupport.install();
	console.log(Chalk.blue("testing" + Std.string(Chalk.underline("this")) + Std.string(Chalk.red(" some more"))));
	setTimeout(function() {
		console.log("Forced wait.");
		return;
	},4000);
};
var js__$Boot_HaxeError = function(val) {
	Error.call(this);
	this.val = val;
	if(Error.captureStackTrace) {
		Error.captureStackTrace(this,js__$Boot_HaxeError);
	}
};
js__$Boot_HaxeError.__name__ = true;
js__$Boot_HaxeError.__super__ = Error;
js__$Boot_HaxeError.prototype = $extend(Error.prototype,{
});
var js_Boot = function() { };
js_Boot.__name__ = true;
js_Boot.__string_rec = function(o,s) {
	if(o == null) {
		return "null";
	}
	if(s.length >= 5) {
		return "<...>";
	}
	var t = typeof(o);
	if(t == "function" && (o.__name__ || o.__ename__)) {
		t = "object";
	}
	switch(t) {
	case "function":
		return "<function>";
	case "object":
		if(((o) instanceof Array)) {
			var str = "[";
			s += "\t";
			var _g3 = 0;
			var _g11 = o.length;
			while(_g3 < _g11) {
				var i = _g3++;
				str += (i > 0 ? "," : "") + js_Boot.__string_rec(o[i],s);
			}
			str += "]";
			return str;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( e1 ) {
			var e2 = ((e1) instanceof js__$Boot_HaxeError) ? e1.val : e1;
			return "???";
		}
		if(tostr != null && tostr != Object.toString && typeof(tostr) == "function") {
			var s2 = o.toString();
			if(s2 != "[object Object]") {
				return s2;
			}
		}
		var str1 = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		var k = null;
		for( k in o ) {
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
			continue;
		}
		if(str1.length != 2) {
			str1 += ", \n";
		}
		str1 += s + k + " : " + js_Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str1 += "\n" + s + "}";
		return str1;
	case "string":
		return o;
	default:
		return String(o);
	}
};
var js_node_stream__$Writable_WritableNewOptionsAdapter_$Impl_$ = {};
js_node_stream__$Writable_WritableNewOptionsAdapter_$Impl_$.__name__ = true;
js_node_stream__$Writable_WritableNewOptionsAdapter_$Impl_$.from = function(options) {
	if(!Object.prototype.hasOwnProperty.call(options,"final")) {
		Object.defineProperty(options,"final",{ get : function() {
			return options.final_;
		}});
	}
	return options;
};
var js_node_url__$URLSearchParams_URLSearchParamsEntry_$Impl_$ = {};
js_node_url__$URLSearchParams_URLSearchParamsEntry_$Impl_$.__name__ = true;
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
String.__name__ = true;
Array.__name__ = true;
Object.defineProperty(js__$Boot_HaxeError.prototype,"message",{ get : function() {
	return String(this.val);
}});
js_Boot.__toStr = ({ }).toString;
Test.main();
})({});

//# sourceMappingURL=main.js.map