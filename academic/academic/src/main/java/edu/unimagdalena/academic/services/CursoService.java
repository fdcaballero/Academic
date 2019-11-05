package edu.unimagdalena.academic.services;

import java.util.*;
import edu.unimagdalena.academic.entities.Curso;;

public interface CursoService {
	
	void delete(Curso curso);
	Curso save(Curso curso);
	List<Curso> findAll();
	Optional<Curso> findById(Long id);
	Curso getOne(Long id);
	List<Curso> findCursosByNivel(Integer nivel);
	List<Curso> findCursoByNivelOrEtapa(Integer nivel, String etapa);
}
