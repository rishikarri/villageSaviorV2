
const preload = () => {
	console.log('preload');
}

const create = () => {
	console.log('create');
}

const update = () => {
	console.log('create');
}

var demo = {};
	demo.state1 = function(){};
 	demo.state1.prototype = {
 	preload: preload(),
 	create: create(),
 	update: update(),
 }; 