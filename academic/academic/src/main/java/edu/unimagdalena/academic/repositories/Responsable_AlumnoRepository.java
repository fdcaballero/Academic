package edu.unimagdalena.academic.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import edu.unimagdalena.academic.entities.Responsable_Alumno;

@Repository
public interface Responsable_AlumnoRepository extends JpaRepository<Responsable_Alumno, Long> {

}
