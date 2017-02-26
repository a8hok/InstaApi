define([], function() {
    'use strict';
    var homeCtrl = function( $q, $stateParams) {
        self = this;
        self.userDetails = {};
        self.userDetails = $stateParams.userObj;
        console.log('self.userDetails',self.userDetails);
        self.showMyMedia = function(){
        	
        }
    };
    return homeCtrl;
});