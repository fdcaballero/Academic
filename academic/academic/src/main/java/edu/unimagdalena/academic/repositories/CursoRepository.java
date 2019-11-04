package edu.unimagdalena.academic.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import edu.unimagdalena.academic.entities.Curso;

@Repository
public interface CursoRepository extends JpaRepository<Curso, Long> { 
  	
	List<Curso> findCursoByNivel(String Nivel);
	
	@Query("SELECT c FROM cursos p WHERE c.nivel = :Nivel or c.etapa =:Etapa")
    List<Curso> findCursoByNivelOrEtapa(
    		@Param("Nivel") Integer Nivel,
    		@Param("Etapa") String Etapa
    		);

}
