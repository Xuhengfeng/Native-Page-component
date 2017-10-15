'use strict';

function getproduct() {
	let result;
	$.ajax({
		url: 'http://www.test.com',
		dataType: 'json',
		async: false
	}).done(function(data, status, xhr){
	 	result = data;
	})
	return result;
}
