package edu.unimagdalena.academic.restfull;

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

import edu.unimagdalena.academic.entities.Asignatura;
import edu.unimagdalena.academic.services.AsignaturaService;
import edu.unimagdalena.academic.services.CursoService;
import java.util.Optional;
import java.util.List;
import edu.unimagdalena.academic.entities.*;

@RestController
@RequestMapping("/api/v1")
public class RestAsignaturaController {
	@Autowired
	private AsignaturaService asignaturaService;
	
	@Autowired
	private CursoService cursoService;
	
	@GetMapping("/asignatura/{id}")
	public Asignatura getAsignatura( @PathVariable("id") Long id) {
		Optional<Asignatura> asignatura = asignaturaService.findById(id);
		if (!asignatura.isPresent()) {
			throw new EntityNotFoundException("No se encontro la asignatura id "+ id);
		}
		return asignatura.get();
	}
	
	@PostMapping("/asignatura")
	public Asignatura createAsignatura (@RequestBody Asignatura asignatura ) {
		
		if(asignatura.getVarString() != null) {
			Optional<Curso> curso = cursoService.findById(Long.parseLong(asignatura.getVarString()));
			asignatura.setCurso(curso.get());
			curso.get().getAsignaturas().add(asignatura);
			
			//cursoService.save(curso.get());
		}else {
			
		}
		return asignaturaService.save(asignatura);
	}
	
	@PutMapping("/asignatura/{id}")
	public Asignatura editarAsignatura (@RequestBody Asignatura asignatura, @PathVariable Long id ) {
		asignatura.setId(id);
		if(asignatura.getVarString() != null) { // VERIFICACION DE DATOS
			Optional<Curso> curso = cursoService.findById(Long.parseLong(asignatura.getVarString()));
			if(asignatura.getCurso() != null) { //VERIFICAR SI TIENE UN CURSO AGREAGADO
				if(asignatura.getCurso().getId() != curso.get().getId()) { //CAMBIANDO DE CURSO
					Curso cursoAnt = asignatura.getCurso(); 
					for(Asignatura asig : cursoAnt.getAsignaturas()) {
						if(asig.getId() == asignatura.getId()) {
							cursoAnt.getAsignaturas().remove(asignatura);
						}
					}
					cursoService.save(cursoAnt);
				}
			}
			asignatura.setCurso(curso.get());
			curso.get().getAsignaturas().add(asignatura);
			cursoService.save(curso.get());
		}
		return asignaturaService.save(asignatura);
	}
	
	@DeleteMapping("/asignatura/{id}")
	public void eliminar(@PathVariable Long id) {
		asignaturaService.delete(asignaturaService.getOne(id));
	}
	
	@GetMapping("/asignaturasn/{nombre}")
	public List<Asignatura> ListarAsignaturasPorNombre(@PathVariable String nombre){
		return asignaturaService.findAsignaturaByNombre(nombre);
	}
	
	@GetMapping("/asignaturasC/{curso}")
	public List<Asignatura> listarAsignaturasPorCurso(@PathVariable String curso){
		return asignaturaService.findAsignaturasByCurso(curso);
	}
	
	@GetMapping("/asignaturasPorc/{id}")
	public List<Asignatura> listarAsignaturaPorIdOfCurso(@PathVariable Long id){
		return asignaturaService.findAsignaturaByIdofCurso(id);
	}
	
	@GetMapping("/asignaturas/{nombre}/{curso}")
	public List<Asignatura> listaAsignaturasPorNombreYCurso(@PathVariable String nombre, @PathVariable String curso){
		return asignaturaService.findAsignaturasByNombreAndCurso(nombre, curso);
	}
	
	@GetMapping("/asignatura")
	public List<Asignatura> listar(){
		return asignaturaService.findAll();
	}
}
