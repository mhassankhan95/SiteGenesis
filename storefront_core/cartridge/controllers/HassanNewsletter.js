/**
 * Description of the Controller and the logic it provides
 * 
 * @module controllers/JNewsletter
 */

'use strict';

// HINT: do not put all require statements at the top of the file
// unless you really need them for all functions

var ISML = require('dw/template/ISML');
var guard = require('storefront_controllers/cartridge/scripts/guard');
var newsletterForm = session.forms.newsletter;


function start() {
	newsletterForm.clearFormElement();
	ISML.renderTemplate('newsletter/newslettersignup', {
		ContinueURL : dw.web.URLUtils.https('HassanNewsletter-Submit'),
		CurrentForms : session.forms
	});
}

function submit() {
	var	triggeredAction = request.triggeredFormAction;
	response.getWriter().println("Hello From HassanNewsletter controller:"+triggeredAction);
	
	if ( (triggeredAction != null) && (triggeredAction.formId == 'subscribe') ) {
		ISML.renderTemplate('newsletter/newslettersuccess', {
			CurrentForms : session.forms
		});
		return;
	} else {
		ISML.renderTemplate('newsletter/newslettersignup', {
			ContinueURL : dw.web.URLUtils.https('HassanNewsletter-Submit'),
			CurrentForms : session.forms
		});
	}
}

exports.Start = guard.ensure([ 'get' ], start);
exports.Submit = guard.ensure([], submit);