package edu.unimagdalena.academic.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import edu.unimagdalena.academic.entities.Asignatura;

@Repository
public interface AsignaturaRepository extends JpaRepository<Asignatura, Integer>{

}
