package edu.unimagdalena.academic.restfull;

import java.util.*;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import edu.unimagdalena.academic.entities.Responsable_Alumno;
import edu.unimagdalena.academic.repositories.Responsable_AlumnoRepository;

@RestController
@RequestMapping("/api/v1")
public class RestRepresentanteController {
	
	@Autowired
	private Responsable_AlumnoRepository responsableRepository;
	
	@GetMapping("/representante/{id}")
	public Responsable_Alumno getResponsable(@PathVariable Long id) {
		Optional<Responsable_Alumno> responsable = responsableRepository.findById(id);
		if(!responsable.isPresent()) {
			throw new EntityNotFoundException("No se encontro el responsable con id"+ id);
		}
		return responsable.get();
	}
	
	@PostMapping("/representante")
	public Responsable_Alumno crearResponsable(@RequestBody Responsable_Alumno responsable) {
		
		return responsableRepository.save(responsable);
	}

	@GetMapping("/representante")
	public List<Responsable_Alumno> listar() {
		return responsableRepository.findAll();
	}

	@DeleteMapping("/representante/{id}")
	public void Eliminar(@PathVariable Long id) {
		Responsable_Alumno responsable = responsableRepository.getOne(id);
		responsableRepository.delete(responsable);
	}
	
	@PutMapping("/representante/{id}")
	public Responsable_Alumno editar(@RequestBody Responsable_Alumno responsable, @PathVariable Long id) {
		responsable.setId(id);
		return responsableRepository.save(responsable);
	}
}	
