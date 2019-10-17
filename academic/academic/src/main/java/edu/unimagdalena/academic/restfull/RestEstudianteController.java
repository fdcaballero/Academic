package edu.unimagdalena.academic.restfull;

import javax.validation.Valid;
import javax.websocket.server.PathParam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
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
import edu.unimagdalena.academic.repositories.EstudianteRepository;

@RestController
@RequestMapping("/api/v1") //Nombre para accesar a la api
public class RestEstudianteController {
	
	@Autowired
	private EstudianteRepository studentRepository;
	
	 @PostMapping("/estudiante")
	 public Estudiante createStudent(@Valid @RequestBody Estudiante student, Model model) {
		 
		 return studentRepository.save(student);
	 }
	 
	 @GetMapping("/estudiante/{id}")
	 public Estudiante showDataStudent(@PathVariable Integer id) {
		return studentRepository.getOne(id);
		
	 }
	 @GetMapping("/estudiantes")
	 public List<Estudiante> listar(){
		 return studentRepository.findAll();
	 }
	 
	 @PutMapping("/estudiante")
	 public Estudiante editStudent(@RequestBody Estudiante estudiante ) {
		 
		 return studentRepository.save(estudiante);
	}
	 
	 @DeleteMapping("/estudiante/{id}")
	 public void borrarStudent(@PathVariable Integer id) {
		 studentRepository.deleteById(id);
	 }
}
