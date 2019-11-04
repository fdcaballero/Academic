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
	public List<Estudiante> findEstudiantesByNombreOrCurso(String nombre, String curso) {
		// TODO Auto-generated method stub
		return estudiantRepository.findEstudiantesByNombreOrCurso(nombre, curso);
	}



	@Override
	public List<Estudiante> findEstudianteByNombre(String nombre) {
		
		return estudiantRepository.findEstudianteByNombre(nombre);
	}
	
}
