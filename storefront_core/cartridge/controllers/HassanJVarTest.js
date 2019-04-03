/**
* Description of the Controller and the logic it provides
*
* @module  controllers/HassanJVarTest
*/

'use strict';

var guard = require('storefront_controllers/cartridge/scripts/guard');
var ISML = require('dw/template/ISML');
function start() {
	ISML.renderTemplate(
			'hassanvartest.isml'
		);
};
exports.Start = guard.ensure(['get'], start);
