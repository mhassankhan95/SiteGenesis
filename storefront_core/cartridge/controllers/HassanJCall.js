/**
* Description of the Controller and the logic it provides
*
* @module  controllers/JCall
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
	var myParam = request.HttpParameterMap.param.stringValue;
	
	/* Use the quickcard section “Dealing with query parameters” get the
	Parameter named param */
	
		if (myParam != null) {
		
			/* Use the quickcard section “Giving control to ISML” to give control
			to call/jnotEmpty.isml
			and loading myParam on a variable paramOnPdict
			 */
			
			ISML.renderTemplate('call/hassanjnotempty.isml', { paramOnPdict: myParam; });
		} else { ISML.renderTemplate('call/hassanjempty.isml', { paramOnPdict:'param not found' });
	};
}

exports.Start = guard.ensure(['get'], start);
