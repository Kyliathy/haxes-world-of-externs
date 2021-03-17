import js.html.SetTimeout;
import js.Node.console;
import js.node.Path;
import js.Node.__dirname;
import global.JasmineGlobal;
import global.Jasmine;

class Test {
	static function main() {
		SourceMapSupport.install();

		JasmineGlobal.describe("Jasmine", function() {
			JasmineGlobal.it("should have Env", function() {
				JasmineGlobal.expect(Jasmine.getEnv()).toBeDefined();
			});
		});

		console.dir("FUNCTION CALLS MADE");

		SetTimeout.call(() -> {
			console.log("Forced wait.");
		}, 4000);
	}
}
