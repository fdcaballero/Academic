package edu.unimagdalena.academic.repositories;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import java.util.*;

import edu.unimagdalena.academic.entities.Asignatura;

@Repository
public interface AsignaturaRepository extends JpaRepository<Asignatura, Long>{

  
	List<Asignatura>findAsignaturaByNombre(String nombre);
	
	@Query("SELECT a FROM Asignatura a WHERE a.curso.etapa = :curso")
	List<Asignatura>findAsignaturasByCurso(@Param("curso") String curso);
	
	@Query("SELECT a FROM Asignatura a WHERE a.nombre = :nombre And a.curso.etapa = :curso")
	List<Asignatura> findAsignaturasByNombreAndCurso(
			@Param("nombre") String nombre,
			@Param("curso") String curso);
  
	@Query("SELECT a FROM Asignatura a WHERE a.curso.id = :id")
	List<Asignatura>findAsignaturaByIdofCurso(@Param("id") Long id);
	
	/*  @Query("Select a From asignaturas where a.nombre =: Nombre or a.id_curso =: Id" )		
     List<Asignatura>findAsignaturaByNombreOrId(
    		 @Param ("nombre") String Nombre,
    		 @Param ("id_curso") Long Id
    		 ); */
	
}
