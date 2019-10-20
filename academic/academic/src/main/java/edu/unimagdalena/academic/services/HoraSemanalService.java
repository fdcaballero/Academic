package edu.unimagdalena.academic.services;

import edu.unimagdalena.academic.entities.Hora_Semanal;
import java.util.*;

public interface HoraSemanalService {
	
	List<Hora_Semanal> findAll();
	void delete(Hora_Semanal horas);
	Optional<Hora_Semanal> findById(Long id);
	Hora_Semanal save (Hora_Semanal horas);
	Hora_Semanal getOne(Long id);
	
	
}
