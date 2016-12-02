package br.edu.unisep.ws;

import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.core.MediaType;

import br.edu.unisep.hibernate.DAOGenerico;
import br.edu.unisep.vo.ProdutoVO;

@Path("/produto")
public class ProdutoWS {

	DAOGenerico<ProdutoVO> dao = new DAOGenerico<ProdutoVO>();

	@Path("/salvar")
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	public void salvar(ProdutoVO produto) {

		if (produto.getId() != null && produto.getId() != 0) {
			dao.atualizar(produto);
		} else {
			dao.salvar(produto);
		}
	}

	@Path("/listar")
	@GET
	@Consumes(MediaType.APPLICATION_JSON)
	public List<ProdutoVO> listar() {

		List<ProdutoVO> listaProdutos = dao.listar(ProdutoVO.class);

		return listaProdutos;
	}
}