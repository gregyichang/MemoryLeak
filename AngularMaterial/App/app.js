﻿(function() {
    "use strict";

    var app = angular.module("memApp", ["ngSanitize", "ngMaterial", "ngAnimate", "ngAria", "ngMessages", "ui.router"]);

    angular.element(window).ready(function() {
        angular.bootstrap(document, ["memApp"]);
    });

    app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/form1");

        $stateProvider.state("/form1",
            {
                url: "/form1",
                templateUrl: "App/views/form1.html"
            })
            .state("/form2",
            {
                url: "/form2",
                templateUrl: "App/views/form2.html"
            });


    }]);

})();