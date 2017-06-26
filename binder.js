function createCallback(func) {
	return function() {
		func(this);
	};
}

function binder(elements_arr, eventtype) {
	for(x = 0; x < elements_arr.length; x++) {
		$(elements_arr[x][0]).on(eventtype, createCallback(elements_arr[x][1]));
	}
}
