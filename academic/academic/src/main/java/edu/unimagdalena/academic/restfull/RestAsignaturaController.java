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
import java.util.Optional;
import java.util.List;

@RestController
@RequestMapping("/api/v1")
public class RestAsignaturaController {
	@Autowired
	private AsignaturaService asignaturaService;
	
	@GetMapping("/asignatura/{id}")
	public Asignatura getAsignatura( @PathVariable Long id) {
		Optional<Asignatura> asignatura = asignaturaService.findById(id);
		if (asignatura.isPresent()) {
			throw new EntityNotFoundException("No se encontro la asignatura id "+ id);
		}
		return asignatura.get();
	}
	
	@PostMapping("/asignatura")
	public Asignatura createAsignatura (@RequestBody Asignatura asignatura ) {
		return asignaturaService.save(asignatura);
	}
	
	@PutMapping("/asignatura")
	public Asignatura editarAsignatura (@RequestBody Asignatura asignatura ) {
		return asignaturaService.save(asignatura);
	}
	
	@DeleteMapping("/asignatura/{id}")
	public void eliminar(@PathVariable Long id) {
		asignaturaService.delete(asignaturaService.getOne(id));
	}
	@GetMapping("/asignatura")
	public List<Asignatura> listar(){
		return asignaturaService.findAll();
	}
}
