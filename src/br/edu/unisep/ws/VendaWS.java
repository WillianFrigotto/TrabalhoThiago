package br.edu.unisep.ws;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.core.MediaType;

import br.edu.unisep.hibernate.DAOGenerico;
import br.edu.unisep.vo.ItenVendaVO;
import br.edu.unisep.vo.ProdutoVO;
import br.edu.unisep.vo.VendaVO;

@Path("/vender")
public class VendaWS {

	double total = 0;

	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	public void vender(VendaVO venda) {

		DAOGenerico<VendaVO> dao = new DAOGenerico<VendaVO>();
		DAOGenerico<ItenVendaVO> daoItens = new DAOGenerico<ItenVendaVO>();
		DAOGenerico<ProdutoVO> daoProdutos = new DAOGenerico<ProdutoVO>();

		for (ItenVendaVO item : venda.getItens()) {
			venda.setTotal(total
					+ (item.getQuantidade() * item.getProduto().getPreco()));
		}

		dao.salvar(venda);

		for (ItenVendaVO item : venda.getItens()) {
			item.setVenda(venda);

			item.getProduto().setQuantidade(
					item.getProduto().getQuantidade() - item.getQuantidade());

			daoItens.salvar(item);
			daoProdutos.atualizar(item.getProduto());

		}

	}
}