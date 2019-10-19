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
import edu.unimagdalena.academic.entities.Estudiante;
import edu.unimagdalena.academic.services.EstudianteServiceImp;

@RestController
@RequestMapping("/api/v1") //Nombre para accesar a la api
public class RestEstudianteController {
	
	@Autowired
	private EstudianteServiceImp studentRepository;
	
	 @GetMapping("/estudiante/{id}")
	 public Estudiante getEstudiante(@PathVariable("id") Long id) {
		return studentRepository.findById(id);
	 }
	
	
	 @PostMapping("/estudiante")
	 public Estudiante createStudent(@RequestBody Estudiante student) {
		 
		 return studentRepository.save(student);
	 }
	 
	
	 @GetMapping("/estudiante")
	 public List<Estudiante> listar(){
		 return studentRepository.findAll();
	 }
	 
	 @PutMapping("/estudiante")
	 public Estudiante editStudent(@RequestBody Estudiante estudiante ) {
		 
		 return studentRepository.save(estudiante);
	}
	 
	 @DeleteMapping("/estudiante/{id}")
	 public void borrarStudent(@PathVariable("id") Long id) {
		Estudiante aux = studentRepository.getOne(id);
		studentRepository.delete(aux);
		 
	 }
}
