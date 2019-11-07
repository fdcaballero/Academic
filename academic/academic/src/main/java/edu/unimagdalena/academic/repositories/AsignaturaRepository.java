package edu.unimagdalena.academic.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.*;

import edu.unimagdalena.academic.entities.Asignatura;

@Repository
public interface AsignaturaRepository extends JpaRepository<Asignatura, Long>{

  
	List<Asignatura>findAsignaturaByNombre(String Nombre);
		
   /*  @Query("Select a From asignaturas where a.nombre =: Nombre or a.id_curso =: Id" )		
     List<Asignatura>findAsignaturaByNombreOrId(
    		 @Param ("nombre") String Nombre,
    		 @Param ("id_curso") Long Id
    		 ); */
	
}
