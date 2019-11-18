package edu.unimagdalena.academic.entities;

import java.io.Serializable;
import java.util.Collection;
import java.util.Iterator;
import java.util.LinkedList;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
@Entity
@Table(name = "cursos")
public class Curso implements Serializable {
 
	@Id 
	@GeneratedValue (strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column (name = "nivel")
	private Integer nivel;
	
	@Column(name = "etapa")
	private String etapa;
	
	@JsonIgnore
	@OneToMany(mappedBy="grado", cascade = CascadeType.ALL, orphanRemoval=true) //Lado Dominante
	private Set<Estudiante> estudiantes;	
	
	@JsonIgnore
	@OneToMany(mappedBy = "curso", cascade = CascadeType.ALL, orphanRemoval=true) // Lado Dominante
	private Set<Asignatura> asignaturas;

	public Curso() {
		 super();
		
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Integer getNivel() {
		return nivel;
	}

	public void setNivel(Integer nivel) {
		this.nivel = nivel;
	}

	public String getEtapa() {
		return etapa;
	}

	public void setEtapa(String etapa) {
		this.etapa = etapa;
	}

	public Set<Estudiante> getEstudiantes() {
		return estudiantes;
	}

	public void setEstudiantes(Set<Estudiante> estudiantes) {
		if(this.estudiantes.isEmpty()) {
			this.estudiantes = new Set<Estudiante>();
			this.estudiantes.clear();
		}
			this.estudiantes.addAll(estudiantes);
			for(Estudiante stud : estudiantes) {
				stud.setGrado(this);
			
			}
				
			
		
		this.estudiantes = estudiantes;
	}

	public Set<Asignatura> getAsignaturas() {
		return asignaturas;
		
	}

	public void setAsignaturas(Set<Asignatura> asignaturas) {
		if(this.asignaturas.isEmpty()) {
			this.asignaturas  = new Set<Asignatura>();
			this.asignaturas.clear();
		}
		this.asignaturas.addAll(asignaturas);
		
		for(Asignatura asig : asignaturas) {
			asig.setCurso(this);
		
		}
			
	}
	
	
	
}
