# Welcome to the wonderful world of Haxe Externs

This repository is used to debug & test Haxe externs.

Each directory represents a JavaScript library. In that directory, a JavaScript and a Haxe directory can be found. 

Each of these directories contain sa test of using that respective library, one for JavaScript (to show how the library works natively) and one for Haxe (to show how it can be used via Externs).

The Haxe directory may contain a launch.bat file that can be used for Windows to build & run the library. The Haxe libraries may have issues that are currently debugged.

The Haxe directory is created around a simple web application that tests the JavaScript library.

In the `zhaxetemplate` directory there is a bare-bones Haxe Node JS application (with source map support) used to create new testing grounds for libraries. After it has been copied over somewhere, the following commands will need to be run:
- haxelib install hxnodejs
- npm install dts2hx
- npm install source-map-support
- npm install @types/source-map-support
- npm install @types/node
- npx dts2hx node
- npx dts2hx source-map-support

New JavaScript libraries should simply be added by dropping them in a directory and using them there, to test how they work.