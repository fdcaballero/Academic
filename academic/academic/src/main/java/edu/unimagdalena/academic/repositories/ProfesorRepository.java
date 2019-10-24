package edu.unimagdalena.academic.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import java.util.*;
import edu.unimagdalena.academic.entities.Profesor;

@Repository
public interface ProfesorRepository extends JpaRepository<Profesor, Long>{
	
	List<Profesor> findProfesoresByNombre(String nombre);
	
	@Query("SELECT p FROM Profesor p WHERE p.nombre = :nombre or p.nif =:nif")
	List<Profesor> findProfesorByNombreOrNif(
			@Param("nombre") String nombre,
			@Param("nif") String nif);
	
}
