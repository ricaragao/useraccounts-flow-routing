/* global
  AccountsTemplates: false,
  FlowRouter: false
*/
'use strict';
import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

AccountsTemplates.atInputRendered.push(function(){
  var fieldId = this.data._id;
  var queryKey = this.data.options && this.data.options.queryKey || fieldId;
  var inputQueryVal = FlowRouter.getQueryParam(queryKey);
  if (inputQueryVal) {
    this.$("input#at-field-" + fieldId).val(inputQueryVal);
  }
});
