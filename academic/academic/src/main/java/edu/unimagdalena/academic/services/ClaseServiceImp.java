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
	
	
	

}
