package edu.unimagdalena.academic.services;

import java.util.*;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import edu.unimagdalena.academic.entities.Estudiante;
import edu.unimagdalena.academic.repositories.EstudianteRepository;

@Service
public class EstudianteServiceImp implements EstudianteService{
	@Autowired
	private EstudianteRepository estudiantRepository;
	
	@Override
	public Estudiante save(Estudiante estudiante) {
		return estudiantRepository.save(estudiante);
		
	}
	
	
	@Override 
	public Estudiante findEstudianteById(Long id) {
		return estudiantRepository.findEstudianteById(id);
	}
	@Override
	public void delete(Estudiante estudiante) {
		estudiantRepository.delete(estudiante);
		
	}

	@Override
	public Estudiante buscarEstudiantePorId(Long id) {
		return estudiantRepository.getOne(id);
	}


	

	@Override
	public List<Estudiante> findAll() {
		return estudiantRepository.findAll();
	}



	@Override
	public Estudiante getOne(Long id) {
		
		return estudiantRepository.getOne(id);
	}



	@Override
	public Optional<Estudiante> findById(Long id) {
		return estudiantRepository.findById(id);
		
		
		
	}



	@Override
	public List<Estudiante> findEstudiantesByNombreAndCurso(String nombre, String curso) {
		return estudiantRepository.findEstudiantesByNombreAndCurso(nombre, curso);
	}



	@Override
	public List<Estudiante> findEstudianteByNombre(String nombre) {
		
		return estudiantRepository.findEstudianteByNombre(nombre);
	}


	@Override
	public List<Estudiante> findEstudiantesByGrado(String grado) {
		
		return estudiantRepository.findEstudiantesByGrado(grado);
	}


	@Override
	public List<Estudiante> findEstudiantesByCurso(Long id) {
		
		return estudiantRepository.findEstudiantesByCurso(id);
	}
	
}
