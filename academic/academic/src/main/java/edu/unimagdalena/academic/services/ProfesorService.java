package edu.unimagdalena.academic.services;

import edu.unimagdalena.academic.entities.Profesor;
import java.util.List;

public interface ProfesorService {

	Profesor save(Profesor profesor);
	void delete (Profesor profesor);
	Profesor getOne(Long id);
	Profesor findById(Long id);
	List<Profesor> findAll();
	
}
