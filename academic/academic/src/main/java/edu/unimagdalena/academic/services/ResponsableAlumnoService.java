package edu.unimagdalena.academic.services;

import java.util.List;
import java.util.Optional;

import edu.unimagdalena.academic.entities.Responsable_Alumno;;

public interface ResponsableAlumnoService {
	
	Responsable_Alumno save(Responsable_Alumno responsable);
	
	Optional<Responsable_Alumno> findById(Long id);
	 
	void delete(Responsable_Alumno responsable);
	
	List<Responsable_Alumno> findAll();
	

	
	Responsable_Alumno getOne(Long id);
}
