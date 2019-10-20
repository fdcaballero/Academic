package edu.unimagdalena.academic.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import edu.unimagdalena.academic.entities.Hora_Semanal;
import edu.unimagdalena.academic.repositories.Hora_SemanalRepository;

@Service
public class HoraSemanalServiceImp implements HoraSemanalService {

	@Autowired
	private Hora_SemanalRepository horaSemanalRepository;
	@Override
	public List<Hora_Semanal> findAll() {
		
		return horaSemanalRepository.findAll();
	}

	@Override
	public void delete(Hora_Semanal horas) {
		horaSemanalRepository.delete(horas);
		
	}

	@Override
	public Optional<Hora_Semanal> findById(Long id) {
		return horaSemanalRepository.findById(id);
	}

	@Override
	public Hora_Semanal save(Hora_Semanal horas) {
		
		return horaSemanalRepository.save(horas);
	}

	@Override
	public Hora_Semanal getOne(Long id) {
	
		return horaSemanalRepository.getOne(id);
	}

}
