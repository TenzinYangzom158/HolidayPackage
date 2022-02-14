angular.module('myapp',['ngRoute'])
.config(function($routeProvider)
{
    $routeProvider.when('/home',
    {
        templateUrl:'home.html',
        controller:'homeCtrl'
    })
    .when('/Admin',
    {
        templateUrl:'Admin.html',
        controller:'adminCtrl'
    })
    .when('/packages',
    {
        templateUrl:'packages.html',
        controller:'packagesCtrl'
    })
    .when('/Explore',
    {
        templateUrl:'Explore.html',
        controller:'exploreCtrl'
    });
})

/* controller is a JS function that maintains
     application data and behavior using $scope object -->
            <!--properties and methods can be attached to the
                $scope object inside a controller function */
.controller('myappcntrl',function()
{

})
.controller('homeCtrl',function($scope)
{
    $scope.message="Home Page";
})

.controller("adminCtrl",function($scope)
{
    $scope.message="Admin Page";
})
.controller("adminctrl",function($scope)
{
   
})

.controller("packagesCtrl",function($scope, $http)
{
    $scope.message = "Package Details";
    $http.
        get('https://tenzinyangzom158.github.io/programs/SPA/package.json')
        .then(function(response)
    {
        $scope.myData = response.data.package;
    });

    $scope.orderByMe = function(x) {
        $scope.myOrderBy = x;
      };
})

.controller('exploreCtrl',function($scope)
{
    $scope.message="Explore Page";
})


.filter("myfilter",function()
{
    return function(input)
    {
        return input.substring(0,1).toUpperCase() + input.substring(1);
    }
})

.filter("dayFilter", function()
{
    return function(input)
    {
        return input + ' Days';
    }
});