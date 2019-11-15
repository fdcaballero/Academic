package edu.unimagdalena.academic.services;

import edu.unimagdalena.academic.entities.Clase;	

import java.util.*;
public interface ClaseService {

	Clase save(Clase clase);
	Clase getOne (Long id);
	void delete(Clase clase);
	List<Clase> findAll();
	Optional<Clase> findById(Long id);
	List<Clase> findByAsignatura(String asig);
//	List<Clase> findByCurso(String curso);
	List<Clase> findByProfesor(String profe);	
	List<Clase> findByAsigAndProfe(String asig, String profe);
//	List<Clase> findByCursoAndProfe(String curso, String profe);
//	List<Clase> findByAsigAndCurso(String asig, String curso);
}
