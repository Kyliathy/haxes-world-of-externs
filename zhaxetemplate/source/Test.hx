import js.html.SetTimeout;
import js.Node.console;
import js.node.Path;
import js.Node.__dirname;
import simple_git.SimpleGitOptions;
import simple_git.SimpleGitTaskCallback;
import simple_git.TagResult;

class Test {

	static function main() {
		SourceMapSupport.install();

		console.dir("FUNCTION CALLS MADE");

		SetTimeout.call(() -> {
			console.log("Forced wait.");
		}, 4000);
	}
}
