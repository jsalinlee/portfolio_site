app.controller("mainController", function($scope, $location, $document, $route) {

    $scope.hidequickmenu = true;
    $scope.hidequicklink = false;
    $scope.hidenavlinks = false;

    var initLoad = function() {
        if(window.innerWidth <= 900) {
            $scope.hidequickmenu = false;
            $scope.hidenavlinks = true;
            $scope.aboutStyle = { "width": "80%", "font-size": "18px" }
            $scope.hMobile = { "width": "80%", "height": "auto" }
            $scope.vMobile = { "width": "50%", "height": "auto" }
            $scope.aboutPicStyle = { "width": "90%", "height": "auto" }
        } else {
            $scope.hidequickmenu = true;
            $scope.hidequicklink = false;
            $scope.hidenavlinks = false;
            $scope.aboutStyle = { "width": "30%", "font-size": "24px" }
            $scope.hMobile = { "width": "444px", "height": "250px"  }
            $scope.vMobile = { "width": "250px", "height": "444px"  }
            $scope.aboutPicStyle = { "width": "365px", "height": "486" }
        }
    }

    initLoad();

    var windowResize = function() {
        if(window.innerWidth <= 900) {
            $scope.$apply("hidequickmenu = false;")
            $scope.$apply("hidenavlinks = true;")
            $scope.aboutStyle = { "width": "80%", "font-size": "18px" }
            $scope.hMobile = { "width": "80%", "height": "auto" }
            $scope.vMobile = { "width": "50%", "height": "auto" }
            $scope.aboutPicStyle = { "width": "90%", "height": "auto" }
        } else {
            $scope.$apply("hidequickmenu = true;")
            $scope.$apply("hidequicklink = false;")
            $scope.$apply("hidenavlinks = false;")
            $scope.aboutStyle = { "width": "30%", "font-size": "24px" }
            $scope.hMobile = { "width": "444px", "height": "250px"  }
            $scope.vMobile = { "width": "250px", "height": "444px"  }
            $scope.aboutPicStyle = { "width": "365px", "height": "486" }
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
