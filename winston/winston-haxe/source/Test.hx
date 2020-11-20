import js.Node.console;
import js.node.Path;
import js.Node.__dirname;
import js.Browser;
import js.html.SetTimeout;
import winston.LoggerOptions;
import logform.Format_;
import winston.transports.Transports;
import winston.transports.FileTransportInstance;
import winston.Transport;

class Test {
	static function main() {
		SourceMapSupport.install();

		var transportsArr:Array<Transport> = new Array<Transport>();

		// crash: TypeError: winston_Transport is not a constructor
		// var transportErr:Transport = new Transport();

		// compile error: missing fields in object initalizer. After which another error saying
		// { filename : String } should be winston.transports.FileTransportInstance
		// var transportErr:FileTransportInstance = {filename: "error.log"};

		// transportsArr.push(transportErr);

		var loggerOptions:LoggerOptions = {
			level: "info",
			// commenting out transports (and the above errors) actually makes it work,
			// but of course nothing is logged (and the library warns about it).
			// transports: transportsArr,
			format: Format_.json(),
			defaultMeta: {service: 'user-service'},
		};

		var logger:winston.Logger = Winston.createLogger(loggerOptions);

		logger.log("info", "This is an info log.");
		logger.log("error", "hi, i'm error");

		console.dir("FUNCTION CALLS MADE");

		SetTimeout.call(() -> {
			console.log("Forced Wait.");
		}, 1500);
	}
}
