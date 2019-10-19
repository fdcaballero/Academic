package edu.unimagdalena.academic.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import edu.unimagdalena.academic.entities.Curso;

@Repository
public interface CursoRepository extends JpaRepository<Curso, Long> { 

}
