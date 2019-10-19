package edu.unimagdalena.academic.services;

import edu.unimagdalena.academic.repositories.ClaseRepository;

import java.util.*;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;

import edu.unimagdalena.academic.entities.Clase;
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
	public Clase findById(Long id) {
		Optional<Clase> clase = claseRepository.findById(id);
		
		if(!clase.isPresent()) {
			
			throw new EntityNotFoundException("No se encontro la clase con id" + id);
		}
		return clase.get();
	}
	
	
	

}
