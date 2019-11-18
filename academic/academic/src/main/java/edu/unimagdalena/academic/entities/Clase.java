package edu.unimagdalena.academic.entities;

import java.io.Serializable;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Transient;

import org.springframework.data.annotation.Reference;

import com.fasterxml.jackson.annotation.JsonIgnore;
@Entity
@Table(name = "Clases")
public class Clase implements Serializable {

	 @Id 
	 @GeneratedValue(strategy = GenerationType.IDENTITY)
	 private Long id;
	 
		 
	 @ManyToOne
	 @JoinColumn(name =" id_asignatura" )
	 private Asignatura asignatura;
	 
	 @ManyToOne
	 @JoinColumn(name = "id_profesor")
	 private Profesor profesor;
	 
	 @ManyToMany(cascade = CascadeType.ALL)
	 @JoinTable(name = "clase_horasemanal",
	 joinColumns = @JoinColumn(name = "id_clase", referencedColumnName = "id"), 
	 inverseJoinColumns = @JoinColumn(name = "id_horasemanal", referencedColumnName = "id"))
	 private Set<Hora_Semanal> horas_semanales;
	 
	 
	 
	 @Transient
	 private String varAux1;
	 
	 @Transient
	 private String varAux2;
	 
	 @JsonIgnore
	 @ManyToMany(mappedBy = "clases")
	 private Set<Estudiante> estudiantes;

	


	public String getVarAux1() {
		return varAux1;
	}

	public void setVarAux1(String varAux1) {
		this.varAux1 = varAux1;
	}

	public String getVarAux2() {
		return varAux2;
	}

	public void setVarAux2(String varAux2) {
		this.varAux2 = varAux2;
	}

	public Clase() {
		super();
		
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Asignatura getAsignatura() {
		return asignatura;
	}

	public void setAsignatura(Asignatura asignatura) {
		this.asignatura = asignatura;
	}

	public Profesor getProfesor() {
		return profesor;
	}

	public void setProfesor(Profesor profesor) {
		this.profesor = profesor;
	}

	public Set<Hora_Semanal> getHoras_semanales() {
		return horas_semanales;
	}

	public void setHoras_semanales(Set<Hora_Semanal> horas_semanales) {
		this.horas_semanales = horas_semanales;
	}

	public Set<Estudiante> getEstudiantes() {
		return estudiantes;
	}

	public void setEstudiantes(Set<Estudiante> estudiantes) {
		this.estudiantes = estudiantes;
	}
	 
	 
}
