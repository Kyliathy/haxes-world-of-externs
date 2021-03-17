import js.html.SetTimeout;
import js.Node.console;
import js.node.Path;
import js.Node.__dirname;
import haxe.ds.StringMap;
import log4js.Logger;
import log4js.Configuration;

class Test {
	static function main() {
		SourceMapSupport.install();

		console.dir("FUNCTION CALLS MADE");

		var logger:Logger = Log4js.getLogger("yamma");
		var gugu:StringMap<Dynamic> = new StringMap<Dynamic>();
		var bubu:Array<String> = new Array<String>();
		bubu.push("cheese");
		gugu.set("default", {appenders: bubu, level: "error"});

		var stringConfig:String = '{"default": {"appenders": ["cheese"], "level": "error" } }';
		var objectConfig:Dynamic = haxe.Json.parse(stringConfig);
		console.dir(objectConfig);

		var config:Configuration = {
			appenders: {cheese: {type: "file", filename: "cheese.log"}},
			categories: objectConfig

			// categories: {default: {appenders: ["cheese"], level: "error"}}
		};

		// config.categories.default = {appenders: ["cheese"], level: "error"};
		Log4js.configure(config);

		logger.level = "debug";
		logger.debug("Some debug messages");

		SetTimeout.call(() -> {
			console.log("Forced wait.");
		}, 4000);
	}
}
