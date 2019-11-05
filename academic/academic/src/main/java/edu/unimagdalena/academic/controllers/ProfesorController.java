package edu.unimagdalena.academic.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.ui.Model;
import edu.unimagdalena.academic.services.ProfesorService;
import java.util.*;
import edu.unimagdalena.academic.entities.*;


@Controller
public class ProfesorController {
	
	@Autowired 
	private ProfesorService profesorService;
	
	@PostMapping("/buscar-profesores")
	public String listarProfesores(@RequestParam("buscarNombre") String nombre, @RequestParam("buscarCC") String nif, Model model) {
		List<Profesor> profesores = profesorService.findProfesorByNombreOrCedula( nombre, nif);
		model.addAttribute("profesores", profesores);
		return "profesor";
	}
	

}
