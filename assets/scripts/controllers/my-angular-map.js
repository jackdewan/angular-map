var mapApp = angular.module('mapComponentsApp', []);

    mapApp.directive('helloMaps', function () {
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