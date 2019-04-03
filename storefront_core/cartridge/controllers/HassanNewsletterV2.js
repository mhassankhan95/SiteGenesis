/**
* Description of the Controller and the logic it provides
*
* @module  controllers/HassanNewsletterV2
*/

'use strict';

var ISML = require('dw/template/ISML');
var guard = require('storefront_controllers/cartridge/scripts/guard');
var newsletterForm = session.forms.newsletter;

function start() {
	newsletterForm = session.forms.newsletter;
	newsletterForm.clearFormElement();
	ISML.renderTemplate('newsletter/newslettersignup', {
		ContinueURL : dw.web.URLUtils.https('HassanNewsletterV2-Submit'),
		CurrentForms : session.forms
	});
}

function submit() {
	
	var	triggeredAction = request.triggeredFormAction;
	var newsletterForm = null;
	
	if ( (triggeredAction != null) && (triggeredAction.formId == 'subscribe') ) {
		newsletterForm = session. .newsletter;
		try {
			var CustomObjectMgr = require('dw/object/CustomObjectMgr');
			var co = CustomObjectMgr.createCustomObject('HassanNewsletterSubscription', newsletterForm.email.value);
			co.custom.firstName = newsletterForm.fname.value;
			co.custom.lastName = newsletterForm.lname.value;
			ISML.renderTemplate('newsletter/newslettersuccess', {
				CurrentForms : session.forms
			});
		} catch (e) {
			var error = e;
			newsletterForm.email.invalidateFormElement();
			ISML.renderTemplate('newsletter/newslettersignup', {
				ContinueURL : dw.web.URLUtils.https('HassanNewsletterV2-Submit'),
				CurrentForms : session.forms
			});
		}
	} else {
		ISML.renderTemplate('newsletter/newslettersignup', {
			ContinueURL : dw.web.URLUtils.https('HassanNewsletter-Submit'),
			CurrentForms : session.forms
		});
	}
}

exports.Start = guard.ensure([ 'get' ], start);
exports.Submit = guard.ensure([], submit);

