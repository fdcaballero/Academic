package edu.unimagdalena.academic.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import edu.unimagdalena.academic.entities.*;
import java.util.*;
import edu.unimagdalena.academic.services.*;

@Controller
public class EstudianteController {
	@Autowired 
	private CursoService cursoService;
	
	
	@GetMapping("/estudiante")
	public String accEstudiante(Model model) {
		List<Curso> curso = new LinkedList<>();
		model.addAttribute("cursos", curso);
		return "estudiantes";
	}
	
/*	@PostMapping("/buscar-estudiante")
	public String Buscar(@RequestParam("buscaNombre") String nombre, @RequestParam("buscaCurso") String curso, Model model) {
		
		List<Estudiante> estudiantes  = estudianteSevice.findEstudiantesByNombreOrCurso(nombre, curso);
		//List<Estudiante> estudiantes = estudianteSevice.findAll();
		List<Curso> cursos = cursoService.findAll();
		model.addAttribute("cursos", cursos);
		model.addAttribute("listaEstudiante", estudiantes);
		
		return "estudiantes";//::;
		
	}*/
}	
