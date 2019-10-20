package edu.unimagdalena.academic.services;

import edu.unimagdalena.academic.entities.Clase;	

import java.util.*;
public interface ClaseService {

	Clase save(Clase clase);
	Clase getOne (Long id);
	void delete(Clase clase);
	List<Clase> findAll();
	Optional<Clase> findById(Long id);
}
