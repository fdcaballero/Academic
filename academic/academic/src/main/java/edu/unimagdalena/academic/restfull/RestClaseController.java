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

import edu.unimagdalena.academic.entities.Clase;
import edu.unimagdalena.academic.repositories.ClaseRepository;
import java.util.*;

import javax.persistence.EntityNotFoundException;

@RestController
@RequestMapping("/api/v1")
public class RestClaseController {
	@Autowired
	private ClaseRepository  classRepositories;
	
	@GetMapping("/clase/{id}")
	public Clase getClase(@PathVariable Long id) {
		Optional<Clase> clase  = classRepositories.findById(id);
		if(!clase.isPresent()) {
			throw new EntityNotFoundException("No se encontro la clase");
		}
		return clase.get();
	}
	
	@PostMapping ("/clase")
	public Clase createClase(@RequestBody Clase clas) {
		return classRepositories.save(clas);
		
	}
	
	@PutMapping("/clase")
	public Clase editClase(@RequestBody Clase clas) {
		return classRepositories.save(clas);
	}
	
	@DeleteMapping("/clase/{id}")
	public void borrarClase (@PathVariable Long id) {
		Clase aux = classRepositories.getOne(id);
		classRepositories.delete(aux);
	}
	@GetMapping("/clase")
	public List<Clase> getClases(){
		return classRepositories.findAll();
	}
}	
