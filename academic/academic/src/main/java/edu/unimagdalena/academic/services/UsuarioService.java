package edu.unimagdalena.academic.services;

import edu.unimagdalena.academic.entities.Usuario;

public interface UsuarioService {

	public Usuario findUsuarioByUser(String username);
	Usuario getUsuarioById(long id);
	public void save(Usuario usuario);

}
