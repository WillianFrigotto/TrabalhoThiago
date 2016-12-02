var app = angular.module("appGeral", [ "ngRoute" ]);

app.config(function($routeProvider, $httpProvider) {

	$routeProvider.when("home", {
		templateUrl : "index.html"
	});
	$routeProvider.when("/cadastrar", {
		templateUrl : "cadastrar.html",
		controller : "ProdutoController"
	});
	$routeProvider.when("/alterar", {
		templateUrl : "alterar.html",
		controller : "ProdutoController"
	});
	$routeProvider.when("/venda", {
		templateUrl : "vender.html",
		controller : "VendaController"
	});
	$routeProvider.when("/relatorio", {
		templateUrl : "relatorio.html",
		controller : "RelatorioController"
	});
 $routeProvider.otherwise({redirectTo:"/home"});
});
app.controller('ControllerGeral', function() {
});