var ISML = require('dw/template/ISML');
var guard = require('storefront_controllers/cartridge/scripts/guard');
var BasketMgr = require('dw/order/BasketMgr')

function start() {
	var basket = BasketMgr.currentBasket;

	ISML.renderTemplate(
			'hassanshowbasket.isml',
			{
				Basket:basket
			}
		);
}

exports.Start = guard.ensure(['get'], start);