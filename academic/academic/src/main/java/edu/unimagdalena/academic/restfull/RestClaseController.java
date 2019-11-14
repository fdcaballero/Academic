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

import edu.unimagdalena.academic.entities.*;
import edu.unimagdalena.academic.services.*;
import java.util.*;

import javax.persistence.EntityNotFoundException;



@RestController
@RequestMapping("/api/v1")
public class RestClaseController {
	@Autowired
	private ClaseService classRepositories;
	
	@Autowired
	private ProfesorService profesorService;
	
	@Autowired
	private AsignaturaService asignaturaService;
	
	@GetMapping("/clase/{id}")
	public Clase getClase(@PathVariable Long id) {
		Optional<Clase> clase = classRepositories.findById(id);
		return clase.get();
	
	}
	
	@PostMapping ("/clase")
	public Clase createClase(@RequestBody Clase clase) {

		if(clase.getVarAux1() != null) {
			
			Optional<Asignatura> asignatura = asignaturaService.findById(Long.parseLong(clase.getVarAux1()));
			if(asignatura.isPresent()) {
				clase.setAsignatura(asignatura.get());
				asignatura.get().getClases().add(clase);
				asignaturaService.save(asignatura.get());
			}else {
				throw new EntityNotFoundException("No se encontro la asignatura");
			}
		}
		if(clase.getVarAux2() != null) {
			Optional<Profesor> profe = profesorService.findById(Long.parseLong(clase.getVarAux2()));
			if(profe.isPresent()) {
				clase.setProfesor(profe.get());
				profe.get().getClases().add(clase);
				profesorService.save(profe.get());
			}else {
				throw new EntityNotFoundException("No se encontro la profesor");
			}
		}
		return classRepositories.save(clase);
		
		
	}
	
	@PutMapping("/clase")
	public Clase editClase(@RequestBody Clase clase) {
		
		if(clase.getVarAux1() != null) {
			
			Optional<Asignatura> asignatura = asignaturaService.findById(Long.parseLong(clase.getVarAux1()));
			if(asignatura.isPresent()) {
				clase.setAsignatura(asignatura.get());
				asignatura.get().getClases().add(clase);
				asignaturaService.save(asignatura.get());
			}else {
				throw new EntityNotFoundException("No se encontro la asignatura");
			}
		}
		
		 if(clase.getVarAux2() != null) {
			Optional<Profesor> profe = profesorService.findById(Long.parseLong(clase.getVarAux2()));
			if(profe.isPresent()) {
				clase.setProfesor(profe.get());
				profe.get().getClases().add(clase);
				profesorService.save(profe.get());
			}else {
				throw new EntityNotFoundException("No se encontro la profesor");
			}
		}
		
		return classRepositories.save(clase);
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
