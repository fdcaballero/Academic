package edu.unimagdalena.academic.services;

import java.util.*;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import edu.unimagdalena.academic.repositories.*;

import edu.unimagdalena.academic.entities.*;

@Service
public class ProfesorServiceImp implements ProfesorService {
	
	@Autowired
	private ProfesorRepository profesorRepository;
	
	
	@Override 
	public Profesor save (Profesor profesor) {
		return	profesorRepository.save(profesor);
	}
	
	@Override 
	public void delete (Profesor profesor) {
		
		profesorRepository.delete(profesor);
	}

	@Override
	public List<Profesor> findAll() {
			return profesorRepository.findAll();
	}

	@Override
	public Profesor getOne(Long id) {
		
		return profesorRepository.getOne(id);
	}

	@Override
	public Optional<Profesor> findById(Long id) {
		return profesorRepository.findById(id);
	
	}

	@Override
	public Profesor buscarProfesorPorId(Long id) {
		return profesorRepository.getOne(id);
	}
}
