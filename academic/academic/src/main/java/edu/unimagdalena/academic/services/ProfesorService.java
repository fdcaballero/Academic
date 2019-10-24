package edu.unimagdalena.academic.services;

import edu.unimagdalena.academic.entities.Profesor;
import java.util.*;

public interface ProfesorService {

	Profesor save(Profesor profesor);
	
	
	void delete (Profesor profesor);
	
	Profesor getOne(Long id);
	
	Optional<Profesor> findById(Long id);
	
	List<Profesor> findAll();
	Profesor buscarProfesorPorId(Long id);
	
	List<Profesor> findProfesoresByNombre(String nombre);
	
	List<Profesor> findProfesorByNombreOrNif(String nombre, String nif);
	
}
