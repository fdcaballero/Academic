package edu.unimagdalena.academic.services;


import edu.unimagdalena.academic.repositories.ClaseRepository;


import java.util.*;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import edu.unimagdalena.academic.entities.Clase;

@Service
public class ClaseServiceImp implements ClaseService {
	
	@Autowired
	private  ClaseRepository claseRepository;

	@Override
	public Clase save(Clase clase) {
		return claseRepository.save(clase);
		
	}

	@Override
	public void delete(Clase clase) {
		claseRepository.delete(clase);
		
	}

	@Override
	public List<Clase> findAll() {
		
		return	claseRepository.findAll();
		
	}

	@Override
	public Clase getOne(Long id) {
		
		return claseRepository.getOne(id);
	}

	@Override
	public Optional<Clase> findById(Long id) {
		return claseRepository.findById(id);
		
	}
	@Override
	public List<Clase> findByAsignatura(String asig){
		return claseRepository.findByAsignatura(asig);
	}

	@Override
	public List<Clase> findClasesByProfesor(String profe){
		return claseRepository.findClasesByProfesor(profe);
	}		

	@Override
	public List<Clase> findByAsigAndProfe(String asig, String profe){
		return claseRepository.findByAsigAndProfe(asig, profe);
	}

	@Override
	public List<Clase> findByCurso(String curso) {
	
		return claseRepository.findByCurso(curso);
	}

	@Override
	public List<Clase> findClaseByEstudianteForId(Long curso, Long id) {
		return claseRepository.findClaseByEstudianteForId(curso, id);
	}

	@Override
	public List<Clase> findByCursoAndProfe(String curso, String profe) {
 
		return  claseRepository.findByCursoAndProfe(curso, profe);
	}

	@Override
	public List<Clase> findByAsigAndCurso(String asig, String curso) {
		
		return claseRepository.findByAsigAndCurso(asig, curso);
	}

	@Override
	public List<Clase> findClasesByProfesorForId(Long id) {
		
		return claseRepository.findClasesByProfesorForId(id);
	}

}	
		

	
	


