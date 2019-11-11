package edu.unimagdalena.academic.entities;

import java.io.Serializable;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Transient;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "asignaturas")
public class Asignatura implements Serializable {

  @Id 
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  
  @Column(name = "nombre" , nullable = false)
  private String nombre;
  
  
  @ManyToOne
  @JoinColumn(name="id_curso")
  private Curso curso;
  
  
  @OneToMany(mappedBy = "asignatura")
  private Set<Clase> clases;

  @Transient
  private String varString;
	
	
  
public String getVarString() {
		return varString;
	}

	public void setVarString(String varString) {
		this.varString = varString;
	}

public Asignatura() {
	super();
}

public Long getId() {
	return id;
}

public void setId(Long id) {
	this.id = id;
}

public String getNombre() {
	return nombre;
}

public void setNombre(String nombre) {
	this.nombre = nombre;
}

public Curso getCurso() {
	return curso;
}

public void setCurso(Curso curso) {
	this.curso = curso;
}

public Set<Clase> getClases() {
	return clases;
}

public void setClases(Set<Clase> clases) {
	this.clases = clases;
}
  
}
