package edu.unimagdalena.academic.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import edu.unimagdalena.academic.entities.Hora_Semanal;
@Repository
public interface Hora_SemanalRepository extends JpaRepository< Hora_Semanal, Integer> {

}
