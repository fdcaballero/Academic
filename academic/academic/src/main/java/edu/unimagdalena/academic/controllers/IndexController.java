package edu.unimagdalena.academic.controllers;

import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.ui.Model;

import edu.unimagdalena.academic.entities.Usuario;

@Controller
public class IndexController {
	
	 
	//@RequestMapping(value  = {"/","/login"}, method = RequestMethod.GET)
	@GetMapping("/login")
	public String login() {
		return "index";
	}
	
	
	@PostMapping("/login")
	public String inicioSesion(/*@Valid Usuario user,BindingResult result ,Model model*/) {
		return "inicio";
	}
	
	
}
