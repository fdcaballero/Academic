package edu.unimagdalena.academic.services;

import edu.unimagdalena.academic.entities.Asignatura;
import java.util.List;
import java.util.Optional;

public interface AsignaturaService {
	Optional<Asignatura> findById(Long id);
	Asignatura save(Asignatura asignatura);
	Asignatura getOne(Long id);
	void delete (Asignatura asignatura);
	List<Asignatura> findAll();
	
}
