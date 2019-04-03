/**
* Description of the Controller and the logic it provides
*
* @module  controllers/HassanHelloWorld
*/

'use strict';

// HINT: do not put all require statements at the top of the file
// unless you really need them for all functions

/**
* Description of the function
*
* @return {String} The string 'myFunction'
*/

var guard = require('storefront_controllers/cartridge/scripts/guard');
var ISML = require('dw/template/ISML');
function start() {
	ISML.renderTemplate(
			'hassanhelloworld1.isml',
		{
		 hassanParameteronISML:"Hello from Hassan's Controllers"
		}
	);
};
exports.Start = guard.ensure(['get'], start);

/* Exports of the controller */
///**
// * @see {@link module:controllers/HassanHelloWorld~myFunction} */
//exports.MyFunction = myFunction;

