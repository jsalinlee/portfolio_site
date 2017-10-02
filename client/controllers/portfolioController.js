app.controller("portfolioController", function($scope, $location, $route, $timeout) {
    $scope.$on("$routeChangeSuccess", function(event, current, previous) {
        window.scrollTo(0, 0);
    });

    var initLoad = function() {
        if(window.innerWidth <= 900) {
            $scope.descStyle = { "width": "80%", "margin-left": "0"}
        } else {
            $scope.descStyle = { "width": "30%", "margin-left": "50px" }
        }
    }

    initLoad();

    var windowResize = function() {
        if(window.innerWidth <= 900) {
            $scope.descStyle = { "width": "80%", "margin-left": "0" }
            $scope.$apply()
        } else {
            $scope.descStyle = { "width": "30%", "margin-left": "50px" }
            $scope.$apply()
        }
    }

    var cleanUp = function() {
        angular.element(window).off("resize", windowResize);
    }

    angular.element(window).on("resize", windowResize);
    $scope.$on("destroy", cleanUp);

    $scope.gallery = {
        imageIdx: 0,
        images: [
            ["portfolio-images/LSRIS-main.png", "portfolio-images/LSRIS-sample1.png", "portfolio-images/LSRIS-sample2.png"],
            ["portfolio-images/tamagotchi-main.png", "portfolio-images/tamagotchi-map.png", "portfolio-images/tamagotchi-items.png"],
            ["portfolio-images/gainboy-main.png", "portfolio-images/gainboy-log.png", "portfolio-images/gainboy-log-sample.png"],
            ["portfolio-images/scavengers-sample1.png", "portfolio-images/scavengers-sample2.png", "portfolio-images/scavengers-inv.png"]
        ],
        changeImg: function(direction, imageIdx) {
            imageCount = $scope.gallery.images[imageIdx].length;
            $scope.projectImage = true;
            $timeout(function() {
                if(direction == true) {
                    $scope.gallery.imageIdx++;
                    if($scope.gallery.imageIdx > imageCount - 1) {
                        $scope.gallery.imageIdx = 0;
                    }
                } else {
                    $scope.gallery.imageIdx--;
                    if($scope.gallery.imageIdx < 0) {
                        $scope.gallery.imageIdx = imageCount - 1;
                    }
                }
            }, 600);
            $timeout(function() {
                $scope.projectImage = false;
            }, 500);
        }
    }
});
