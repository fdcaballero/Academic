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
	@Query("SELECT e FROM Estudiante e WHERE e.nombre = : nombre or e.curso =: curso")
	List<Estudiante> findEstudiantesByNombreOrCurso(
			@Param("nombre") String nombre,
			@Param("curso") String curso
			);
	
}
