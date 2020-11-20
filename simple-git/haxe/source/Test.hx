import simple_git.StatusResult;
import js.html.SetTimeout;
import js.Node.console;
import js.node.Path;
import js.Node.__dirname;
import simple_git.SimpleGitOptions;
import simple_git.SimpleGitTaskCallback;
import simple_git.TagResult;

class Test {
	public static function checkIsRepoCallback(err:Dynamic, data:Bool):Void {
		console.dir(err);
		console.dir(data);
	}

	public static function tagResultCallback(err:Dynamic, data:TagResult):Void {
		console.dir(err);
		console.dir(data);
	}

	public static function statusResultCallback(err:Dynamic, data:StatusResult):Void {
		console.dir(err);
		console.dir(data);
	}

	static function main() {
		SourceMapSupport.install();

		var funcCheckIsRepoCallback:SimpleGitTaskCallback<Bool> = untyped checkIsRepoCallback;

		var funcTagResultCallback:SimpleGitTaskCallback<TagResult> = untyped tagResultCallback;

		var funcStatusResultCallback:SimpleGitTaskCallback<StatusResult> = untyped statusResultCallback;

		// console.dir(Path.join(__dirname, "../../"));
		var options:SimpleGitOptions = {baseDir: "../../../haxes-world-of-externs/", maxConcurrentProcesses: 6, binary: "git"};

		var simpleGit = SimpleGit.default_(options);

		simpleGit.checkIsRepo({IS_REPO_ROOT;}, funcCheckIsRepoCallback);
		simpleGit.tags(null, funcTagResultCallback);
		simpleGit.status(null, funcStatusResultCallback);

		console.dir("FUNCTION CALLS MADE");

		SetTimeout.call(() -> {
			console.log("Forced wait.");
		}, 4000);
	}
}
