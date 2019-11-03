package edu.unimagdalena.academic.entities;

import java.io.Serializable;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
@Entity
@Table(name = "Responsable_Alumnos")
public class Responsable_Alumno implements Serializable {
 
	@Id 
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name = "nombre" , nullable = false)
	private String nombre;
	@Column(name="apellido1" ,  nullable = false)
	private String apellido1;
	@Column (name = "apellido2")
	private String apellido2;
	@Column(name = "nif" , nullable = false)
	private String nif;
	@Column(name = "telefono" , nullable = false)
	private String telefono;
	@Column(name = "correo" , nullable = false)
	private String correo;
	
	@OneToMany(mappedBy = "responsable")//mapeo con la tabla de estudiantes
	private Set<Estudiante> estudiantes;

	/**
	 * 
	 */
	public Responsable_Alumno() {
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

	public String getApellido1() {
		return apellido1;
	}

	public void setApellido1(String apellido1) {
		this.apellido1 = apellido1;
	}

	public String getApellido2() {
		return apellido2;
	}

	public void setApellido2(String apellido2) {
		this.apellido2 = apellido2;
	}

	public String getNif() {
		return nif;
	}

	public void setNif(String nif) {
		this.nif = nif;
	}

	public String getTelefono() {
		return telefono;
	}

	public void setTelefono(String telefono) {
		this.telefono = telefono;
	}

	public String getCorreo() {
		return correo;
	}

	public void setCorreo(String correo) {
		this.correo = correo;
	}

	public Set<Estudiante> getEstudiantes() {
		return estudiantes;
	}

	public void setEstudiantes(Set<Estudiante> estudiantes) {
		this.estudiantes = estudiantes;
	}
	
}
