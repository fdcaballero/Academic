package edu.unimagdalena.academic.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import edu.unimagdalena.academic.entities.Estudiante;

@Repository
public interface StudentRepository extends JpaRepository<Estudiante, Integer> {

}