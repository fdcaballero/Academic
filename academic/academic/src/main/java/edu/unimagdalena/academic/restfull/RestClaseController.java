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
import edu.unimagdalena.academic.repositories.ProfesorRepository;
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
	
	@PutMapping("/clase/{id}")
	public Clase editClase(@RequestBody Clase clase, @PathVariable("id") Long id) {
		clase.setId(id);
		if(clase.getVarAux1() != null) {
			
			Optional<Asignatura> asignatura = asignaturaService.findById(Long.parseLong(clase.getVarAux1()));
			if(asignatura.isPresent()) { 
				if(asignatura.get() !=  clase.getAsignatura()) {
					Asignatura asignAnt = clase.getAsignatura();
					if(asignAnt != null) {
						for (Clase clasAux : asignAnt.getClases()) {
							if(clasAux.getId()  ==  clase.getId()) {
								asignAnt.getClases().remove(clase);
								break;
							}
						}
						asignaturaService.save(asignAnt);
					}
					
				}
				
			}else {
				throw new EntityNotFoundException("No se encontro la asignatura");
			}
			clase.setAsignatura(asignatura.get());
			asignatura.get().getClases().add(clase);
			asignaturaService.save(asignatura.get());
		}
		
		 if(clase.getVarAux2() != null) {
			Optional<Profesor> profe = profesorService.findById(Long.parseLong(clase.getVarAux2()));
			if(profe.isPresent()) {
				if(profe.get()  != clase.getProfesor()){
					Profesor profeAnt = clase.getProfesor();
					if(profeAnt != null) {
						for (Clase Bclas : profeAnt.getClases()) {
							if(Bclas.getId()  == clase.getId()) {
								profeAnt.getClases().remove(clase);
								break;
							}
						}
						profesorService.save(profeAnt);
					}
					
				}
				
			}else {
				throw new EntityNotFoundException("No se encontro la profesor");
			}
			clase.setProfesor(profe.get());
			profe.get().getClases().add(clase);
			profesorService.save(profe.get());
		
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
