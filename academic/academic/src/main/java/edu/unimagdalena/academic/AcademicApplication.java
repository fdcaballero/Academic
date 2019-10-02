package edu.unimagdalena.academic;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import edu.unimagdalena.academic.entities.Estudiante;
import edu.unimagdalena.academic.repositories.EstudianteRepository;

@SpringBootApplication
public class AcademicApplication {
	
	//@Autowired
	//private EstudianteRepository estudianteRepositorio;
	public static void main(String[] args) {
		SpringApplication.run(AcademicApplication.class, args);
	}

	/*public void run (String... args ) throws Exception {
		Estudiante estud = new Estudiante();
		estud.setNombre("Juan");
		estud.setApellido1("perez");
		estud.setCorreo("freddy@gamail.com");
		estud.setTelefono("3126443540");
		estud.setId(1);
		
		estudianteRepositorio.save(estud);
	}*/
}