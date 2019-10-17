package edu.unimagdalena.academic.restfull;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import edu.unimagdalena.academic.entities.Profesor;
import edu.unimagdalena.academic.repositories.ProfesorRepository;

@RestController
@RequestMapping("/api/v1")
public class RestDocenteController {

	@Autowired
	private ProfesorRepository docenteRepository;
	
	
	@GetMapping("/docente/{id}")
	public Profesor getProfesor(@PathVariable Integer id ) {
		return docenteRepository.getOne(id);
	}
	
	@PostMapping("/docente")
	public Profesor createProfesor(@RequestBody Profesor profesor) {
		
		return docenteRepository.save(profesor);
	}
	
	@PutMapping("/docente")
	public Profesor editDocente(@RequestBody Profesor profesor) {
		return docenteRepository.save(profesor);
	}
	
	@DeleteMapping("/docente/{id}")
	public void borrarProfesor(@PathVariable Integer id) {
		docenteRepository.deleteById(id);
		
	}
}
