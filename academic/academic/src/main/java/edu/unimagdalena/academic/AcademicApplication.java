package edu.unimagdalena.academic;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import edu.unimagdalena.academic.entities.Usuario;
import edu.unimagdalena.academic.repositories.UsuarioRepository;

@SpringBootApplication
public class AcademicApplication {
	
	@Autowired
	private UsuarioRepository usuarioRepositorio;
	public static void main(String[] args) {
		SpringApplication.run(AcademicApplication.class, args);
	}

	public void run (String... args ) throws Exception {
		Usuario us = new Usuario();
		us.setUser("Admin");
		us.setPassword("123");
	    us.setHabilitado(true);
		
		usuarioRepositorio.save(us);
	}
}
