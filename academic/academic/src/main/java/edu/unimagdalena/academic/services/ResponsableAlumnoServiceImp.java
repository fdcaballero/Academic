package edu.unimagdalena.academic.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import edu.unimagdalena.academic.entities.Responsable_Alumno;
import edu.unimagdalena.academic.repositories.Responsable_AlumnoRepository;

@Service
public class ResponsableAlumnoServiceImp implements ResponsableAlumnoService {

	@Autowired
	private Responsable_AlumnoRepository responsableRepository;
	
	@Override
	public Responsable_Alumno save(Responsable_Alumno responsable) {
		
		return responsableRepository.save(responsable);
	}

	@Override
	public Optional<Responsable_Alumno> findById(Long id) {
		return responsableRepository.findById(id);
	}

	@Override
	public void delete(Responsable_Alumno responsable) {
		responsableRepository.delete(responsable);
		
	}

	@Override
	public List<Responsable_Alumno> findAll() {
		return responsableRepository.findAll();
	}

	@Override
	public Responsable_Alumno getOne(Long id) {
		return responsableRepository.getOne(id);
	}

}
