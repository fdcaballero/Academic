package edu.unimagdalena.academic.services;

import edu.unimagdalena.academic.entities.Usuario;

public interface UsuarioService {

	public Usuario findUsuarioByUsername(String username);
	public Usuario getUsuarioById(long id);
	public void save(Usuario usuario);
	

}
