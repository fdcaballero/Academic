package edu.unimagdalena.academic.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import edu.unimagdalena.academic.entities.Estudiante;
import java.util.*;

@Repository
public interface EstudianteRepository extends JpaRepository<Estudiante, Long> {
	
	List<Estudiante> findEstudianteByNombre(String nombre);
	Estudiante findEstudianteById(Long id);
	@Query("SELECT e FROM Estudiante e WHERE e.nombre = :buscaNombre And e.grado.etapa = :buscaCurso")
	List<Estudiante> findEstudiantesByNombreAndCurso(
			@Param("buscaNombre") String buscaNombre,
			@Param("buscaCurso") String buscaCurso
			);
	@Query("SELECT e FROM Estudiante e WHERE e.grado.etapa = :grado")
	List<Estudiante> findEstudiantesByGrado(@Param("grado") String grado);
}
