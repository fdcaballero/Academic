package edu.unimagdalena.academic.services;

import edu.unimagdalena.academic.entities.Estudiante;
import java.util.*;

public interface EstudianteService {
	
	//List<Estudiante> findEstudiantesByNombreOrCurso(String nombre,String curso);
	Estudiante  findEstudianteById(Long id);
	
	List<Estudiante> findEstudianteByNombre(String nombre);
	
	Estudiante save(Estudiante estudiante);
	
	Optional<Estudiante> findById(Long id);
	 
	void delete(Estudiante estudiante);
	
	List<Estudiante> findAll();
	
	Estudiante buscarEstudiantePorId(Long id);
	
	Estudiante getOne(Long id);
	
	List<Estudiante> findEstudiantesByNombreAndCurso(String nombre, String curso);
	
	List<Estudiante> findEstudiantesByGrado(String grado);
	
	List<Estudiante> findEstudiantesByCurso(Long id);
	
}
