package edu.unimagdalena.academic.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import edu.unimagdalena.academic.entities.Clase;

@Repository
public interface ClaseRepository  extends JpaRepository<Clase, Long>{
	@Query("SELECT c FROM Clase c WHERE c.profesor.nombre =: profe")
	List<Clase> findByProfesor(String profe);
//	List<Clase> findByCurso(String curso);	
	List<Clase> findByAsignatura(String asig);	

	@Query("SELECT c FROM Clase c WHERE c.asignatura.nombre =: asig AND c.profesor.nombre =: profe") 
	List<Clase> findByAsigAndProfe(
			@Param("asig") String asig, 
			@Param("profe") String profe);
    
/*	@Query("SELECT c FROM Clase c WHERE c.asignatura.curso.etapa =: curso AND c.profesor.nombre =: profe") 
	List<Clase> findByCursoAndProfe(
			@Param("curso") String curso, 
			@Param("profe") String profe);
    
	@Query("SELECT c FROM Clase c WHERE c.asignatura.nombre =: asig AND c.asignatura.curso.etapa =: curso") 
	List<Clase> findByAsigAndCurso(
			@Param("asig") String asig, 
			@Param("curso") String curso);
	*/
    
		
}
