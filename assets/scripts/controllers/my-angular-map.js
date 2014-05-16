var app = angular.module('myApp', ['ngMap']);

app.directive('helloMaps', function () {
  return function (scope, elem, attrs) {
    var mapOptions,
      latitude = attrs.latitude,
      longitude = attrs.longitude,
      map;

    latitude = latitude && parseFloat(latitude, 10) || 43.074688;
    longitude = longitude && parseFloat(longitude, 10) || -89.384294;

    mapOptions = {
      zoom: 8,
      center: new google.maps.LatLng(latitude, longitude)
    };

    map = new google.maps.Map(elem[0], mapOptions);
  };
}); 

app.controller('MyController', ['$scope', function($scope) {
  $scope.stores = [
    {name: "store 1"}, {name: "store 2"}, {name: "store 3"}
  ];
}]);