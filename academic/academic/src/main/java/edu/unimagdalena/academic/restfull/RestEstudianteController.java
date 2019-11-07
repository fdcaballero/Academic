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

import java.util.*;

import javax.persistence.EntityNotFoundException;


import edu.unimagdalena.academic.repositories.Responsable_AlumnoRepository;
import edu.unimagdalena.academic.services.CursoService;
import edu.unimagdalena.academic.services.EstudianteService;
import edu.unimagdalena.academic.services.ResponsableAlumnoService;
import edu.unimagdalena.academic.entities.*;

@RestController
@RequestMapping("/api/v1") //Nombre para accesar a la api
public class RestEstudianteController {
	
	@Autowired
	private EstudianteService studentRepository;
	@Autowired
	private CursoService cursoService;
	@Autowired
	private ResponsableAlumnoService responsableService;
	
	 @GetMapping("/estudiante/{id}")
	 public Estudiante getEstudiante(@PathVariable("id") Long id) {
		Optional<Estudiante> estudiante =  studentRepository.findById(id);
		if(!estudiante.isPresent()) {
			
			throw new EntityNotFoundException("No se encontro el estudiante con id" + id);
		}
		return estudiante.get();
	 }
	 
	 @GetMapping("/estudiante")
	 public List<Estudiante> listar(){
		 return studentRepository.findAll();
	 }
	 
	 @PutMapping("/estudiante/{id}")
	 public Estudiante editStudent(@RequestBody Estudiante estudiante, @PathVariable Long id) {
		 estudiante.setId(id);
		 return studentRepository.save(estudiante);
	}
	 
	 @DeleteMapping("/estudiante/{id}")
	 public void borrarStudent(@PathVariable("id") Long id) {
		Estudiante aux = studentRepository.getOne(id);
		studentRepository.delete(aux);
		 
	 }

	@PostMapping("/estudiante")
    public Estudiante createStudent(@RequestBody Estudiante student) {
		Responsable_Alumno Responsable = responsableService.getOne(student.getResponsable().getId());
		Responsable.getEstudiantes().add(student);
		Long idCurso = Long.parseLong(student.getVarString());
		Optional<Curso> curso = cursoService.findById(idCurso);
	 if (!curso.isEmpty()) {
		 student.setGrado(curso.get()); 
	 }
	  
	  return studentRepository.save(student);
	}



}
