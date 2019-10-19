package edu.unimagdalena.academic.services;

import edu.unimagdalena.academic.entities.Estudiante;
import java.util.List;

public interface EstudianteService {
	
	Estudiante save(Estudiante estudiante);
	
	Estudiante findById(Long id);
	 
	void delete(Estudiante estudiante);
	
	List<Estudiante> findAll();
	
	Estudiante buscarEstudiantePorId(Long id);
	
	Estudiante getOne(Long id);
	
}
