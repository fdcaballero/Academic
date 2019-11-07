package edu.unimagdalena.academic.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import edu.unimagdalena.academic.entities.Curso;

@Repository
public interface CursoRepository extends JpaRepository<Curso, Long> { 
 	
	List<Curso> findCursosByNivel(Integer nivel);
	
	/*@Query("SELECT c FROM Curso c WHERE c.etapa = :etapa OR c.nivel = :nivel")
    List<Curso> findCursoByNivelOrEtapa(
    		@Param("nivel") Integer nivel,
    		@Param("etapa") String etapa); 
	*/
}
