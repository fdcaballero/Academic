package edu.unimagdalena.academic.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import edu.unimagdalena.academic.entities.Clase;

@Repository
public interface ClaseRepository  extends JpaRepository<Clase, Integer>{

}
