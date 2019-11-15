package edu.unimagdalena.academic.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import java.util.*;
import edu.unimagdalena.academic.entities.Clase;

@Repository
public interface ClaseRepository  extends JpaRepository<Clase, Long>{
	
	@Query("SELECT c FROM Clase c WHERE c.profesor.nombre = :nombre")
	List<Clase> findClasesByProfesor( @Param("nombre") String nombre); // BUSQUEDA DESDE EL NOMBRE DEL PROFESOR
			
	
	@Query("SELECT c FROM Clase c WHERE c.asignatura.curso.etapa = :curso") // BUSQUEDA DESDE CURSO A ASIGNATURA
	List<Clase> findByCurso(String curso);
	
	@Query("SELECT c FROM Clase c WHERE c.asignatura.nombre = :nombre")		// BUSQUEDA DE CLASE POR ASIGNATURA
	List<Clase> findByAsignatura(@Param("nombre") String nombre);
	
	@Query("SELECT c FROM  Clase c, Asignatura a, Estudiante e  WHERE a.curso.id = :curso And a.id = c.asignatura.id And e.id = :id")
	List<Clase> findClaseByEstudianteForId(@Param("curso")Long curso, @Param("id") Long id);	// BUSQUEDA DE CLASE POR ESTUDIANTE*/

	@Query("SELECT c FROM Clase c , Profesor p WHERE c.asignatura.nombre = :asig And p.nombre = :profe") // 
	List<Clase> findByAsigAndProfe(
			@Param("asig") String asig, 
			@Param("profe") String profe);// BUSQUEDA DE CLASE POR ASIGNATURA Y PROFESOR
    
	@Query("SELECT c FROM Clase c WHERE c.asignatura.curso.etapa = :curso And c.profesor.nombre = :profe") 
	List<Clase> findByCursoAndProfe(
			@Param("curso") String curso, 
			@Param("profe") String profe);
    
	@Query("SELECT c FROM Clase c WHERE c.asignatura.nombre = :asig And c.asignatura.curso.etapa = :curso") 
	List<Clase> findByAsigAndCurso(
			@Param("asig") String asig, 
			@Param("curso") String curso);
	
    @Query("SELECT c FROM Clase c WHERE c.profesor.id =  :id")
    List<Clase> findClasesByProfesorForId (@Param ("id") Long id);
		
}
