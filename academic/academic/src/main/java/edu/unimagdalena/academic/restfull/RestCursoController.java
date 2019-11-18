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

import edu.unimagdalena.academic.entities.Curso;
import edu.unimagdalena.academic.services.CursoService;

@RestController
@RequestMapping("api/v1")
public class RestCursoController {
	@Autowired
	private CursoService cursoService;
	
	@GetMapping("/curso/{id}")
	public Curso getCurso(@PathVariable Long id) {
		Optional<Curso> curso = cursoService.findById(id);
		if(!curso.isPresent()){
			throw new EntityNotFoundException("No se encontró el curso con el id asignado" +  id);
			
		}
		
		return curso.get();
	}

	@PostMapping("/curso")
	public Curso crearCurso(@RequestBody Curso curso) {
		return cursoService.save(curso);
	}
  
	@PutMapping("/curso/{id}")
	public Curso Editar(@RequestBody Curso curso, @PathVariable Long id) {
		curso.setId(id);
		curso.setAsignaturas(curso.getAsignaturas());
		curso.setEstudiantes(curso.getEstudiantes());
		return cursoService.save(curso);
		
	}
	
	@DeleteMapping("/curso/{id}")
	public void Elim(@PathVariable Long id) {
		Curso  curso = cursoService.getOne(id);
		cursoService.delete(curso);
	}
	
	@GetMapping("/curso")
	public List<Curso> Listar(){
		return cursoService.findAll();
	}
	
	@GetMapping("/cursose/{etapa}")
	public List<Curso> ListarByEtapa(@PathVariable String etapa){
		return cursoService.findCursosByEtapa(etapa);
	}
	
	@GetMapping("/cursos/{nivel}")
	public List<Curso> ListarPorNivel(@PathVariable Integer nivel){
		return cursoService.findCursosByNivel(nivel);
	}
	
	@GetMapping("/cursosne/{nivel}/{etapa}")
	public List<Curso> ListarPorNivelYEtpa(@PathVariable Integer nivel , @PathVariable String etapa){
		return cursoService.findCursoByNivelAndEtapa(nivel, etapa);
	}
}

