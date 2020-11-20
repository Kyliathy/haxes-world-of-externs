# Synopsis

simple-git was not working using definitions generated via dts2hx.

simple-git functionality can be tested in the `js` directory.

haxe functionality can be tested in the `haxe` directory.

# Resolution

This now works. Ideally, the type definitions should be generated using dts2hx 0.15.

https://github.com/haxiomic/dts2hx/issues/73

The currently pushed version is using `untyped` "hack", as suggested here:

https://community.haxe.org/t/js-extern-trouble-how-to-make-a-callback-function-out-of-a-typedef/2769/4