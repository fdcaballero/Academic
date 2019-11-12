package edu.unimagdalena.academic.controllers;

import javax.naming.spi.DirStateFactory.Result;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;


import edu.unimagdalena.academic.entities.Usuario;
import edu.unimagdalena.academic.repositories.UsuarioRepository;;

@Controller
public class UsuarioController {
	
	@Autowired
	private UsuarioRepository usuarioServicio;
	
	
	
	@GetMapping("/registro")
	public String formUsuario(Model model){
		Usuario us = new Usuario();
		model.addAttribute("usuario" , us);
		
		return "registro";
	}
	
	@GetMapping("/inicio")
	public String inicio(Model model) {
		
		return "inicio";
	}
	
	@PostMapping("/registro")
	public String registroUsuario(@Valid Usuario usuario ,BindingResult result, Model model) {
		if (result.hasErrors()) {
			return "registro";
		}
		usuarioServicio.save(usuario);
		return "index";
	}
	
	
	@GetMapping("/clase")
	public String acClases(Model model) {
		
		return "clases";
	}
	
	@GetMapping("/docente")
	public String accDocente(Model model) {
		
		return "profesor";
		
	}
	@GetMapping("/mantenimiento-curso")
	public String accMantenimientoCurso(Model model) {
		
		return "mantenimiento-curso";
	}
	
	@GetMapping("/mantenimiento-asignatura")
	public String accMantenimientoAsig(Model model) {
		
		return "mantenimiento-asignatura";
	}
}
