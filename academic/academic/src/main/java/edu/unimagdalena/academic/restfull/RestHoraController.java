package edu.unimagdalena.academic.restfull;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import edu.unimagdalena.academic.services.HoraSemanalService;
import edu.unimagdalena.academic.entities.Hora_Semanal;
import edu.unimagdalena.academic.services.*;
import java.util.*;

import javax.persistence.EntityNotFoundException;

@RestController
@RequestMapping("/api/v1")
public class RestHoraController {

	@Autowired
	private HoraSemanalService Hora_SemanalRepository;
	
	@GetMapping("/HoraSemanal")
	public List<Hora_Semanal> getHora_Semanal(){
		return Hora_SemanalRepository.findAll();
	}
	

	@DeleteMapping("/HoraSemanal/{id}")
	public void DeleteHoraSemanal(@PathVariable Long id) {
		Hora_Semanal aux  = Hora_SemanalRepository.getOne(id);
		Hora_SemanalRepository.delete(aux);
		
	}

	@PutMapping("/HoraSemanal/{id}")
	public Hora_Semanal editHoraSemanal(@RequestBody Hora_Semanal HoraSemanal, @PathVariable Long id) {
		HoraSemanal.setId(id);
		return Hora_SemanalRepository.save(HoraSemanal);
		
	}
	
	@GetMapping("/HoraSemanal/{id}")
	public Hora_Semanal getHoraSemanal(@PathVariable("id") Long id ) {
		
		Optional<Hora_Semanal> HoraSemanal = Hora_SemanalRepository.findById(id);
		
		if(!HoraSemanal.isPresent()) {
			throw new EntityNotFoundException("No se encontro la hora semanal con id "+ id);
		}
		return HoraSemanal.get();
	}
	
	@PostMapping("/HoraSemanal")
	public Hora_Semanal createHoraSemanal(@RequestBody Hora_Semanal HoraSemanal) {
		return Hora_SemanalRepository.save(HoraSemanal);
	}	

}
