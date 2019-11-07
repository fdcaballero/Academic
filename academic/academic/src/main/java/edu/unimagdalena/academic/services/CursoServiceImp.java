package edu.unimagdalena.academic.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import edu.unimagdalena.academic.entities.Curso;
import edu.unimagdalena.academic.repositories.CursoRepository;

@Service
public class CursoServiceImp implements CursoService {

	@Autowired
	private CursoRepository cursoRepository;
	
	@Override
	public void delete(Curso curso) {
		cursoRepository.delete(curso);
		
	}

	@Override
	public Curso save(Curso curso) {
		return cursoRepository.save(curso);
	}

	@Override
	public List<Curso> findAll() {
		return cursoRepository.findAll();
	}

	@Override
	public Optional<Curso> findById(Long id) {
		return cursoRepository.findById(id);
	}

	@Override
	public Curso getOne(Long id) {
		return cursoRepository.getOne(id);
	}

	@Override
	public List<Curso> findCursosByNivel(Integer nivel) {
		// TODO Auto-generated method stub
		return cursoRepository.findCursosByNivel(nivel);
	}



	/*@Override
	public List<Curso> findCursoByNivelOrEtapa(Integer nivel, String etapa) {
		
		return cursoRepository.findCursoByNivelOrEtapa(nivel, etapa);
	}*/

}
