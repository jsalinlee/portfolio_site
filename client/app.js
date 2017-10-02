var app = angular.module("app", ["ngRoute", "duScroll", "ngAnimate"])

app.config(function($routeProvider, $anchorScrollProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "partials/main.html",
            controller: "mainController"
        })
        .when("/portfolio1", {
            templateUrl: "partials/portfolio-1.html",
            controller: "portfolioController"
        })
        .when("/portfolio2", {
            templateUrl: "partials/portfolio-2.html",
            controller: "portfolioController"
        })
        .when("/portfolio3", {
            templateUrl: "partials/portfolio-3.html",
            controller: "portfolioController"
        })
        .when("/portfolio4", {
            templateUrl: "partials/portfolio-4.html",
            controller: "portfolioController"
        })
        .otherwise({
            redirectTo: "/"
        });
    $anchorScrollProvider.disableAutoScrolling();
});
