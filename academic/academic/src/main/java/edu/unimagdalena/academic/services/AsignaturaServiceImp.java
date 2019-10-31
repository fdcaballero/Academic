package edu.unimagdalena.academic.services;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import edu.unimagdalena.academic.entities.Asignatura;
import edu.unimagdalena.academic.repositories.AsignaturaRepository;

@Service
public class AsignaturaServiceImp implements AsignaturaService{
	@Autowired
	private AsignaturaRepository asignaturaRepository;

	@Override
	public Asignatura save(Asignatura asignatura) {
		
		return asignaturaRepository.save(asignatura);
	}

	@Override
	public Asignatura getOne(Long id) {
		
		return asignaturaRepository.getOne(id);
	}

	@Override
	public void delete(Asignatura asignatura) {
		asignaturaRepository.delete(asignatura);
		
	}

	@Override
	public List<Asignatura> findAll() {
		// TODO Auto-generated method stub
		return asignaturaRepository.findAll();
	}
	
	
	@Override
	public Optional<Asignatura> findById(Long id){
		return asignaturaRepository.findById(id);
	}
}
