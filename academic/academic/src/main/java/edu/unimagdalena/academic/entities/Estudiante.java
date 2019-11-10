package edu.unimagdalena.academic.entities;

import java.io.Serializable;
import java.util.Date;
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
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.Transient;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "Estudiante")
public class Estudiante implements Serializable {
		
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@Column(name = "nombre", nullable = false)
	private String nombre;
	@Column(name="apellido1" ,  nullable = false)
	private String apellido1;
	@Column (name = "apellido2")
	private String apellido2;
	@Column(name = "nif", nullable = false)
	private String nif;
	@Column(name = "telefono")
	private String telefono;
	@Column(name = "correo")
	private String correo;
	
	@Transient
	private String var1String;
	
	
	public String getVar1String() {
		return var1String;
	}

	public void setVar1String(String var1String) {
		this.var1String = var1String;
	}

	@Transient
	private String varString;
	
	public String getVarString() {
		return varString;
	}

	public void setVarString(String varString) {
		this.varString = varString;
	}
	
	@ManyToOne
	@JoinColumn(name = "id_responsable") 
	private Responsable_Alumno responsable; // este nombre debe conincidir con el del mappedBy al otro lado de la tabla
	
	@ManyToOne // mapeo con la tabla Curso
	@JoinColumn(name = "id_curso")
	private Curso grado;/// podemos cambiar a curso
	
	@ManyToMany // Mapeo con la tabla de clases
	@JoinTable (name = "clase_estudiante",	
	joinColumns = @JoinColumn(name = "id_estudiante", referencedColumnName = "id"),
	inverseJoinColumns = @JoinColumn(name = "id_clase", referencedColumnName = "id"))
	private Set<Clase> clases;
	
	@Column
	private Boolean repetidor;
	
	@Column(name = "fecha_alta" , nullable = false)
	@Temporal(TemporalType.DATE)
	@DateTimeFormat(pattern = "dd-MM--yyyy")
	private Date fecha_alta;
	
	
	@Column(name = "fecha_baja")
	@Temporal(TemporalType.DATE)
	@DateTimeFormat(pattern = "dd-MM--yyyy")
	private Date fecha_baja;
	
	@Column(name = "observaciones")
	private String observacion;
	
	@OneToOne
	@JoinColumn(name = "t_user")
	private Usuario typeUser;

	public Estudiante() {
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

	public String getObservacion() {
		return observacion;
	}

	public void setObservacion(String observacion) {
		this.observacion = observacion;
	}

	public Usuario getTypeUser() {
		return typeUser;
	}

	public void setTypeUser(Usuario typeUser) {
		this.typeUser = typeUser;
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

	public Boolean getRepetidor() {
		return repetidor;
	}

	public void setRepetidor(Boolean repetidor) {
		this.repetidor = repetidor;
	}
	
	public Date getFecha_alta() {
		return fecha_alta;
	}

	public void setFecha_alta(Date fecha_alta) {
		this.fecha_alta = fecha_alta;
	}

	public Date getFecha_baja() {
		return fecha_baja;
	}

	public void setFecha_baja(Date fecha_baja) {
		this.fecha_baja = fecha_baja;
	}

	public String getObservaciones() {
		return observacion;
	}

	public void setObservaciones(String observaciones) {
		this.observacion = observaciones;
	}

	public Responsable_Alumno getResponsable() {
		return responsable;
	}

	public void setResponsable(Responsable_Alumno responsable) {
		this.responsable = responsable;
	}

	public Curso getGrado() {
		return grado;
	}

	public void setGrado(Curso grado) {
		this.grado = grado;
	}

	public Set<Clase> getClases() {
		return clases;
	}

	public void setClases(Set<Clase> clases) {
		this.clases = clases;
	}
	
}
