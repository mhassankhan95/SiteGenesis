/**
* Description of the Controller and the logic it provides
*
* @module  controllers/HassanJShowProduct
*/

'use strict';

var ISML = require('dw/template/ISML');
var guard = require('storefront_controllers/cartridge/scripts/guard');
//var prod = require('dw/catalog/ProductMgr')
var ProductFinder =  require('~/cartridge/scripts/ProductFinder');
function start() {
	var parameterId = request.httpParameterMap.pid.stringValue;
//	var product = prod.getProduct(parameterId);
	var product = ProductFinder.find(parameterId);
		
	if (product===null) {
			ISML.renderTemplate(
			'hassanproductnotfound.isml',
			{
				message:'product with id '+parameterId+' not found'
			}
		);
		} else {
			ISML.renderTemplate(
			'hassanproductfound.isml',
		{
			product:product
		}
		);
	}
}

exports.Start = guard.ensure(['get'], start);

/**
* Description of the function
*
* @return {String} The string 'myFunction'
*/
// var myFunction = function(){
//     return 'myFunction';
// }

/* Exports of the controller */
///**
// * @see {@link module:controllers/HassanJShowProduct~myFunction} */
//exports.MyFunction = myFunction;

