function ProdutoVO() {
	this.id = "";
	this.nome = "";
	this.fornecedor = "";
	this.preco = "";
	this.descricao = "";
	this.quantidade = "";
}

function vendaVO() {
	this.id = "";
	this.total = "";
	this.itens = new Array();
}

function itemVendaVO() {
	this.id = "";
	this.produto = new ProdutoVO();
	this.venda = new vendaVO();
	this.quantidade = "";
}