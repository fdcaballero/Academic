package edu.unimagdalena.academic.entities;

import java.io.Serializable;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name =  "profesores")
public class Profesor implements Serializable {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	@Column(name = "nombre", nullable = false)
	private String nombre;
	@Column(name="apellido1", nullable = false)
	private String apellido1;
	@Column (name = "apellido2" )
	private String apellido2;
	@Column(name = "nif" , nullable = false)
	private String nif;
	@Column(name = "telefono" , nullable = false)
	private String telefono;
	@Column(name = "correo" , nullable = false)
	private String correo;
	@Column(name = "titulacion", nullable = true)
	private String titulacion;
	
	@OneToMany(mappedBy="profesor")
	private Set<Clase> clases;
	
	@OneToOne
	@JoinColumn(name = "t_user")
	private Usuario TpUsuario;
	
	public Profesor() {
		super();
		// TODO Auto-generated constructor stub
	}


	public Integer getId() {
		return id;
	}


	public void setId(Integer id) {
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


	public String getTitulacion() {
		return titulacion;
	}


	public void setTitulacion(String titulacion) {
		this.titulacion = titulacion;
	}


	public Set<Clase> getClases() {
		return clases;
	}


	public void setClases(Set<Clase> clases) {
		this.clases = clases;
	}
	
}
