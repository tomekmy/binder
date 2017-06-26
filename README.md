How to use (click event example):

```
// Two dimensional array with jQuery selector/s and function name
var clickElements = [
	['.class', yourFunc1],
	['span[contenteditable="true"], #id', yourFunc2],
	['jQuery selector', yourFunc3]
];

binder(clickElements, 'click');
```
