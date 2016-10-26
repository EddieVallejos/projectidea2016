(function(){ 
    'use strict';
    
    angular
        .module('app')
        .directive('statusDirective', statusDirective)

        function statusDirective() {
            var directive = {
                link: link,
                restrict: 'EA'
            };
            return directive;
            
            function link(scope, element, attrs) {
                $(element).material_select();
            }

        }
        
})();
