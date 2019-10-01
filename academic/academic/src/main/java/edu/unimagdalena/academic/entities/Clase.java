package edu.unimagdalena.academic.entities;

import java.io.Serializable;
import java.util.Set;

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

import org.springframework.data.annotation.Reference;
@Entity
@Table(name = "Clases")
public class Clase implements Serializable {

	 @Id 
	 @GeneratedValue(strategy = GenerationType.IDENTITY)
	 private Integer id;
	 
		 
	 @ManyToOne
	 @JoinColumn(name =" id_asignatura")
	 private Asignatura asignatura;
	 
	 @ManyToOne
	 @JoinColumn(name = "id_profesor")
	 private Profesor profesor;
	 
	 @ManyToMany
	 @JoinTable(name = "clase_horasemanal",
	 joinColumns = @JoinColumn(name = "id_clase", referencedColumnName = "id"), 
	 inverseJoinColumns = @JoinColumn(name = "id_horasemanal", referencedColumnName = "id"))
	 private Set<Hora_Semanal> horas_semanales;
	 
	 @ManyToMany(mappedBy = "clases")
	 private Set<Estudiante> estudiantes;

	/**
	 * 
	 */
	public Clase() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
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
