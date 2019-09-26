package edu.unimagdalena.academic.entities;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Table(name = "Students")
public class Student implements Serializable {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	@Column(name = "nombre", nullable = false)
	private String nombre;
	@Column(name="apellido1" ,  nullable = false)
	private String apellido1;
	@Column (name = "apellido2")
	private String apellido2;
	@Column(name = "nif")
	private String nif;
	@Column(name = "telefono")
	private String telefono;
	@Column(name = "correo")
	private String correo;
	//Falta unirlo
	@Column(name = "id_responsable")
	private Integer id_responsable;
	//Falta unirlo junto a los otros
	@Column(name =  "id_curso" , nullable = false)
	private Integer id_curso;
	
	@Column(name = "fecha_alta" , nullable = false)
	@Temporal(TemporalType.TIMESTAMP)
	private Date fecha_alta;
	//Falta el atributo repetidor del estudiante
	@Column(name = "fecha_baja")
	@Temporal(TemporalType.TIMESTAMP)
	private Date fecha_baja;
	
	@Column(name = "observaciones")
	private String observaciones;
}
