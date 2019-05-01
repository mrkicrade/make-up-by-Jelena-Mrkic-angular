angular.module('jecaApp' , ['ngRoute'])

.config(function($routeProvider , $locationProvider){
	$locationProvider.hashPrefix('')
    $routeProvider
    .when('/' , {
    	templateUrl : 'pages/pocetna.html',
    	// controller : 'pocetnaCtrl'
    })
    .when('/o_nama' , {
        templateUrl : 'pages/o_nama.html',
        // controller : 'o_namaCtrl'
    })
    .when('/galerija' , {
        templateUrl : 'pages/galerija.html',
        controller : 'galerijaCtrl'
    })
    .when('/kontakt' , {
        templateUrl : 'pages/kontakt.html',
        controller : 'kontaktCtrl'
    })
})