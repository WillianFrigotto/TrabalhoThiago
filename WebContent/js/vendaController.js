app.controller("VendaController", function($scope, $http) {

	$scope.listaProdutos = null;
	$scope.produto = new ProdutoVO();
	$scope.itemVenda = new itemVendaVO();
	$scope.venda = new vendaVO();

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

	$scope.adicionarIten = function() {

		var proximo;
		var i;

		for (i = 0; i < $scope.venda.itens.length; i++)
			;

		proximo = $scope.venda.itens.length;

		$scope.venda.itens[proximo] = $scope.itemVenda;
		$scope.itemVenda = new itemVendaVO();	
	}
	
	$scope.salvar = function() {
		var ws = $http.post("ws/vender", $scope.venda);
		ws.success(function(data) {
			$scope.venda = new vendaVO();
			alert("venda realizada com sucesso!");
		});

		ws.error(function(data, status) {
			alert("Erro ao chamar ws.Status " + status);
		});
	};
});