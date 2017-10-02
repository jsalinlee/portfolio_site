app.controller("mainController", function($scope, $location, $document, $route) {

    $scope.hidequickmenu = true;
    $scope.hidequicklink = false;
    $scope.hidenavlinks = false;

    var initLoad = function() {
        if(window.innerWidth <= 900) {
            $scope.hidequickmenu = false;
            $scope.hidenavlinks = true;
            $scope.aboutStyle = { "width": "80%" }
        } else {
            $scope.hidequickmenu = true;
            $scope.hidequicklink = false;
            $scope.hidenavlinks = false;
            $scope.aboutStyle = { "width": "30%" }
        }
    }

    initLoad();

    var windowResize = function() {
        if(window.innerWidth <= 900) {
            $scope.$apply("hidequickmenu = false;")
            $scope.$apply("hidenavlinks = true;")
            $scope.aboutStyle = { "width": "80%" }
        } else {
            $scope.$apply("hidequickmenu = true;")
            $scope.$apply("hidequicklink = false;")
            $scope.$apply("hidenavlinks = false;")
            $scope.aboutStyle = { "width": "30%" }
        }
    }

    var cleanUp = function() {
        angular.element(window).off("resize", windowResize);
    }

    angular.element(window).on("resize", windowResize);
    $scope.$on("destroy", cleanUp);

    $scope.reload = function() {
        window.scrollTo(0, 0);
        $location.url("/");
    }

    $scope.showquicklinks = function() {
        $scope.hidequicklink = !$scope.hidequicklink;
    }

    $scope.scrollToSection = function(elementID) {
        element = angular.element(document.getElementById(elementID));
        $document.scrollToElementAnimated(element, 60, 800);
    }

    $scope.$on("$routeChangeSuccess", function(event, current, previous) {
        if(previous !== undefined) {
            if(previous.$$route.controller == "portfolioController") {
                element = angular.element(document.getElementById("portfolio"));
                $document.scrollToElement(element, 59);
            }
        } else {
            $scope.reload();
        }
    })
});
