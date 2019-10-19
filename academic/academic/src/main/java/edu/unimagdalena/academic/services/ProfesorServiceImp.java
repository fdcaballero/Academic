package edu.unimagdalena.academic.services;

import java.util.*;

import javax.persistence.EntityNotFoundException;

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
	public Profesor findById(Long id) {
		Optional<Profesor> profesor = profesorRepository.findById(id);
		if(profesor.isPresent()) {
			throw new EntityNotFoundException("No se encontro el profesor con id "+ id);
		}
		return profesor.get();
	}
}
