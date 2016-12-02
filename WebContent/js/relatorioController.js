app.controller("RelatorioController", function($scope, $http) {
	
	$scope.listaProdutos = null;
	
	$scope.listarProdutos = function() {

		var ws = $http.get("ws/produto/listar");
		ws.success(function(data) {
			$scope.listaProdutos = data;
		});
		ws.error(function(data, status) {
			alert("Erro ao chamar ws.Status " + status);
		});
	}
	$scope.listarProdutos();
	
});