import js.html.SetTimeout;
import js.Node.console;
import js.node.Path;
import js.Node.__dirname;

class Test {
	static function main() {
		SourceMapSupport.install();

		console.log(Chalk.value.blue("testing" + Chalk.value.underline("this") + Chalk.value.red(" some more")));

		SetTimeout.call(() -> {
			console.log("Forced wait.");
		}, 4000);
	}
}
