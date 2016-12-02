app.controller("ProdutoController", function($scope, $http) {

	$scope.produto = new ProdutoVO();
	$scope.listaProdutos = null;

	$scope.salvar = function() {
		var ws = $http.post("ws/produto/salvar", $scope.produto);
		ws.success(function(data) {
			$scope.produto = new ProdutoVO();
			alert("Inclusão realizada com sucesso!");
			$scope.listarProdutos();
		});

		ws.error(function(data, status) {
			alert("Erro ao chamar ws.Status " + status);
		});
	};
	
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