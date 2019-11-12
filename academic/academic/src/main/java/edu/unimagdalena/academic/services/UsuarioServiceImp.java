package edu.unimagdalena.academic.services;

import java.util.Arrays;
import java.util.HashSet;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import edu.unimagdalena.academic.entities.Role;
import edu.unimagdalena.academic.entities.Usuario;
import edu.unimagdalena.academic.repositories.RoleRepository;
import edu.unimagdalena.academic.repositories.UsuarioRepository;

@Service
public class UsuarioServiceImp implements UsuarioService{
	@Autowired
	private UsuarioRepository usuarioRepositorio;
	@Autowired
	private RoleRepository rolRepositorio;
	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;
	
	public Usuario findUsuarioByUser(String username) {
		return usuarioRepositorio.findByUser(username);
	}

	public Usuario getUsuarioById(long id) {
		return usuarioRepositorio.getOne(id);
	}
	public void save(Usuario usuario) {
		usuario.setPassword(bCryptPasswordEncoder.encode(usuario.getPassword()));
		usuario.setHabilitado(true);
		Role userRole = rolRepositorio.findByNombre("ADMIN");
		usuario.setRoles(new HashSet<Role>(Arrays.asList(userRole)));
		usuarioRepositorio.save(usuario);
	}

	
}