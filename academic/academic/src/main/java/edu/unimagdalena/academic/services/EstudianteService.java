package edu.unimagdalena.academic.services;

import edu.unimagdalena.academic.entities.Estudiante;
import edu.unimagdalena.academic.repositories.EstudianteRepository;

public interface EstudianteService {
    
	public Estudiante findEstudianteById(Integer id);
	
}
