package edu.unimagdalena.academic.restfull;

import javax.websocket.server.PathParam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import edu.unimagdalena.academic.entities.Estudiante;
import edu.unimagdalena.academic.repositories.EstudianteRepository;

@RestController
@RequestMapping("/api/v1")
public class RestEstudianteController {
	@Autowired
	private EstudianteRepository studentRepository;
	
	 @PostMapping("/crear-estudiante")
	 public Estudiante createStudent(@RequestBody Estudiante student) {
		 
		 return studentRepository.save(student);
	 }
	 
	 @GetMapping("/editar-estudiante")
	 public Estudiante showDataStudent(@PathVariable Integer id) {
		return studentRepository.getOne(id);
		
	 }
}
