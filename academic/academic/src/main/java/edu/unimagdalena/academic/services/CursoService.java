package edu.unimagdalena.academic.services;

import java.util.*;
import edu.unimagdalena.academic.entities.Curso;;

public interface CursoService {
	
	void delete(Curso curso);
	Curso save(Curso curso);
	List<Curso> findAll();
	Optional<Curso> findById(Long id);
	Curso getOne(Long id);
	//List<Curso> findByNivelAndEtapa(Integer nivel, String etapa);
	List<Curso> findCursosByEtapa(String etapa);
	List<Curso> findCursosByNivel(Integer nivel);
	List<Curso> findCursoByNivelAndEtapa(Integer nivel, String etapa);
}
