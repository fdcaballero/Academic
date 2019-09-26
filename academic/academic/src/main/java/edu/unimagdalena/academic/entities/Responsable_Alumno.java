package edu.unimagdalena.academic.entities;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table(name = "Responsable_Alumnos")
public class Responsable_Alumno implements Serializable {
 
	@Id 
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
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
}
